import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./view/home";
import About from "./view/about";
import Axios from "./view/axios";
import Profiles from "./view/Profiles";

function App() {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to='/'>Home</Link>
                    <br/>
                    <Link to='/about'>About</Link>
                    <br/>
                    <Link to='/profiles'>Profile</Link>
                    <br/>
                    <Link to='/axios'>Axios</Link>
                </nav>
                <header>----------------------------------</header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/axios" element={<Axios/>}/>
                    <Route path="/profiles/*" element={<Profiles/>}/>
                </Routes>
                <footer>----------------------------------</footer>
            </BrowserRouter>
        </div>
    );
}

export default App;