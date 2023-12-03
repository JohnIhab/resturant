import React, { useEffect, useState } from 'react';
import Style from '../Section/Section.module.css'
const Section = () => {
    const CountingComponent = ({ x }) => {
        const [count, setCount] = useState(1);

        useEffect(() => {
            const interval = setInterval(() => {
                if (count < x) {
                    setCount(count + 1);
                } else {
                    clearInterval(interval);
                }
            }, 1); 
            return () => clearInterval(interval);
        }, [count, x]);
        return count;
    };
    return (
        <div className={`${Style.numbers}`}>
            <div className="container">
                <div className={`row `}>
                    <div className="col-md-3">
                        <h2 className={`${Style.title}`}>{<CountingComponent x={1250} />} +</h2>
                        <h6 className={`${Style.description}`} >saving</h6>
                    </div>
                    <div className="col-md-3">
                        <h2 className={`${Style.title}`}>{<CountingComponent x={5786} />}+</h2>
                        <h6 className={`${Style.description}`} >photos</h6>
                    </div>
                    <div className="col-md-3">
                        <h2 className={`${Style.title}`}>{<CountingComponent x={1440} />}+</h2>
                        <h6 className={`${Style.description}`}> rockets</h6>
                    </div>
                    <div className="col-md-3">
                        <h2 className={`${Style.title}`}>{<CountingComponent x={7110} />}+</h2>
                        <h6 className={`${Style.description}`} >globes</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;