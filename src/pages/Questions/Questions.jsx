import React from 'react';
import Style from './Questions.module.css'
import { BsCheck2 } from "react-icons/bs";
const Questions = () => {
    return (
        <div className={`questions`} id='questions'>
            <div className="container">
                <div className="row">
                    <h2 className={`${Style.title}`}>Frequently Asked Questions</h2>
                    <div className="col-6">
                        <div className={`${Style.collection} d-flex`}>
                            <BsCheck2 className={`${Style.right}`}/>
                            <h4 className={`${Style.subTitle}`}>Is Foodera Bread really baked fresh each day?</h4>
                        </div>
                        <p className={`${Style.description}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-6">
                        <div className={`${Style.collection} d-flex`}>
                            <BsCheck2 className={`${Style.right}`}/>
                            <h4 className={`${Style.subTitle}`}>Do you bake breads containing animal fats or products?</h4>
                        </div>
                        <p className={`${Style.description}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <div className={`${Style.collection} d-flex`}>
                            <BsCheck2 className={`${Style.right}`}/>
                            <h4 className={`${Style.subTitle}`}>Can I order your products online?</h4>
                        </div>
                        <p className={`${Style.description}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-6">
                        <div className={`${Style.collection} d-flex`}>
                            <BsCheck2 className={`${Style.right}`}/>
                            <h4 className={`${Style.subTitle}`}>When are you opening a shop near me?</h4>
                        </div>
                        <p className={`${Style.description}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    
                </div>
                
                
                
            </div>
        </div>
    );
};

export default Questions;