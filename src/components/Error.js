import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa'

const Error = props => (
    <div>
        {Object.entries(props).map(([err, val]) => (
            <pre err={err}>
            <FaExclamationCircle/><strong> Login Error: </strong>
            {val}
            </pre>
        ))}
    </div>
);

export default Error;