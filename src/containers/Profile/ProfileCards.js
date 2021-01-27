import React, { useState, useEffect, Component } from 'react';
import { withRouter } from "react-router-dom";
import { Card, Icon, Image, Button, Header, Checkbox } from 'semantic-ui-react';
import { Auth } from "aws-amplify";
import { onError } from "../../libs/errorLib";

import PhotoUpload from "../Profile/components/photoUpload"

class ProfileCards extends Component {

/*   handleClick() {
    const history = useHistory();
    history.push("/home");
  } */
  constructor(props){
    super(props);
      this.state = {
        username: '',
        attributes: {
          email: '',
          name: '',
          bank_name: '',
          bank_title: '',
          city: '',
          state: '',
          seminar_date: '',
        }, 
      }
  }

  handleClick = () => {
  const { history } = this.props;
    if(history) history.push('/profile/update');
  }

  componentDidMount() {
    Auth.currentUserInfo()
      .then(data => {
        this.setState({
          username: data.username,
          email: data.attributes.email,
          name: data.attributes.name,
          bank_name: data.attributes.given_name,
          bank_title: data.attributes.nickname,
          city: data.attributes.locale,
          state: data.attributes.address,
          seminar_date: data.attributes.birthday,
        })
      })
      .catch(err => console.log('error: ', err))
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <Card>
          {/* <Image
            src={user.picture}
            wrapped
            ui={false}
            alt='Profile'
            className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
          /> */}
          <Card.Content>
            <Card.Header>
              <h2>
                Name: {this.state.name}
              </h2>
            </Card.Header>
            <Card.Meta>
              <p className='lead text-muted'>Email:  {this.state.email}</p>
            </Card.Meta>
            {/* <Card.Meta>
              <p className='lead text-muted'>User: {user[`https://fiservseminars.com/userType`]}{' '}</p>
            </Card.Meta> */}
            <Card.Description>
              <h2>Bank Name:  {this.state.bank_name}</h2>
              <h2>Bank Title:  {this.state.bank_title}</h2>
              <h2>City: {this.state.city}</h2>
              <h2>State: {this.state.state}</h2>
              {/* <h2>
                Seminar Date: {user[`https://fiservseminars.com/seminarDate`]}
              </h2> */}
            </Card.Description>
            <Button
              id='signupBtn'
              color='primary'
              className='btn-margin'
              onClick={() => this.handleClick()}
            >
              Update Profile
            </Button>
            <PhotoUpload/>
          </Card.Content>
      </Card>
      </div>
    )
  }
}
  
  
  export default withRouter(ProfileCards);
