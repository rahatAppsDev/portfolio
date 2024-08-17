'use client'

import React from 'react'
import "./Gamescreen.css"
import Button from '../Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
const Gamescreen = () => {
    const numberarray = [1,2,3,4,5,6];
    const [score,setScore] = useState(0)
    const [selectednumber, setSelectednumber] = useState();
    const [selecteddice, setSelecteddice] = useState(1);
    const [error,setError] = useState("");
    const [showRules,setShowRules] = useState(false)
    
    
    
    
     const rolldicefunc = (max,min) => {
        if (!selectednumber) {
            setError("You have not selected any number")
            return

        } else {
            setError("")
        }
        const randomnumber = Math.floor(Math.random() * (max-min) + min)
        console.log(randomnumber)
        setSelecteddice((prev) => randomnumber)
        console.log(selecteddice,randomnumber)
        if (selectednumber === randomnumber) {
            setScore((prev) => prev+randomnumber)
        } else {
            setScore((prev) => prev-randomnumber)
        }
        setSelectednumber(undefined)
         

    }
  return (
    <div className='gamescreen'>
    <div className='headgamecreen'>
        <div className='scorehead'>
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
        <div className="numberheads">
        <p className='error'>{error}</p>
        <div className="numbers">
            {numberarray.map((value,index) => {
                return <div onClick={() => {
                    if(error != "") {
                        setError("")
                    }
                    setSelectednumber(value)   
                }} className={`numberkey ${selectednumber===value ? "boxselected" : "" }`} key={`${index}`}>{value}</div>
            })}
            
        </div>
        <p>Select Number</p>
        </div>
    </div>

    <div className="diceallcontainer">
        <div onClick={() => {rolldicefunc(1,7)}} className="diceimgcontainer">
            <Image quality={100} width={500} height={500} className='diceimg' src={`/assets/images/dices/dice${selecteddice}.png`} alt="dice image" />
        </div>
        <p>Click on the dice to roll</p>
        < Button onClick={() => {
            if(error != "") {
                setError("")
            }
            setScore(0)
        }} classname={"resetscorebtn"} text={`${"Reset Score"}`}/>
        < Button onClick={() => {
            setShowRules((prev) => !prev)
        }} classname="showrulesbtn" text={`${showRules ? "Hide Rules" : "Show Rules"}`}/>
    </div>
    {showRules && <div className="rulescontainer">
        <h3>How to play dice game</h3>
        <ul><li>Select any number</li>
        <li>Click on dice</li>
        <li>After click on dice if the selected number is equal to the dice then same points will be added to score otherwise deducted from score</li>
</ul>

    </div>}
    
    </div>
  )
}

/*
const Box = styled.div`
     height: 40px;
    width: 40px;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: black;
    display: grid;
    place-items: center;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
`
 */
export default Gamescreen