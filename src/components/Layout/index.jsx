import { useState } from "react";
import Drawer from "../Mobile/Drawer";
import Footer from "./Footer";
import Header from "./Header";


export default function Layout({children}) {
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            {drawer && <Drawer open={drawer} action={() => setDrawer(!drawer)} />}
            <div className="w-full overflow-x-hidden">
                <Header drawerAction={() => setDrawer(!drawer)}/>
                <div className='w-full pt-0 pb-0'>
                    {children && children}
                </div>


                
                <Footer/>
            </div>
        </>
    ) ;
}
