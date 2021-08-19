import React, { Component, useState } from 'react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import { Bar } from 'react-chartjs-2';

import config from '../../aws-config';

Amplify.configure({
  "aws_appsync_graphqlEndpoint": "https://k3v5mcn2mjckdkkoxd6xmcxxai.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  'aws_appsync_apiKey': 'da2-tsgw77xldbafbno255j6iwb4ei',
});

class Polling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      type: 'Answer',
      value: 0
    };
  };

  async componentDidMount() {
    try {
      const user = await Auth.currentUserInfo();
      const value = user.attributes['custom:userScore']
      console.log(value)
      const candidates = await API.graphql(graphqlOperation(queries.getCandidatesByName, { type: 'Answer' }))
      this.setState({
        candidates: candidates.data.getCandidatesByName.items,
        sortDirection: 'ASC',
      })
    } catch (err) {
      console.log('error fetching candidates...', err)
    }

    API.graphql(graphqlOperation(subscriptions.onCastVote)).subscribe({
      next: (voteCasted) => {
        const id = voteCasted.value.data.onCastVote.id
        const votes = voteCasted.value.data.onCastVote.votes
        const type = voteCasted.value.data.onCastVote.type
        const candidates = this.state.candidates
        const row = candidates.find( candidate => candidate.id === id );
        row.votes = votes;
        this.setState({ votes: candidates });
        console.log("state:", this.state.candidates)
      }
    })
  };

  render() {
    const candidateColors = ["red", "orange", "green", "blue"];
    return (
      <div className="App">
        <div className="container mx-auto md:w-3/5 px-3">
          <div className="text-grey-darkest md:text-lg italic mt-2 mb-3">Which is your favourite AWS serverless service?</div>
          <div className="flex py-2">
            { this.state.candidates.map((candidate,idx) =>
              <Candidate
                key={candidate.id}
                id={candidate.id}
                name={candidate.name}
                votes={candidate.votes}
                color={candidateColors[idx]}
              />
            )}
          </div>
        </div>
        <div className="container mx-auto md:w-3/5 px-3">
          <h1 className="text-lg text-grey-darkest py-6">Live updates</h1>
          <Chart data={this.state.candidates}></Chart>
        </div>
      </div>
    )
  }
}

class Chart extends Component {
  render() {
    const fontStack = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    const data = {
      labels: this.props.data.map((candidate) => ( candidate.name )),
      datasets: [{
        label: "# of votes",
        data: this.props.data.map((candidate) => ( candidate.votes )),
        backgroundColor: ['#CC1F1A', '#DE751F', '#1F9D55', '#2779BD']
      }]
    };
    const options = {
      title:     { display: false },
      legend:    { display: false },
      tooltips:  { enabled: false },
      responsive: true,
      layout:    { padding: { top: 10 } },
      scales: {
        xAxes: [{gridLines: {display: false }, ticks: {fontStyle: 'bold', fontColor: '#3D4852', fontFamily: fontStack}}],
        yAxes: [{ticks: {beginAtZero: true, maxTicksLimit: 8, fontStyle: 'normal', fontColor: '#3D4852', fontFamily: fontStack}}]
      }
    }
    return (
      <Bar data={data} width={100} height={50} options={options} />
    );
  }
}

function Candidate() {

  const [value, setValue] = useState({
    score: ""
  });

  async function handleSubmit(event) {
    try {
     const castVote = {
      id: event.id
      };
      await API.graphql(graphqlOperation(mutations.castVote, {input: castVote}));
      const user = await Auth.currentAuthenticatedUser();
      setValue({
        score: user.attributes['custom:userScore']
      });
      await Auth.updateUserAttributes(user, {
        'custom:userScore': value
      }); 
    } catch (error) {
      Error(error);
    }
  }
  return (
    <button
      className={`focus:outline-none flex-1 text-white pt-4 pb-3 px-3 mx-1 text-xs md:text-lg rounded bg-${this.props.color}-dark hover:bg-${this.props.color}-darker`}
      onClick={handleSubmit}>
      <b>{this.props.name}</b> <p className="py-1"><b>{this.props.votes}</b></p>
    </button>
  );
}

export default Polling;
