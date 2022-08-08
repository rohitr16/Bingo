import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return(
        <section className="error">
            <div className="container">
                <div className="row">	
                    <div className="col">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">ERROR</h1>           
                            </div>               
                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Look like there's a connection issue
                                </h3>            
                                <p>the server may not be avaible!</p>
                                <Link  to="/" className="link_404" >
                                    Go to Home
                                </Link>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}