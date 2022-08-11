import { useNavigate } from 'react-router-dom';
import React from 'react';

function Home() {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >HOME</button>
        </div>
    )
}
export default Home;