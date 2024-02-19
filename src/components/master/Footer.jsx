import Link from 'next/link';
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Subscribe from '../news/Subscribe';
const Footer = (props) => {
    return (
        <>
            <div className='footer-area pt-100 pb-70'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6'>
                            <div className='single-footer-widget'>
                                <Link href="/">
                                <img src='/images/logo-3.png' alt=''/>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <Link href={props.data['socials'][0]['facebook']} target="_blank">
                                            <i><FaFacebookF /></i>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link href={props.data['socials'][0]['youtube']} target="_blank">
                                            <i><FaYoutube/></i>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link href={props.data['socials'][0]['linkedin']} target="_blank">
                                            <i><FaLinkedinIn /></i>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                    <Link href={props.data['socials'][0]['twitter']} target="_blank">
                                            <i><FaTwitter /></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                        <h5 className="text-white fw-bold mb-3">RECOMMENDED</h5>
                            {
                                props.data['categories'].map((Item,i)=>{
                                    if(i<9){
                                        return (
                                            <Link key={i} className="nav-link text-white my-1" href={"/category?id="+Item['id']} >{Item['name']}</Link>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className='col-lg-3 col-md-6'>
                        <h5 className="text-white fw-bold my-3"> LEGAL </h5>
                            <ul className="list-unstyled text-white">
                                <li className="my-1"><Link href="/policy" className="nav-link" >Privacy Policy</Link></li>
                                <li className="my-1"><Link href="/terms"  className="nav-link">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <Subscribe/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;