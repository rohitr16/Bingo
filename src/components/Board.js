import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {createCard} from '../utility/util';
import {ROW, COLUMN} from '../constants/Values';
import * as actions from '../actions';
import {connect} from 'react-redux';


class Board extends Component {


    componentDidMount () {
        const {setCardList} = this.props;
        const cards = createCard(ROW, COLUMN);
        setCardList(cards);
    }

    renderTableRows(card = []) {
        return (
            <tbody>
                {card.map((item, row) => {
                    return (
                        <tr 
                            onClick={() => this.onClickRow()}
                        >
                            {card[row].map((item, column) => {
                                return (
                                    <td key={card[row][column]}>{card[row][column]}</td>
                                );
                            })}
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    onCreateNewBoard = () => {
        const {setCardList} = this.props;
        const card = createCard(ROW, COLUMN);
        setCardList(card);
    }
    
    render() {
        const {card} = this.props;
        return (
            <div className="container">
            <div className="container__button"  onClick={this.onCreateNewBoard}>
                <span >Create New Board</span>
            </div>
            <div>And The Game Begins</div>
            <table>

                {this.renderTableRows(card)}
            </table>
        </div>
        );
    }
}


const mapStateToProps = ({cardSlice = {}}) => {
    return {card: cardSlice.card}; 
}

export default connect(mapStateToProps, actions)(Board);
