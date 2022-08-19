import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./view/Home";
import About from "./view/About";
import Profiles from "./view/Profiles";
import Article from "./view/Article";
import Articles from "./view/Articles";
import Layout from "./view/Layout";
import List from "./view/List";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/profiles/*" element={<Profiles/>}/>
                    <Route path={"/articles"} element={<Articles/>}>
                        <Route path={":id"} element={<Article/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;