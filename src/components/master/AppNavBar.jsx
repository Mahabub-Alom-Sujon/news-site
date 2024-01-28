"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoTwitter } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import UserDropDown from "@/components/master/UserDropDown";

const AppNavBar = (props) => {
    let [searchKey,SetSearchKey]=useState("0");
    let [login,SetLogin]=useState(false);

    useEffect(() => {
        if(Cookies.get('token')){
            SetLogin(true);
        }
        else {
            SetLogin(false);
        }
    }, []);
    return (
        <>
            <div className='top-header-area'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-header-social">
                                <li>
                                    <Link href={props.data['socials'][0]['facebook']} target="_blank">
                                        <i><BiLogoFacebook /></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={props.data['socials'][0]['facebook']}  target="_blank">
                                        <i><BiLogoInstagram/></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={props.data['socials'][0]['linkedin']}  target="_blank">
                                        <i><LiaLinkedinIn/></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={props.data['socials'][0]['twitter']}  target="_blank">
                                        <i><IoLogoTwitter/></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={props.data['socials'][0]['youtube']} target="_blank">
                                        <i><AiFillYoutube/></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6'>

                        <ul className="top-header-others">
                                <li>
                                {
                                login?(<UserDropDown/>):(<Link href="/user/login" className="btn ms-3 all-btn">Login</Link>)
                                }
                                    {/*<i><LuUser/></i>
                                    <Link href="/user/login">Login</Link>*/}
                                </li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-navbar'>
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <img src='/images/logo-1.png'/>
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link f-13 active" aria-current="page" href="/">Home</Link>
                            </li>
                            {
                                props.data['categories'].map((Item,i)=>{
                                    return (
                                        <li className='nav-item'>
                                            <Link key={i} className="nav-link f-13"  href={"/category?id="+Item['id']} >{Item['name']}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <form className="search-box" role="search">

                            <input onChange={(e)=>{SetSearchKey(e.target.value)}} className="form-control" type="search" placeholder="Search for.." aria-label="Search"/>
                            <Link href={`/search?keyword=${searchKey}`} type="submit">
                                <i><IoIosSearch /></i>
                            </Link>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default AppNavBar;