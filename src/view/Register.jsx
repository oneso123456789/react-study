import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        title: '',
        content: '',
        author: '',
    });

    const [files, setFiles] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const registerFormData = new FormData();

        registerFormData.append("title", formValue.title)
        registerFormData.append("content", formValue.content)
        registerFormData.append("author", formValue.author)
        for (let i = 0; i < files.length; i++) {
            registerFormData.append("files", files[i])
            console.log("안녕" + files[i])
        }


        try {
            const response = await axios({
                method: "post",
                url: "/api/register",
                data: registerFormData,
                headers: {"Content-Type": "multipart/form-data"},
            });
            navigate("/list");
            console.log(response);
            for (let i of files){
                console.log(i);
            }
            console.log("폼" + formValue)
        } catch (error) {
            console.log(error);
        }

    }

    /** data 할당 */
    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }


    const onChangeFiles = e => {
        setFiles([...files, ...e.target.files]);
        console.log(files);
        console.log(files.length + "길이");

        /*setFiles(f => ([...f, e.target.files[0]]));*/
    }


    return (
        <div>
            <form method={"post"}>
                <h1>글쓰기</h1>
                <p>제목<input name={"title"} value={formValue.title} onChange={handleChange}/></p>
                <p>내용<input name={"content"} value={formValue.content} onChange={handleChange}/></p>
                <p>작성자<input name={"author"} value={formValue.author} onChange={handleChange}/></p>
                <input type={"file"} name={"files"} onChange={onChangeFiles} multiple/>
                <button type={"button"} onClick={handleSubmit}>등록</button>
            </form>


        </div>
    )
}

export default Register;