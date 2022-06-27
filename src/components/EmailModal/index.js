import React from 'react';
import './style.scss';
import { Zoom } from 'react-reveal';
import { images } from '../../Constants/images';
import { useState } from 'react';
import history from '../../containers/routes/history';
const EmailModal = () => {
    const [closeModal, setCloseModal] = useState(false);
    const emailFormModal = history
    return (
        <>
            {emailFormModal &&
                <div className={`modal-wrapper ${closeModal ? 'd-none' : ''}`}>
                    <Zoom>
                        <div className="modal-content-wrapper">
                            <h3 className="text-center">Message Us</h3>
                            <div className="close-icon" onClick={() => setCloseModal(true)}>
                                <img src={images.closeIcon} alt="close" />
                            </div>
                            <form>
                                <div className="form-group">
                                    <label for="">Name</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label for="">Subject</label>
                                    <input type="text" className="form-control" id="" aria-describedby="" />
                                </div>
                                <div className="form-group d-flex flex-column">
                                    <label for="">Message</label>
                                    <p className='text-area'>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </p>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </Zoom>
                </div>
            }
        </>
    )
}

export default EmailModal