import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DashBoard extends Component {


    render() {
        return(
            <div className="container">
                <Link  to="/board" className="container__link" >
                    <span className="container__button">Create Board</span>
                </Link>
                <table>
                    <thead>
                        <tr>
                            <th>

                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}


export default DashBoard;