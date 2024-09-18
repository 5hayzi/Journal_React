import Login from './Login';
import SignUp from './SignUp';
import NavBar from '../UI/NavBar';
import { useLocation } from 'react-router-dom';

function Access() {
    const location = useLocation();

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
