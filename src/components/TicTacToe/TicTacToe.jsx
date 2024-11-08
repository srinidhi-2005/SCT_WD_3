import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle from '../assets/o.png'
import cross from '../assets/x.png'

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [fix, setFix] = useState(false);
    let titleRefe = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let boxArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const updateTurn = () => {
        if (!fix) {
            const nextPlayer = count % 2 === 0 ? 'X' : 'O';
            const playerImage = nextPlayer === 'X' ? cross : circle;
            titleRefe.current.innerHTML = `<span style="color: rgb(244, 14, 14); font-size: 25px;">Player -> <img src="${playerImage}" style="width: 50px; height: 50px;"> turn</span>`;
        }
    }

    const click = (e, n) => {
        if(fix) {
            return 0;
        }
        if(count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}'>`;
            data[n] = "X";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src='${circle}'>`;
            data[n] = "O";
            setCount(++count);
        }
        const isWinner = winning();
        if(!isWinner) {
            updateTurn();
        }
    }

    const winning = () => {
        if(data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
            return true;
        } else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
            return true;
        } else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
            return true;
        } else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
            return true;
        } else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
            return true;
        } else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
            return true;
        } else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
            return true;
        } else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
            return true;
        }
         return false;
    }
    const won = (winner) => {
        setFix(true);
        if(winner === 'X') {
            titleRefe.current.innerHTML = `<span style="color: #4CAF50; font-size: 30px;">Player <img src="${cross}" style="width: 50px; height: 50px;"> wins...!</span>`;
        } else {
            titleRefe.current.innerHTML = `<span style="color: #4CAF50; font-size: 30px;">Player <img src="${circle}" style="width: 50px; height: 50px;"> wins...!</span>`;
        }
    }
    const reset = () => {
        setFix(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        titleRefe.current.innerHTML = `<span style="color: rgb(244, 14, 14); font-size: 25px;">Player -> <img src="${cross}" style="width: 50px; height: 50px;"> turn</span>`;
        boxArr.map((e) => {
            e.current.innerHTML = "";
        })
    }
  return (
    <div className='cont'>
      <h1 className='title'>TIC - TAC - TOE GAME</h1>
      <h3 ref={titleRefe}></h3>
      <div className="board">
        <div className="row1">
            <div className="box" ref={box1} onClick={(e) => {click(e, 0)}}></div>
            <div className="box" ref={box2} onClick={(e) => {click(e, 1)}}></div>
            <div className="box" ref={box3} onClick={(e) => {click(e, 2)}}></div>
        </div>
        <div className="row2">
            <div className="box" ref={box4} onClick={(e) => {click(e, 3)}}></div>
            <div className="box" ref={box5} onClick={(e) => {click(e, 4)}}></div>
            <div className="box" ref={box6} onClick={(e) => {click(e, 5)}}></div>
        </div>
        <div className="row3">
            <div className="box" ref={box7} onClick={(e) => {click(e, 6)}}></div>
            <div className="box" ref={box8} onClick={(e) => {click(e, 7)}}></div>
            <div className="box" ref={box9} onClick={(e) => {click(e, 8)}}></div>
        </div>
      </div>
      <button className='resetbtn' onClick={() => {reset()}}>Reset Game</button>
    </div>
  )
}

export default TicTacToe