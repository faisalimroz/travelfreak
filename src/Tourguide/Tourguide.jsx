
import './Tourguide.css'
import { Link } from 'react-router-dom';
import { FaFacebook,FaTwitter} from 'react-icons/fa';

const Tourguide = () => {
    return (
        <>
            <div className='text-center'>
                <h1 className='guide'>Tour Guide</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime ea ipsum quos ab vero cupiditate debitis fugit natus voluptatum?</p>
            </div>
            <div className='flex flex-wrap justify-evenly mt-5 mb-5'>
                <div className="card w-96 guide-border">
                    <figure className='figure'>
                        <img src="https://i.ibb.co/T4GtTdM/guide1.jpg" alt="car!" />
                        <div className="image-button flex-container">
                            <div className="social-link">
                                <a target='_blank' href='https://www.facebook.com'>
                                    <FaFacebook style={{ color: 'blue' }} /> {/* Replace "fb" with the Facebook icon */}
                                </a>
                            </div>
                            <div className="social-link">
                            <a target='_blank' href='https://www.twitter.com'>
                                    <FaTwitter style={{ color: 'skyblue' }}/> {/* Replace "fb" with the Facebook icon */}
                                </a>                            </div>
                        </div>
                    </figure>

                    <div className="card-body bg-slate-100">
                        <h2 className="text-center text-2xl">Shopnil</h2>


                    </div>
                </div>
                <div className="card w-96 guide-border">
                    <figure className='figure'>
                        <img src="https://i.ibb.co/pWWRkMr/guide4.jpg" alt="car!" />
                        <div className="image-button flex-container">
                            <div className="social-link">
                                <a target='_blank' href='https://www.facebook.com'>
                                    <FaFacebook style={{ color: 'blue' }} /> {/* Replace "fb" with the Facebook icon */}
                                </a>
                            </div>
                            <div className="social-link">
                            <a target='_blank' href='https://www.twitter.com'>
                                    <FaTwitter style={{ color: 'skyblue' }}/> {/* Replace "fb" with the Facebook icon */}
                                </a>                            </div>
                        </div>
                    </figure>

                    <div className="card-body bg-slate-100">
                        <h2 className="text-center text-2xl">Rayat</h2>


                    </div>
                </div>
                <div className="card w-96 guide-border">
                    <figure className='figure'>
                        <img src="https://i.ibb.co/syPLQK1/image.png" alt="car!" />
                        <div className="image-button flex-container">
                            <div className="social-link">
                                <a target='_blank' href='https://www.facebook.com'>
                                    <FaFacebook style={{ color: 'blue' }} /> {/* Replace "fb" with the Facebook icon */}
                                </a>
                            </div>
                            <div className="social-link">
                            <a target='_blank' href='https://www.twitter.com'>
                                    <FaTwitter style={{ color: 'skyblue' }}/> {/* Replace "fb" with the Facebook icon */}
                                </a>                            </div>
                        </div>
                    </figure>

                    <div className="card-body bg-slate-100">
                        <h2 className="text-center text-2xl">Nafis</h2>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Tourguide;