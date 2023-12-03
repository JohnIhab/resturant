import React from 'react';
import Style from './Subscribe.module.css';
const Subscribe = () => {
    return (
        <div className={`${Style.subscribe}`}>
            <div className="container">
                <div className="row">
                    <h2 className={`${Style.title}`}>Hurry up! Subscribe our newsletter <br></br> and get 
                    25% Off
                    </h2>
                    <p className={`${Style.description}`}>Limited time offer for this month. No credit card required.</p>
                </div>
                <form className={`intro-newsletter d-flex justify-content-center`} >
                    <div className={`row ${Style.collection}`}>
                        <div className="col-8">
                            <input className={`${Style.inp}`} placeholder='Enter your coupon' type="email" name="" id="" />
                        </div>
                        <div className="col-4">
                        <button className={`${Style.btn}`}>Apply Coupon</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;