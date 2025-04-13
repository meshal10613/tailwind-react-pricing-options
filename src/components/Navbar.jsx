import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
const navigationData = [
{
    id: "home",
    name: "Home",
    path: "/",
},
{
    id: "about",
    name: "About Us",
    path: "/about",
},
{
    id: "services",
    name: "Services",
    path: "/services",
},
{
    id: "blog",
    name: "Blog",
    path: "/blog",
},
{
    id: "contact",
    name: "Contact",
    path: "/contact",
},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <li key={route.id} className="md:mr-5 my-3 px-3 py-1 rounded-md hover:bg-gray-200"><a href={`${route.path}`}>{route.name}</a></li>)
    return (
        <nav className="flex justify-between items-center m-10">
            <div onClick={() => {setOpen(!open)}} className="flex gap-3 cursor-pointer">
                {open ? <X className="md:hidden"></X> : <Menu className="md:hidden"/>}
                <ul className={`md:hidden absolute ${open ? "top-20" : "-top-60"} duration-1000`}>
                    {
                        links
                    }
                </ul>
                <h3 className="text-2xl">My navbar</h3>
            </div>
            <ul className="md:flex hidden ">
                {
                    links
                }
            </ul>
            <button className="btn btn-ghost">Sign in</button>
        </nav>
    )
};

export default Navbar;
