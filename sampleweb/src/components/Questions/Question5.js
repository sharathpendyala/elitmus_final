import React from 'react'
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer';

function Question5() {
    const navigate = useNavigate();
    const handleInputs = async (e) => {
        let score = localStorage.getItem("score");
        score = parseInt(score) + 10;
        localStorage.setItem("score", score.toString());
        navigate("/Score")
    }

    const handleInputs1 = async(e)=>{
        navigate("/Score")
    }

    return (
        
        <div className="bg-warning" style={{ height: "601px" }}>
           <Timer/>
            <div className="d-flex align-items-center justify-content-center container mt-3" style={{ height: "450px" }}>
                <div className="p-4 m-2 bg-dark text-white shadow rounded-2 w-50 container ">
                    <div className='container ms-2 me-3'>
                        Find the odd one out
                    </div>
                    <div class="container-fluid mt-4 ">
                        <div class="row">
                            <div class="col-4 ms-5 btn btn-success" name="chef" onClick={handleInputs1}>Swim</div>
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs}>Listen</div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>Dance</div>
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>Climb</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question5
