import React from 'react'
import { useNavigate } from 'react-router-dom';

function Score() {
    const navigate = useNavigate();
    const score=10;
    const handleInputs = async(e) => {
      const res = await fetch("http://localhost:4000/rightanswer-user", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          score
        })
      })
      navigate("/Question5")
    }
  
    const handleInputs1 = async(e) => {
      navigate("/Question5")
    }
    return (
      <div className="bg-warning" style={{ height: "601px" }}>
        <div className="d-flex align-items-center justify-content-center container" style={{ height: "580px" }}>
          <div className="p-4 m-2 bg-dark text-white shadow rounded-2 w-25 h-25 container ">
              <h3>Your score is</h3>
                <h3 className='text-center mt-3 '>
                {localStorage.getItem("score")}
                </h3>
            </div>
          </div>
        </div>
    )
}

export default Score
