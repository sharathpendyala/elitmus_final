import React from 'react'
import { useNavigate } from 'react-router-dom';
import question3img from "./Images/question3img.jpeg";
import Timer from '../Timer';
function Question3() {
    const navigate = useNavigate();
    const handleInputs = async (e) => {
        let score = localStorage.getItem("score");
        score = parseInt(score) + 10;
        localStorage.setItem("score", score.toString());
        navigate("/Question4")
    }

    const handleInputs1 = async (e) => {
        navigate("/Question4")
    }
    return (
        <div className="bg-warning" style={{ height: "700px" }}>
            <Timer/>
            <div className="d-flex align-items-center justify-content-center container mt-5" style={{ height: "500px" }}>
                <div className="p-4 m-2 bg-dark text-white shadow rounded-2 w-50 container ">
                    <div className='container ms-2 me-3'>
                       <img src={question3img} alt="logo" className='w-75 ms-5'/>
                    </div>
                    <div class="container-fluid mt-4 ">
                        <div class="row">
                            <div class="col-4 ms-5 btn btn-success" name="chef" onClick={handleInputs1}>30</div>
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs}>150</div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>50</div>
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>99</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question3
