import React from 'react';
import Style from './Testx.module.css';
import john from '../../images/john.png'
import jo from '../../images/Jo.png'
import bitrh from '../../images/birth2.png'
const Testx = () => {
    return (
        <div className={`${Style.tistimonials}`} id='textx'>
            <div className="container">
                <div className={`row`}>
                <h3 className={`${Style.head}`}>Testimonials</h3>
                <div id="carouselExampleCaptions" className={`carousel slide ${Style.main}`}>
            <div className={`carousel-indicators ${Style.dot}`}>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={john} className={`d-block ${Style.photo}`} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className={`${Style.title}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                            <h5 className={`${Style.des}`}>Frontend Developer</h5>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={jo} className={`d-block ${Style.photo}`} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className={`${Style.title}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                            <h5 className={`${Style.des}`}>React Developer</h5>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={bitrh} className={`d-block ${Style.photo}`} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className={`${Style.title}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                            <h5 className={`${Style.des}`}>Graphic Designer</h5>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
                </div>
            </div>
        </div>
    );
};

export default Testx;