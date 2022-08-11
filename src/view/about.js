import React from 'react';
import {useLocation} from "react-router";

const About = () => {
    const location = useLocation();
    const detail = location.search = '?detail=true'; // 쿼리의 파싱결과값은 문자열입니다.

    console.log(location)
    return (
        <div>
            <h1>설명</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습</p>
            {detail && <p>detail 값을 true 로 설정하셨군요!</p>}
        </div>
    );
};

export default About;