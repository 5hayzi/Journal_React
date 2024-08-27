import Login from './Login';
import SignUp from './SignUp';
import NavBar from '../UI/NavBar';
import { useLocation } from 'react-router-dom';

function Access() {
    const location = useLocation();

    return (
        <div>
            <div className="hidden sm:flex">
                <NavBar />
            </div>
            
            {location.pathname === '/access/log-in' ? (
                <Login />
            ) : location.pathname === '/access/sign-up' ? (
                <SignUp />
            ) : null}
        </div>
    );
}

export default Access;
