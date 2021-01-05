import React, { useState, useEffect } from 'react';
import { Card, Icon, Image, Button, Header, Checkbox } from 'semantic-ui-react';
import Loading from '../Loading';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import UpdateForm from './UpdateForm'

const ProfileCards = () => {
  const [open, setOpen] = React.useState(false)
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
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
    isAuthenticated && (<div>
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
          <Card.Meta>
            <p className='lead text-muted'>User: {user[`https://fiservseminars.com/userType`]}{' '}</p>
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
    </Card>
    </div>
    )
  );
};

export default withAuthenticationRequired(ProfileCards, {
  onRedirecting: () => <Loading />,
});
