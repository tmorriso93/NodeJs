import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bits Price</title>
        </Head>
        <Navbar/>
        <div className="container">
        {props.children}
        </div>
    </div>
);

export default Layout;