import './index.css'
import Sidebar from '../sidebar/index'
import { Outlet } from 'react-router'


const Layout = () => {
    return (
        <>
        <Sidebar />
        <Outlet />
        </>
    )
}


export default Layout