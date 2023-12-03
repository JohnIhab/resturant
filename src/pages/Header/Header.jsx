import React from "react";
import Style from "../Header/Header.module.css";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


const Header = () => {
    return (
        <header className={`${Style.header}`}>
            <div className={`container ${Style.raw}`}>
                <div className="col-md-6">
                    <h3 className={`${Style.title}`}>Good food choices are good investments.</h3>
                    <p className={`${Style.description}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className={`${Style.main}`}>

                        <a href="#explore" className={`${Style.a1}`}>
                            order now
                            <FaBasketShopping className={`${Style.basket}`} />
                        </a>
                    
                        <a href="#about" className={`${Style.a2}`}>
                            learn more
                            <IoIosArrowForward className={`${Style.arrow}`} />
                        </a>
                    </div>
                    
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </header>
    );
};

export default Header;
