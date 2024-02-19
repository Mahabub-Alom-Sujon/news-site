"use client"
import React, { useState } from 'react';
import SubmitButton from "@/components/master/SubmitButton";
import { useRouter } from "next/navigation";
import {ErrorToast, IsEmpty, SuccessToast} from "@/utility/FormHelper";
const CommentForm = (props) => {
    const router = useRouter();
    let [data, setData] = useState({postID:parseInt(props.postID),descriptions:""});
    const [submit, setSubmit] = useState(false);
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async () => {
        if(IsEmpty(data.descriptions)){
            ErrorToast("Comments Description Required !")
        }
        else{
            setSubmit(true);
            const options = {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }

            let res=await fetch("/api/comments/manage",options);
            let ResJson=await res.json();
            setSubmit(false);

            if (ResJson['status'] === "success") {
                SuccessToast("Request Success");
                router.refresh()
            }
            else {
                router.push("user/login")
                ErrorToast("User login")
            }

        }
        
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-4">
                    <h5 className="mb-3">Write Yours</h5>
                    <textarea rows={6} onChange={(e)=>{inputOnChange("descriptions",e.target.value)}} className="form-control mb-2"/>
                    <SubmitButton className="all-btn btn mt-3 px-4" onClick={formSubmit} submit={submit} text="Submit"/>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;