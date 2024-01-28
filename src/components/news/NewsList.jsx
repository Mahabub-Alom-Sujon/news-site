import React from 'react';
import Link from "next/link";
const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
};
const NewsList = (props) => {
    return (
        <div className="row">
            <div className='section-title'>
                <h2>Latest news</h2>
            </div>
            {
                props.latest.map((item,i)=>{
                    return <div key={i} className="p-2 col-md-4">
                        <div className="card bg-white shadow-sm">
                            <img className="card-img-top" src={item['img3']} alt="News Image"/>
                            <div className="card-body">
                                <h6 className="card-title">{item['title']}</h6>
                                <p>{item['short_des']}</p>
                                <p className="my-2 fw-bold p-0">
                                    <i className="bi bi-clock pe-2"></i>
                                    {formatDate(item["createdAt"])}
                                </p>
                                <Link href={`/details?id=${item['id']}`} className="new-btn btn mt-2 btn-sm">Read More</Link>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default NewsList;