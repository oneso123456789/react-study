import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";


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
            
            <Link to={"/list"}>
                <button style={urlname !== "/list" ? {opacity: '100'} : {opacity: '0'}}>goList</button>
            </Link>


            <footer style={{background: 'lightgray', padding: 16, fontSize: 24}}>Footer</footer>
        </div>
    )
};

export default Layout;