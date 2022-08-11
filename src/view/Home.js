import {Link, useLocation} from 'react-router-dom';
import React, {useEffect} from 'react';

function Home() {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [ location ])
    return (
        <div>
            <h1>홈</h1>
            <p>가장먼저 보여지는 페이지</p>
            <nav>
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/about'>About</Link>
                <br/>
                <Link to='/profiles'>Profile</Link>
                <br/>
                <Link to='/axios'>Axios</Link>
                <br/>
                <Link to='/articles'>articles</Link>
            </nav>
        </div>
    )
}
export default Home;