import React from 'react';
import Style from './Parallax.module.css'
const parallax = () => {
    return (
        <div className={`parallax-content2 parallax2 text-center ${Style.main}`} data-stellar-background-ratio="0.4" >
            <div className={`${Style.overlay}`}></div>
            <div className="container">
                <div className={`row ${Style.coll}`}>
                    <div className="col-8">
                        <h4 className={`${Style.title}`}>Baked fresh daily by bakers with passion.</h4>
                    </div>
                    
                        <div className={`col-4 `}>
                        <a href="#explore" className={`${Style.a1}`}>
                            Learn More
                        </a>
                        </div>
                    
                </div>
            </div>
    </div>
            
    );
};

export default parallax;