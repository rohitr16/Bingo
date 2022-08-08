import {FREE_SLOT, SLOT_LABELS} from '../constants/Values';


export const createCard = (row , column) => {
    const card = new Array(row);
    const usedSlot = new Array(90);

    for (let i=0;i<row;i++) {
        card[i] = new Array(column);
        for(let j=0;j<column; j++) {
            if ( i === row/2 && j === column/2) {
                card[row][column] = FREE_SLOT;
            } else {
                let slot = Math.floor(Math.random()*90);
                while (usedSlot[slot]) slot = Math.floor(Math.random()*91);
                card[i][j] = SLOT_LABELS[slot];
                usedSlot[slot] = true;
            }
        }
    }

    return card;
}