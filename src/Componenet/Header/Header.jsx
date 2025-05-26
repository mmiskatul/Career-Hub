import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links = <>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/appliedjob'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
                        <IoMenu className='text-2xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {links}   
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-xl">CareerHub</NavLink>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/applyform' className="btn">Star Applying</NavLink>
            </div>
        </div>
    );
};

export default Header;