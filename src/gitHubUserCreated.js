import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import './App.css';

export const GitHubUser = () => {
    const [born, updateData] = useState([]);

    const getUserCreated = async () => {
        const userData = await API.get("cryptoapi", "/born");
        
        console.log(userData);
        
        updateData(userData.born)
    };

    useEffect(() => {
            getUserCreated();
    }, []);
    return (
        <h2>The Github user {born.login} was born {born.created_at}</h2>
    );
};
