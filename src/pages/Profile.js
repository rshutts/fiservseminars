import React from 'react';
import { getUser } from '../graphql/queries';
import { Auth } from 'aws-amplify';
import Container from '../Container';
import { API, graphqlOperation } from 'aws-amplify';
import Button from '../Button';
import { right } from 'glamor';

class Profile extends React.Component {
  state = {
    id: '',
    email: '',
    name: '',
    nickname: '',
    address: '',
    given_name: '',
    middle_name: '',
    locale: '',
  };

  async componentDidMount() {
    // add this code to componentDidMount
    await Auth.currentAuthenticatedUser().then((user) => {
      this.setState({
        id: user.attributes.sub,
        email: user.attributes.email,
        name: user.attributes.name,
        nickname: user.attributes.nickname,
        given_name: user.attributes.given_name,
        middle_name: user.attributes.middle_name,
        locale: user.attributes.locale,
        address: user.attributes.address,
      });
    });
  }

  render() {
    const userParams = this.state;
    console.log(userParams);
    return (
      <>
        <Container>
          <h1>Profile</h1>
        </Container>
        <div style={rowStyle}>
          <h1 style={h1style}>Name:</h1>
          <h2 style={h2style}>{userParams.name}</h2>
        </div>
        <div style={rowStyle}>
          <h1 style={h1style}>Email:</h1>
          <h2 style={h2style}>{userParams.email}</h2>
        </div>
        <div style={rowStyle}>
          <h1 style={h1style}>Bank Name:</h1>
          <h2 style={h2style}>{userParams.given_name}</h2>
        </div>
        <div style={rowStyle}>
          <h1 style={h1style}>Bank Role/Title:</h1>
          <h2 style={h2style}>{userParams.nickname}</h2>
        </div>
        <div style={rowStyle}>
          <h1 style={h1style}>City:</h1>
          <h2 style={h2style}>{userParams.address}</h2>
        </div>
        <div style={rowStyle}>
          <h1 style={h1style}>State:</h1>
          <h2 style={h2style}>{userParams.locale}</h2>
        </div>

        <div style={rowStyle}>
          <h1 style={h1style}>Seminar Date:</h1>
          <h2 style={h2style}>{userParams.middle_name}</h2>
        </div>
      </>
    );
  }
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
};
const h1style = {
  margin: '5px',
};
const h2style = {
  paddingLeft: '5px',
  color: 'white',
  margin: '2px',
};

export default Profile;
