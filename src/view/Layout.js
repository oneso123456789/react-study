import {Outlet, useLocation, useNavigate} from "react-router-dom";


const Layout = () => {
    let navigate = useNavigate();
    const urlname = useLocation().pathname;
    console.log(urlname);
    if (urlname !== "/") {
        return (<div>
                <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
                    Header
                </header>
                <main>
                    <Outlet/>
                </main>
                <button
                    onClick={() => {
                        navigate('/');
                    } }
                >HOME
                </button>
                <button style={urlname!== "/" ? {color:'red'}:{color:"blue"}}>gom</button>
                <footer style={{background: 'lightgray', padding: 16, fontSize: 24}}>Footer</footer>
            </div>
        )
    }else{
        return (
            <div>
                <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
                    Header
                </header>
                <main>
                    <Outlet/>
                </main>
                <button style={urlname!== "/" ? {color:'red'}:{color:"blue"}}>gom</button>
                <footer style={{background: 'lightgray', padding: 16, fontSize: 24}}>Footer</footer>
            </div>
        );
    }
};

export default Layout;