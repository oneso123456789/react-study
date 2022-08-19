import {useEffect, useState} from "react";
import axios from "axios";
import '../App.css';
import {Link} from "react-router-dom";

function App() {
    const [list, setList] = useState([]);
    const [etc, setEtc] = useState(null);
    useEffect(() => {
        axios.get('/api/list')
            .then(response => {
                const {dtoList, ...Etc} = response.data;
                setList(dtoList);
                setEtc(Etc);
            })
            .catch(error => console.log(error))
    }, []);
    return (

        <div>
            <ul>
                커뮤니티
            </ul>
            <ul>
                {list.map(item => (
                    <li key={item.bno}>
                        <Link to={"/"}>{item.title}</Link>
                        <span><br/>{item.author}{"\t"}{item.modDate}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;