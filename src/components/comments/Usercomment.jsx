"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import {ErrorToast, SuccessToast} from "@/utility/FormHelper";
const Usercomment = (props) => {
    console.log(props.data);
    const router = useRouter();
    const onDelete =async (id) => {
        const options = {
            method: 'DELETE',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({id:parseInt(id)})
        }
        let res=await fetch("/api/comments/manage",options);
          let ResJson=await res.json();

          if (ResJson['status'] === "success") {
              SuccessToast("Request Success")
              router.refresh()
              
          }
          else {
                ErrorToast("Request Fail")
          }
    }
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-12 shadow '>
                    <div className='card py-3'>
                        <ul className="list-group bg-transparent list-group-flush">
                            
                            {
                                props.data.map((item, i) => {
                                return  <li key={i} className="list-group-item bg-transparent">
                                    <h6 className="text-dark">
                                        <i className="bi bi-newspaper"></i> {item['news_list']['title']}
                                    </h6>
                                    <p className="text-secondary">{item['descriptions']}</p>
                                    <button onClick={()=>onDelete(item["id"])} className='all-btn btn'>Remove</button>
                                </li>
                                })
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usercomment;