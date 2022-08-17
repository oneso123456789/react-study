import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [data, setdata] = useState('')
    useEffect(() => {
        axios.get('/api/list')
            .then(response => setdata(response.data))
            .catch(error => console.log(error))
    }, []);



    return (
        <div>
            {data.totalPage}
        </div>
    );
}

export default App;