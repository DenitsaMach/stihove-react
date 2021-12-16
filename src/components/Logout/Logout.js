import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

import * as authService from "../../services/authService";
import { useAuthContext } from '../../contexts/AuthContext';

function Logout () {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    const [username] = useState(user.firstName);
    const [counter, setCounter] = useState(5);
    authService.logout()
        .then(authData => {
            logout();
        })
        .catch(err => {
            // TODO: show notification
            console.log(err);
        });
    useEffect(() => {
        let timer = setTimeout(() => {
            setCounter(counter - 1);
            if (counter <= 0) {
                clearInterval(timer);
                navigate('/login');
            }
        }, 1000);
    });
    return (
        <div>{username} successfully logged out! Redirecting to login after {counter}s</div>
    );
}

export default Logout;