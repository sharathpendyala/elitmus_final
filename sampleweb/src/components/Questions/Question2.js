import React from 'react'
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer';

function Question2() {
    const navigate = useNavigate();
    const handleInputs = async (e) => {
        let score = localStorage.getItem("score");
        score = parseInt(score) + 10;
        localStorage.setItem("score", score.toString());
        navigate("/Question3")
    }

    const handleInputs1 = async (e) => {
        navigate("/Question3")
    }
    return (
        <div className="bg-warning" style={{ height: "601px" }}>
            <Timer/>
            <div className="d-flex align-items-center justify-content-center container" style={{ height: "450px" }}>
                <div className="p-4 m-2 bg-dark text-white shadow rounded-2 w-50 container ">
                    <div className='container ms-2 me-3'>
                        100 people standing in a circle in an order 1 to 100. No.1 has a sword. He kills next person (i.e. no. 2) and gives sword to next to next (i.e no.3).
                        All person does the same until only 1 survives. Which number survives at the last?
                    </div>
                    <div class="container-fluid mt-4 ">
                        <div class="row">
                            <div class="col-4 ms-5 btn btn-success" name="chef" onClick={handleInputs}>73</div>
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>74</div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>75</div>
                            <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>99</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question2
