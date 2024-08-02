import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img  from './Sign_img';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate=useNavigate();
    const [inpval,setInpval]=useState({
        name:"",
        email:"",
        date:"",
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
    const {name,email,date,password}=inpval;
    if(name==="" || email==="" || password==="" || date===""){
        alert("field is empty")
    }else if(!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/)){
        alert("invalid email")
    }else if(password.length<5){
        alert("enter passowrd of more than 5 char")
    }else{
     console.log("succesfully added data")
     let db = localStorage.getItem("userDB") ;
     if(db){

         db = JSON.parse(db)
         const emailExists=db.find((item)=>item.email===email)
         if(emailExists){
            alert("email already exists")
         }
         else{
            localStorage.setItem("userDB",JSON.stringify([...db,inpval])) 
            navigate("/login")
         }
     }else{
        localStorage.setItem("userDB",JSON.stringify([inpval])) 
        navigate("/login")

     }
      
     
    }
  }
  

  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
            <div className='left_data mt-3 ' style={{width:"100%"}}>
                <h3 className='text-center col-lg-4'>Sign up</h3>
                <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="text" name="name" onChange={getData} placeholder="Enter Your Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="email" name="email" onChange={getData} placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="date" name="date" onChange={getData} />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" name="password" onChange={getData} placeholder="Password" ></Form.Control>
        
      </Form.Group>
      <Button variant="primary" type="submit" className='col-lg-6' onClick={addData} style={{background:"rgb(67,185,127)"}}>
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already have an account <span><NavLink to="/login">Sign In</NavLink></span></p>
            </div>
          <div className='bgImg'><Sign_img/></div> 
        </section>
      </div>
    </>
  )
}

export default Home
