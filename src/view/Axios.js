import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('/api/list')
            .then(response => setdata(response.data))
            .catch(error => console.log(error))
    }, []);

    data.dtoList.map(item => (
        item.bno
    ))
    return (

        <div>
            {/*{data.dtoList}*/}
                        <ul>
                {data.dtoList.map(item => (
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