import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Style from './OurFood.module.css';
import Data from './Data';
import { TbSend } from "react-icons/tb";
import Swal from 'sweetalert2'
const OurFood = () => {
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const toggleModal = (product) => {
        setModal(!modal);
        setSelectedProduct(product);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const foods = Data.map((e) => {
        return (
            <div className="col-md-3">
                <img className={`${Style.photo}`} src={e.img} />
                <h5 className={`${Style.main}`}>{e.title}</h5>
                <span className={`${Style.details}`}>{e.description.slice(0, 60)}....</span>
                <div className={`${Style.collection} d-flex`}>
                    <h6 className={`${Style.price}`}>{e.price}</h6>
                    <h6 className={`${Style.disable}`}>{e.disabled}</h6>
                </div>
                <button onClick={() => toggleModal(e)} className={`${Style.btn}`}>Order Now</button>

            </div>
        )
    })


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formFields = ['your_name', 'email', 'address', 'phone'];
        const isFormValid = formFields.every(field => form.current[field].value.trim() !== '');
        if (!isFormValid) {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete Form',
                text: 'Please fill in all the required fields.',
            });
            return;
        }
        setLoading(true);
        emailjs.sendForm('service_33ai4lu', 'template_pofavr9', form.current, 'wvYZLoeHOyvRcAzft')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Message Sent',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    
    return (
        <div className={`mt-5`} id='explore'>
            <div className="container">
                <div className="row ">
                    <h2 className={`${Style.title}`}>Explore Our Foods</h2>
                    <p className={`${Style.description}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi, doloremque quibusdam numquam blanditiis quidem maxime nobis a. Ipsum vel expedita sed. Totam, illum? Architecto a ipsam recusandae temporibus officia.</p>
                </div>
                <div className="row mt-5">
                    {foods}
                    {modal && selectedProduct && (
                        <>
                            <div className={`${Style.popUp}`}>
                                <div className="container">
                                    <div className="row">
                                        <h2 className={`${Style.title}`}>Make Your Order Now!</h2>
                                        <form ref={form} onSubmit={sendEmail} action="" className='container'>
                                            <div className={`d-flex `}>
                                                <input type="text" name="your_name" id="your_name" placeholder='Your Name' className={`${Style.inp} ${Style.m} `}required />
                                                <input type="email" name="email" id='email' placeholder='Email Address' className={`${Style.inp}`} required/>
                                            </div>
                                            <div className={`d-flex `}>
                                                <input type="text" name="address" id="address" placeholder='Address' className={`${Style.inp} ${Style.m} `} required/>
                                                <input type="text" name="title" id='title' value={selectedProduct.title} className={`${Style.inp}`} />
                                            </div>

                                            <div className={`row ${Style.collection}`}>

                                                <input type="number" name="phone" id="phone" placeholder='Mobile Phone' className={`${Style.inp}`} required/>
                                                <button onClick={()=>sendEmail} disabled={loading} type='submit' value="Send" className={`${Style.btn} ${Style.b}`}>
                                                    {loading ? 'Sending...' : 'Send Message'}
                                                    <TbSend className={`${Style.icon}`} />
                                                </button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurFood;