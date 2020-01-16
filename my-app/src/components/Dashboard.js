import React, { useState } from 'react'
import Display from './Display';


const Dashboard = () => {
    const [strike, setStrike] = useState(0)
    const [ball, setBall] = useState(0)
    const [foul, setFoul] = useState(0)
    


    const addStrike = e => {
        e.preventDefault();
         setStrike(strike + 1);
    };

    const addBall = e => {
        e.preventDefault();
        setBall(ball + 1);
    }

    const addHit = e => {
        e.preventDefault();
        setBall(0)
        setStrike(0)
    }

    const addFoul = e => {
    e.preventDefault();
    if(strike === 0){
        setStrike(strike+1)
        setFoul(1)
    }else if(strike === 1) {
        setStrike(2);
        setFoul(2)
    }else if(strike === 2){
        setStrike(2);
        setFoul(foul+1)
    }
    };

    if(ball === 4 || strike  === 3){
        setBall(0)
        setStrike(0)
    }

    // console.log(strike)
    // console.log(ball)
    // console.log(foul)
    // console.log(hit)

    return (
        <div>
        <Display ball={ball} strike={strike}/>
        <button onClick={addStrike}> strike </button>
        <button onClick={addBall}> ball </button>
        <button onClick={addFoul}> foul </button>
        <button onClick={addHit}> hit </button>
        </div>
    )
}

export default Dashboard