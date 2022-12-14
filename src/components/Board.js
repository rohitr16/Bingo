import React, {Component} from "react";
import {createCard} from '../utility/util';
import {ROW, COLUMN} from '../constants/Values';
import * as actions from '../actions';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Modal from './Modal';


class Board extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            jackPot: false
        };
        this.totalBingos = 0;
    }

    componentDidMount () {
        const {setCardList, setSelectedSlot} = this.props;
        const cards = createCard(ROW, COLUMN);
        const slotsAnnounced = new Array(ROW);

        for(let i=0 ;i < ROW;i++) {
            slotsAnnounced[i] = new Array(COLUMN);
            for(let j=0;j< COLUMN;j++) {
                if ( j === Math.floor(COLUMN/2) && i === Math.floor(ROW/2)) {
                    slotsAnnounced[i][j] = true;
                } else {
                    slotsAnnounced[i][j] = false;
                }         
            }
        }

        setCardList(cards);
        setSelectedSlot(slotsAnnounced);
    }

    renderTableRows(card = [], slotsAnnounced) {
        return (
            <tbody>
                {card.map((item, row) => {
                    return (
                        <tr>
                            {card[row].map((item, column) => {
                                return (
                                    <td 
                                        key={card[row][column]} 
                                        row={row} column={column} 
                                        onClick={this.onClickSlot}
                                        className={classnames( {selected: slotsAnnounced[row][column]})}
                                    >
                                        {card[row][column]}
                                    </td>
                                );
                            })}
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    onClickSlot = (event) => {
        const {slotsAnnounced = [], setSelectedSlot} = this.props;
        const {row, column} = event.target.attributes;
        const rowInt = parseInt(row.value);
        const colInt = parseInt(column.value);
        if (slotsAnnounced[rowInt][colInt] === true) {
            return;
        }

        const temp = [...slotsAnnounced];
        temp[parseInt(row.value)][parseInt(column.value)] = true;
        setSelectedSlot(temp);
        let bingos = this.checkLineBingo(rowInt, colInt);
        if (rowInt === colInt || rowInt === (COLUMN - colInt - 1)) {
            bingos += this.checkDiagonalBingo(rowInt, colInt);
        }
        if (bingos > 0) {
            this.showModalAndCheckJackpot(bingos);
        }
    }

    checkLineBingo = (rowInt, colInt) => {
        const {slotsAnnounced}  = this.props

        let count = 0;
        let bingos = 0;
        for(let j=0;j<COLUMN;j++) {
            if (slotsAnnounced[rowInt][j] === true) {
                count++;
            }
        }
        if (count === COLUMN) {
            bingos++;
        }

        count = 0;
        for(let j=0;j<ROW;j++) {
            if (slotsAnnounced[j][colInt] === true) {
                count++;
            }
        }
        if (count === ROW ) {
            bingos++;
        }

        return bingos;
    }

    checkDiagonalBingo = (rowInt, colInt) => {
        const {slotsAnnounced} = this.props;

        let count = 0;
        let bingos = 0;
        if (rowInt === colInt) {
            for(let i=0;i<ROW;i++) {
                if (slotsAnnounced[i][i] === true) {
                    count++;
                }
            }
            if (count === ROW) {
                bingos++;
            }
        } else {
            for(let i=ROW-1;i>=0;i--) {
                if (slotsAnnounced[i][ROW-i-1] === true) {
                    count++;
                }
            }
    
            if (count === ROW) {
                bingos++;
            }
        }

        return bingos;

    }

    showModalAndCheckJackpot  = (bingos) => {               
        this.totalBingos += bingos;
        if (this.totalBingos === (ROW + COLUMN + 2)) {
            this.setState({showModal: true, jackPot: true});
        } else {
            this.setState({showModal:true});  
        }
    }

    onCreateNewBoard = () => {
        const {setCardList, setSelectedSlot} = this.props;
        const card = createCard(ROW, COLUMN);
        
        const slotsAnnounced = new Array(ROW);

        for(let i=0 ;i < ROW;i++) {
            slotsAnnounced[i] = new Array(COLUMN);
            for(let j=0;j< COLUMN;j++) {
                if ( j === Math.floor(COLUMN/2) && i === Math.floor(ROW/2)) {
                    slotsAnnounced[i][j] = true;
                } else {
                    slotsAnnounced[i][j] = false;
                }         
            }
        }
        this.totalBingos = 0;

        setSelectedSlot(slotsAnnounced);
        setCardList(card);
    }

    closeModal = () =>  {
        this.setState({showModal: false, jackPot:false});
    }
    
    render() {
        const {card, slotsAnnounced} = this.props;
        return (
            <div className="container">
                {this.state.showModal && <Modal closeModal={this.closeModal} jackPot={this.state.jackPot} totalBingos={this.totalBingos} />}
                <div className="container__button"  onClick={this.onCreateNewBoard}>
                    <span className="container_span"> New Game</span>
                </div>
                <table>               
                    {this.renderTableRows(card, slotsAnnounced)}
                </table>
            </div>
        );
    }
}


const mapStateToProps = ({cardSlice = {}}) => {
    return {
        card: cardSlice.card, 
        slotsAnnounced: cardSlice.slotsAnnounced
    }; 
}

export default connect(mapStateToProps, actions)(Board);
