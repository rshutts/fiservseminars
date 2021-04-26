import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Accounts';

export default () => {
    const [status, getStatus] = useState(false);

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session);
                setStatus(true);
            })
    }, []);

    return (
        <div>
            {status ? 'You are logged in' : 'Please login below.'}
        </div>
    );
};