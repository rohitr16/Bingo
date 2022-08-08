import {FREE_SLOT, SLOT_LABELS} from '../constants/Values';


export const createCard = (row , column) => {
    const card = new Array(row);
    const usedSlot = new Array(90);

    for (let i=0;i<row;i++) {
        card[i] = new Array(column);
        for(let j=0;j<column; j++) {
            if ( i === Math.floor(row/2) && j === Math.floor(column/2)) {
                card[i][j] = FREE_SLOT;
            } else {
                let slot = Math.floor(Math.random()*90);
                while (usedSlot[slot]) slot = Math.floor(Math.random()*90);
                card[i][j] = SLOT_LABELS[slot];
                usedSlot[slot] = true;
            }
        }
    }

    return card;
}