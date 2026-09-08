import { useContext, useEffect } from "react";
import { UserContext } from "../Context/Clientcontext";
import { useNavigate } from "react-router-dom";

export default function Publicroute() {
    const { user, ready } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (ready && user) {
            navigate("/account", { replace: true });
        }
    }, [ready, user, navigate]);

    return null;
}