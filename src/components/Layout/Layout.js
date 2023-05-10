import Container from "../Container";
import Header from "../Header";
import Footer from "../Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <Container>
            <Header/>
            <Outlet/>
            <Footer/>
        </Container>
    );
};

export default Layout;