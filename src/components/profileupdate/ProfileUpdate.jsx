"use client"
import {useState} from "react";
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";
import {useRouter} from "next/navigation";


const ProfileUpdate = (props) => {
    const [data, setData] = useState({firstName:props.data["firstName"],lastName:props.data["lastName"],email:props.data["email"],mobile:props.data["mobile"],password:props.data["password"]});
    const [submit, setSubmit] = useState(false);
    const router=useRouter();
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async () => {

      if(IsEmpty(data.firstName)){
          ErrorToast("First Name Required")
      }
      else if(IsEmpty(data.lastName)){
          ErrorToast("Last Name Required")
      }
      else if(IsEmpty(data.mobile)){
          ErrorToast("Mobile No Required")
      }
      else if(IsEmail(data.email)){
          ErrorToast("Valid Email Address Required")
      }
      else if(IsEmpty(data.password)){
          ErrorToast("Password Required")
      }
      else{
          setSubmit(true);
          const options = {
              method: 'POST',
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              body: JSON.stringify(data)
          }
          let res=await fetch("/api/user/profile/update",options);
          let ResJson=await res.json();
          setSubmit(false);
          if(ResJson['status']==="success"){
              SuccessToast("Registration Success")
              router.refresh()
          }
          else{
              ErrorToast("Request Fail")
          }
      }
    }

    return (
        <div className="row h-100  justify-content-center center-screen">
                <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                    <div className="card container-fluid animated fadeIn p-5 shadow my-5">
                        <div className="row ">
                            <h5 className="mb-1 mx-0 px-0">User Update</h5>
                        <div className="col-md-12 col-lg-6 col-sm-12 p-1 col-12">
                            <label className="form-label">First Name</label>
                            <input value={data.firstName} onChange={(e)=>{inputOnChange("firstName",e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-12 col-lg-6 col-sm-12 p-1 col-12">
                            <label className="form-label">Last Name</label>
                            <input value={data.lastName} onChange={(e)=>{inputOnChange("lastName",e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-12 col-lg-6 col-sm-12 p-1 col-12">
                            <label className="form-label">Mobile</label>
                            <input value={data.mobile}  onChange={(e)=>{inputOnChange("mobile",e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-12 col-lg-6 col-sm-12 p-1 col-12">
                            <label className="form-label">Email</label>
                            <input value={data.email} onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control"/>
                        </div>
                        <div className="col-md-12 col-lg-6 col-sm-12 p-1 col-12">
                            <label className="form-label">Password</label>
                            <input value={data.password} onChange={(e)=>{inputOnChange("password",e.target.value)}} type="password" className="form-control"/>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 col-sm-12 p-1 col-12">
                                <SubmitButton className="all-btn btn w-100 mt-3" submit={submit} onClick={formSubmit} text="Save Change"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    );
};

export default ProfileUpdate;