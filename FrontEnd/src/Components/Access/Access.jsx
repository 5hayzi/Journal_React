import Login from './Login';
import SignUp from './SignUp';
import NavBar from '../UI/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Access() {
    const location = useLocation();
    const navigate = useNavigate();
    const loggedIn = useSelector((state)=> state.userData.loggedIn);

    useEffect(()=>{
        loggedIn ? navigate('/'):''
    },[])

    return (
        <div>
            <div className="hidden sm:flex dark:bg-slate-800">
                <NavBar />
            </div>
            
            {location.pathname === '/access/login' ? (
                <Login />
            ) : location.pathname === '/access/signup' ? (
                <SignUp />
            ) : null}
        </div>
    );
}

export default Access;
