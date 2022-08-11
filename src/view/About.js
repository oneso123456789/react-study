import React from 'react';
import {useSearchParams} from "react-router-dom";

const About = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail'); // 쿼리의 파싱결과값은 문자열입니다.
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail !== 'true'});
    }

    const onIncreaseMode = () => {
        let nextMode = mode === null ? 1 : parseInt(mode) +1;
        setSearchParams({mode: nextMode, detail});
    };

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
            <br/>
        </div>
    );
};

export default About;