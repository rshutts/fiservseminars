import React, { useState, useEffect } from 'react';
import { Card, Icon, Image, Button, Modal, Header, Checkbox, Form } from 'semantic-ui-react';
import Loading from '../components/Loading';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const ProfileCards = () => {
  const [open, setOpen] = React.useState(false)
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  console.log(user);
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'fiservseminars.us.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  return (
    isAuthenticated && (
      <Card>
        <Image
          src={user.picture}
          wrapped
          ui={false}
          alt='Profile'
          className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
        />
        <Card.Content>
          <Card.Header>
            <h2>
              Name: {user[`https://fiservseminars.com/first_name`]}{' '}
              {user[`https://fiservseminars.com/last_name`]}{' '}
            </h2>
          </Card.Header>
          <Card.Meta>
            <p className='lead text-muted'>Email: {user.email}</p>
          </Card.Meta>
          <Card.Description>
            <h2>Bank Name: {user[`https://fiservseminars.com/bank_name`]}</h2>
            <h2>Bank Title: {user[`https://fiservseminars.com/bank_title`]}</h2>
            <h2>City: {user[`https://fiservseminars.com/city`]}</h2>
            <h2>State: {user[`https://fiservseminars.com/state`]}</h2>
            <h2>
              Seminar Date: {user[`https://fiservseminars.com/seminarDate`]}
            </h2>
          </Card.Description>
        </Card.Content>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
    </Card>
      
    )
  );
};

export default withAuthenticationRequired(ProfileCards, {
  onRedirecting: () => <Loading />,
});
