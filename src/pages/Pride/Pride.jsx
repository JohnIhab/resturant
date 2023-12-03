import React from 'react';
import Style from '../Pride/Pride.module.css';
import pizza from '../../images/pizza.png'
const Pride = () => {
    return (
        <div className={`pride ${Style.mt}`} id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className={`${Style.image}`} src={pizza} />
                    </div>
                    <div className="col-md-6">
                        <h2 className={`${Style.title}`}>We pride ourselves on making real food from the best ingredients.</h2>
                        <p className={`${Style.description}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum velit hic, ducimus, quasi nesciunt earum aperiam doloremque debitis asperiores officia maiores illo dolore consequuntur unde! Natus consequatur tempore minus et.</p>
                        <a href="#explore" className={`${Style.a1}`}>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pride;