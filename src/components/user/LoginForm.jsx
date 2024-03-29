"use client"
import {useState} from "react";
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";
import Link from "next/link";
import {useRouter} from "next/navigation";
const LoginForm = () => {
    const router=useRouter();
    let [data, setData] = useState({email:"",password:""});
    const [submit, setSubmit] = useState(false);
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }



    const formSubmit =async (e) => {
      e.preventDefault();
      if(IsEmail(data.email)){
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

          let res=await fetch("/api/user/login",options);
          let ResJson=await res.json();

          if (ResJson['status'] === "success") {
                setData({email:"",password:""}) 
                SuccessToast("Login Success")
                window.location.href = '/'; 
          }
          else {
                setSubmit(false);
                ErrorToast("Request Fail")
          }

      }
    }

    return (
        <div className="row h-100 justify-content-center center-screen">
        <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
            <form onSubmit={formSubmit} className="card animated fadeIn p-5 my-3 shadow">

                <h5 className="mb-3">User Login</h5>
                <label className="form-label">User Email</label>
                <input value={data.email} onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control mb-2"/>

                <label className="form-label">User Password</label>
                <input value={data.password} onChange={(e)=>{inputOnChange("password",e.target.value)}} type="password" className="form-control mb-1"/>

                <SubmitButton className="all-btn btn mt-3" submit={submit} text="Login"/>

                <div className="my-3 d-flex">
                    <Link href="/user/registration" className="nav-link mx-2">Sign Up |</Link>
                    <Link href="/user/emailVerify" className="nav-link">Forget Password</Link>
                </div>

            </form>
        </div>
    </div>
       
    );
};
export default LoginForm;