import React, {useState} from 'react';
import axios from "axios";

const Register = () => {
    const [formValue, setformValue] = useState({
        title: '',
        content: '',
        author: ''
    });

    const handleSubmit = async () => {
        const registerFormData = new FormData();
        registerFormData.append("title", formValue.title)
        registerFormData.append("content", formValue.content)
        registerFormData.append("author", formValue.author)

        try {
            const response = await axios({
                method: "post",
                url: "/api/register",
                data: registerFormData,
                headers: {"Content-Type": "multipart/form-data",},
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>글쓰기</h1>
                <p>제목<input name={"title"} value={formValue.title} onChange={handleChange}/></p>
                <p>내용<input name={"content"} value={formValue.content} onChange={handleChange}/></p>
                <p>작성자<input name={"author"} value={formValue.author} onChange={handleChange}/></p>
                <button type={"submit"}>등록</button>
            </form>
        </div>
    )
}

export default Register;