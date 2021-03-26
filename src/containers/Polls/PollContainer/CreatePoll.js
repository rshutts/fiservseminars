import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
/* import { getUserPolls, logout } from '../../../utils/redux/Actions' */

import { FaHome } from 'react-icons/fa';
import Popup from '../components/Popup/Popup';
import InputBox from '../components/Input Popup/InputBox';

const CreatePoll = () => {

    const [popup, setPopup] = useState(false)
    const [ip, setIp] = useState(false)
    const dispatch = useDispatch();
    const userPolls = useSelector(state => state.userPolls)
    /* const { isAuth, user } = authUser; */
    
    /* useEffect(() => {
        dispatch(getUserPolls())
    }, []) */

    /* if (!isAuth) return <Redirect to="/" /> */

    return (
        <div>
            <div className="sub-container">
                <h1>Hi</h1>
                {popup && (
                    <Popup setPopup={setPopup} polls={userPolls} />
                )}
                {ip && (
                    <InputBox setIp={setIp} />
                )}
                {/* <Link className="back-to-home" to="/"><FaHome className="icon" /></Link> */}
                {/* <p className="username">{user.username}</p> */}

                <div className="flex-container">
                    <div className="your-polls" onClick={() => setPopup(true)}>
                        <div className="">Your Polls</div>
                    </div>
                    <br />
                    <div className="create-polls" onClick={() => setIp(true)}>
                        <div className="">Create Polls</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreatePoll