import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [dtoList, setDtoList] = useState([]);
    const [etc, setEtc] = useState(null);
    useEffect(() => {
        axios.get('/api/list')
            .then(response => {
                const {dtoList, ...etc} = response;
                setDtoList(dtoList);
                setEtc(etc);
            })
            .catch(error => console.log(error))
    }, []);

    return (

        <div>
            <ul>
                {etc === null ? '데이터 로딩중' :
                    dtoList.map(item => (
                        <li key={item.bno}>
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <p>{item.content}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default App;