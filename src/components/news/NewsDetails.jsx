import React from 'react';
import parse from 'html-react-parser';
const NewsDetails = (props) => {
    return (
        <div>
            <div className="container">
                <h4 className="my-2">{props.details['title']}</h4>
                <div className='section-title'></div>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <img className="w-100" src={props.details['img1']} />
                        {parse(props.details['long_des'])}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;