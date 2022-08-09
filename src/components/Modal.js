import React from "react";
import {ROW, COLUMN} from '../constants/Values';

export default function Modal({closeModal, jackPot, totalBingos}) {
    const getContent = () => {
        if (jackPot) {
            return (
                <div className="modal_content">
                    <span>!!WOW!!  CONGRATULATIONS!!</span>
                    <span>IT'S A JACKPOT BINGO!!!</span>
                    <button onClick={closeModal}>Close</button>
                </div>
            );
        } else {
            return (
                <div className="modal_content">
                    <span>!!CONGRATULATIONS!!</span>
                    <span>IT'S A BINGO!!</span>
                    <span><b>{totalBingos}</b> bingo so far, {ROW + COLUMN + 2 - totalBingos} more to go  </span>
                    <button onClick={closeModal}>Close</button>
                </div>
            );

        }

    }
    return (
        <div className="modal_container">
            <div className="modal_overlay"></div>
            {getContent()}
        </div>
    )
} 