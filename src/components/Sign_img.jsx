import React from 'react';
import img  from "../assets/bgimg.png"

const Sign_img = () => {
    return (
        <>
            <div className='right_data mt-3 img-fluid' style={{ width: "65%" }}>
                <div>
                    <img src={img}  style={{width: "416px",height:"400px" }}alt="img" />
                </div>
            </div>
        </>
    )
}

export default Sign_img
