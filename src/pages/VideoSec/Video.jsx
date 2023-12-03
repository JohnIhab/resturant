import React from 'react';
import Style from './Video.module.css'
import { AiFillCaretRight } from "react-icons/ai";

const Video = () => {
    return (
        <div className={`${Style.video}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className={`${Style.title}`}>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                        <p className={`${Style.description}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui beatae quaerat itaque labore consequatur non facilis voluptatum doloremque repellat nam nesciunt.</p>
                        <div className={`${Style.package}`}>
                            < AiFillCaretRight className={`${Style.right}`}/>
                            <a href='#' className={`${Style.link}`}>Watch Our Video</a>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Video;