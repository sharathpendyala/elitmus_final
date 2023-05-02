import React from 'react'
import { useNavigate } from 'react-router-dom';

const Instructions = () => {
    const navigate = useNavigate();
    const handleInputs = () => {
        navigate("/Home");
    }
    return (
        <div className='p-2 bg-warning' style={{ height: "601px", width: "100%" }}>
            <h2 style={{marginTop:"80px"}}>Instructions for the Game</h2>
            <div className='justify-content-center border w-50 bg-dark text-white' style={{marginLeft:"350px",marginTop:"30px"}}> 
                <p>1.You will be given 5 questions to assess your soft skills</p>
                <p>2.You need to select one of the given four options</p>
                <p>3.Click the "Start Game" option below to start the game</p>
                <div className='btn btn-success ' style={{ marginLeft: "220px", marginTop: "15px" ,marginBottom:"50px"}} onClick={handleInputs}>Start Game</div>
            </div>
        </div>
    )
}

export default Instructions
