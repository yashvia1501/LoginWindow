import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../assets/profileimg.png"

const Details = () => {
    const [logindata,setLoginData]=useState([]);
    const [show,setShow]=useState(false)
    const [userData,setuserData]=useState('')

    var todayDate=new Date().toISOString().slice(0,10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Birthday=()=>{
      const getuser=localStorage.getItem("user_login")
      if(getuser && getuser.length){
        const user=JSON.parse(getuser);
        // console.log(user);
        setuserData(user);
        setLoginData(user);
        const userbirth=logindata.map((el,key)=>{
            return el.date===todayDate
        })
       
        if(userbirth){
            setTimeout(() => {
                console.log("ok")
                handleShow()
            }, 3000);
        }
      }
    }
    console.log(logindata,"loginData")
    console.log(userData,"user")
    useEffect(()=>{
        Birthday()
    },[])
    console.log(userData, "userdata")
    console.log(userData[0], "0 of userdata")
  return (
    <div>
        {
      logindata.length===0 ? "error":
        <>
       
        {logindata[0].date===todayDate ?
        <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>"Woohoo, HAPPY BIRTHDAY!"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Thank You !
          </Button>
        </Modal.Footer>
      </Modal> :
      ""}
      {/*
      Bootstarp card
       {<Card className="text-center mx-auto" style={{ width: '18rem',width: '30rem', minHeight: '25rem'}}>
      <Card.Img className="mx-auto" variant="top" style={{width: '308px', height: '234px'}} src={img} />
      <Card.Body>
        <Card.Title>Profile Info</Card.Title>
        <Card.Text style={{height:"72px"}}>
         <div style={{fontFamily:"cursive"}}>Name- {userData && userData[0].name}</div>
         <div style={{fontFamily:"cursive"}}> Email- {userData && userData[0].email}</div>
         <div style={{fontFamily:"cursive"}}>DOB- {userData && userData[0].date}</div>
        </Card.Text>
        <Button variant="primary">Okay</Button>
      </Card.Body>
      </Card>
      } */}
      <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="card p-3" style={{borderRadius: "20px"}}>
                        <div className="text-center mb-3">
                            <img className="img-fluid" style={{height: "234px"}} src={img} alt="profile img" />
                        </div>
                        <div className="text-center">
                            <div className="mb-2" style={{fontFamily: "cursive"}}>Name: {userData && userData[0] && userData[0].name}</div>
                            <div className="mb-2" style={{fontFamily: "cursive"}}>Email: {userData && userData[0] && userData[0].email}</div>
                            <div className="mb-2" style={{fontFamily: "cursive"}}>DOB: {userData && userData[0] && userData[0].date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        }

    </div>
  )
}

export default Details
