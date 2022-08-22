import {Outlet, useLocation, useNavigate} from "react-router-dom";


const Layout = () => {
    let navigate = useNavigate();
    const urlname = useLocation().pathname;
    console.log(urlname);
        return (<div>
                <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
                    Header
                </header>
                <main>
                    <Outlet/>
                </main>
                <button
                    style={urlname !== "/" ? {opacity:'100'}:{opacity:'0'}}
                    onClick={() => {
                        navigate('/');
                    } }
                >HOME
                </button>
                <footer style={{background: 'lightgray', padding: 16, fontSize: 24}}>Footer</footer>
            </div>
        )
};

export default Layout;