import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Zoom } from 'react-reveal';
import { images } from '../../Constants/images';
import './style.scss';
const EmailModal = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_x1gbhx8', e.target, 'pvocguHGdELHLzrTq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <>
            {props.showModal &&
                <div className="modal-wrapper">
                    <Zoom>
                        <div className="modal-content-wrapper">
                            <h3 className="text-center">Book Your Appointment Now!</h3>
                            <div className="close-icon" onClick={() => props.setShowModal(false)}>
                                <img src={images.closeIcon} alt="close" />
                            </div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label for="">Name</label>
                                    <input type="text" className="form-control" id="" name="name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label for="">Subject</label>
                                    <input type="text" className="form-control" id="" aria-describedby="" name="subject" />
                                </div>
                                <div className="form-group d-flex flex-column">
                                    <label for="">Message</label>
                                    <p className='text-area'>
                                    <input type="text" className="form-control" id="" aria-describedby="" name="message" />
                                    </p>
                                </div>
                                <button type="submit" className="btn btn-primary" value="Send Message">Submit</button>
                            </form>
                        </div>
                    </Zoom>
                </div>
            }
        </>
    )
}

export default EmailModal