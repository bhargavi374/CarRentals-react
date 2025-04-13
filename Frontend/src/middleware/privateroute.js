
import { useContext, useEffect } from 'react';
import { UserContext } from '../Context/Clientcontext';
import { useNavigate } from 'react-router-dom';

export default function Privateroute() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);
}