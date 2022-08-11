import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3> 유저 목록:</h3>
            <ul>
                <li>
                    <Link to={"/profiles/velopert"}>velopert</Link>
                </li>
                <li>
                    <Link to={"/profiles/chunsik"}>춘식</Link>
                </li>
                <li>
                    <Link to={"/profiles/void"}>존재하지 않는 프로필 </Link>
                </li>
            </ul>

            <Routes>
                <Route path={"/*"} element={<div>유저를 선택</div>}/>
                <Route path={":username"} element={<Profile/>}/>
            </Routes>
        </div>
    )
}

export default Profiles;