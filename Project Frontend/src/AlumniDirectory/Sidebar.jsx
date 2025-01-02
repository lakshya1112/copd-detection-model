import { useState } from "react";


const toggleSidebar= (toggleValue)=>{
    console.log(toggleValue)
}


const Sidebar = ()=>{
    const [sidebar, toggleSidebar] = useState(true)
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>
        </>
    )
}


export default Sidebar;