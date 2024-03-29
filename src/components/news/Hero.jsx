"use client"
import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';

const Hero = (props) => {
    const [index,setIndex]=useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    
    return (
        <div className="container section-top">
            <div className="row">
                <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                    <Carousel id="carouselHero" activeIndex={index} onSelect={handleSelect} controls={false}>
                        {
                            props.slider.map((item,i)=>{
                                return (
                                    <Carousel.Item key={i}>
                                        <Link  href={`/details?id=${item['id']}`}>
                                            <img alt="img" className="w-100" src={item['img1']}  />
                                            {/*<Image
                                                src={item["img1"]}
                                                alt='hreo img'
                                                width={500}
                                                height={500}
                                                layout='responsive'
                                                priority
                                            
                                            />*/}

                                            <Carousel.Caption className="caption" >
                                                <h4>{item['title']}</h4>
                                                <p>{item['short_des']}</p>
                                            </Carousel.Caption>
                                        </Link>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-6">
                    <Link href={`/details?id=${props.featured[0]['id']}`} id='Hero' className="card h-100">
                        <img alt="" className="w-100" src={props.featured[0]['img2']}/>
                        {/*<Image
                            src={props.featured[0]['img2']}
                            alt='hreo img'
                            width={500}
                            height={500}
                            layout='responsive'
                                            
                        />*/}
                        <div className="card-img-overlay d-flex align-items-end ">
                            <div className="caption">
                                <h4>{props.featured[0]['title']}</h4>
                                <p>{props.featured[0]['short_des']}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;