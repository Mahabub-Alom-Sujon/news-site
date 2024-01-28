"use client"
import React from 'react';
import SubmitButton from "@/components/master/SubmitButton";

const CommentForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-4">
                    <h5 className="mb-3">Write Yours</h5>
                    <textarea rows={6} onChange={()=>{}} className="form-control mb-2"/>
                    <SubmitButton className="all-btn btn mt-3 px-4" onClick={()=>{}} submit={false} text="Submit"/>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;