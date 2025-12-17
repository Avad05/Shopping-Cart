import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from './Layout.module.css'

export default function Layout(){
    return( 
        <div>       
        <div >
       <div className="navigation"> <Navbar /> </div>
        </div>
        <div className={styles.layout}>
         <Outlet />
         </div>
         </div>
    )
}