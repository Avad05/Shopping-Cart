import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from './Layout.module.css'

export default function Layout(){
    return(        
        <div className={styles.layout}>
       <div className="navigation"> <Navbar /> </div>
        <Outlet />
        </div>
    )
}