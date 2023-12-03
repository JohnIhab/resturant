import React from 'react';
import Style from './Ingredents.module.css';
import photo from '../../images/2.png';
import { AiFillFire } from "react-icons/ai";

const Ingredents = () => {
    return (
        <div className={`${Style.ingredents}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className={`${Style.title}`}>We make everything by hand with the best possible ingredients.</h2>
                        <p className={`${Style.description}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam incidunt doloremque? Quibusdam, minus vitae. Quidem velit, at tempore, temporibus nulla, deleniti reprehenderit modi iste aliquam autem nam. Repellat, itaque.</p>
                        <ul className={`${Style.tasks}`}>
                            <li className={`${Style.task}`}>
                                <AiFillFire className={`${Style.fire}`} />
                                <p className={`${Style.subtask}`}>Etiam sed dolor ac diam volutpat.</p>
                            </li>
                            <li className={`${Style.task}`}>
                                <AiFillFire className={`${Style.fire}`} />
                                <p className={`${Style.subtask}`}>Erat volutpat aliquet imperdiet.</p>
                            </li>
                            <li className={`${Style.task}`}>
                                <AiFillFire className={`${Style.fire}`} />
                                <p className={`${Style.subtask}`}>purus a odio finibus bibendum.</p>
                            </li>
                        </ul>
                        <a href="#explore" className={`${Style.a1}`}>
                            Learn More
                        </a>
                    </div>
                    <div className="col-md-6">
                        <img className={Style.photo} src={photo}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ingredents;