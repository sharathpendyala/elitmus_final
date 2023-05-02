import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';

localStorage.setItem("score","0")
function Home() {
  const navigate = useNavigate();
  const handleInputs = async(e) => {
    let score=localStorage.getItem("score");
    score=parseInt(score)+10;
    localStorage.setItem("score",score.toString());
    navigate("/Question2")
  }
  const [timestamp, settimestamp] = useState(0);
  
  const handleInputs1 = async(e) => {
    navigate("/Question2")
  }
  return (
    <div className="bg-warning" style={{ height: "601px" }}>
      <Timer/>
      <div className="d-flex align-items-center justify-content-center container " style={{ height: "450px" }}>
        <div className="p-4 m-2 bg-dark text-white shadow rounded-2 w-50 container ">
          <div className='container ms-2 me-3'>
            Mr. John was killed on Saturday after noon. In Police investigation, his butler said he was bathing. His wife said she was reading book. His chef said he was cooking breakfast. His maid said she was folding clothes, and the gardener said he was watering in garden.
            Police catch hold the culprit, who is the culprit?
          </div>
          <div class="container-fluid mt-4 ">
            <div class="row">
              <div class="col-4 ms-5 btn btn-success" name="chef" onClick={handleInputs}>Chef</div>
              <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>Police</div>
            </div>
            <div class="row mt-4">
              <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>Maid</div>
              <div class="col-4 ms-5 btn btn-success" onClick={handleInputs1}>gardener</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
