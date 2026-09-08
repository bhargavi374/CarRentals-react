import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        axios.get('/verify', {
            withCredentials: true
        })
        .then(({ data }) => {
            console.log("Verified user:", data);
            setUser(data);
            setReady(true);
        })
        .catch((error) => {
            console.log("Verify error:", error);
            setUser(null);
            setReady(true);
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}