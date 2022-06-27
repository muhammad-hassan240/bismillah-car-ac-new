import React from 'react';
import './style.scss';
import { Zoom } from 'react-reveal';
import { images } from '../../Constants/images';
const EmailModal = (props) => {
    return (
        <>
            {props.showModal &&
                <div className="modal-wrapper">
                    <Zoom>
                        <div className="modal-content-wrapper">
                            <h3 className="text-center">Message Us</h3>
                            <div className="close-icon" onClick={() => props.setShowModal(false)}>
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