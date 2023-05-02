import React from 'react'
import { useState, useEffect } from 'react';
import './Timer.css'
const Timer = (props) => {
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);
    var timer;
    useEffect(()=>{
        timer =setInterval(()=>{
            setSeconds(seconds+1)
            if(seconds===59){
                setMinutes(minutes+1)
                setSeconds(0);
            }
        },1000)
       return ()=>clearInterval(timer);
    })

    return (
        <div className='timer ms-5 '>
            <div className='container1 ms-5'>
                <div className='timer_container ms-5'>
                    <h1 className='p-2 mt-2 ms-5'>Timer 🕛</h1>
                    <h1 className='exacttime'>{minutes<10? "0"+minutes:minutes}:{seconds<10 ?"0"+seconds:seconds}</h1>
                </div>
            </div>
        </div>
    )
}

export default Timer;