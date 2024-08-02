import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { useNavigate, NavLink  } from 'react-router-dom';

const Login = () => {
    
    const navigate=useNavigate();
    const [inpval,setInpval]=useState({
        email:"",
        password:""
    })
    const [data,setData]=useState([])
    console.log(inpval)

  const getData=(e)=>{
     const {value,name}=e.target; //obj destructuring
     setInpval(()=>{
        return {
            ...inpval,
            [name]:value
        }
     })
  }
  const addData=(e)=>{
    e.preventDefault();
    const getuserArr=localStorage.getItem("userDB");
    console.log(getuserArr)

    const {email,password}=inpval;
    if(email==="" || password===""){
        alert("field is empty")
    }else if(!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/)){
        alert("invalid email")
    }else if(password.length<5){
        alert("enter passowrd of more than 5 char")
    }else{
         if(getuserArr && getuserArr.length>0){
            const userdata=JSON.parse(getuserArr)
            const userlogin=userdata.filter((el,key)=>{
                return el.email===email && el.password===password
            })
            if(userlogin.length===0) {alert("couldn't match details, please sign up first")}
            else {
                console.log(userlogin,"successful")
                localStorage.setItem("user_login",JSON.stringify(userlogin))
                navigate("/details")
            } 
         }
    }
  }

  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
            <div className='left_data mt-3 p-3' style={{width:"100%"}}>
                <h3 className='text-center col-lg-4'>Sign In</h3>
                <Form>
      
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="email" name="email" onChange={getData} placeholder="Enter Email" />
      </Form.Group>
      

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='col-lg-6' onClick={addData} style={{background:"rgb(67,185,127)"}}>
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Go to sign up <span><NavLink to="/">Sign Up</NavLink></span></p>
            </div>
            {/* <Sign_img/> */}
        </section>
      </div>
    </>
  )
}

export default Login
