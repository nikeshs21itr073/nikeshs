import React from 'react';
import swal from 'sweetalert';
import './sell.css';
const SellCar = () => {
    
    return (
        <div className="p-5" style={{ background: '#f8f8f8' }}>
            <div className="row d-flex align-items-center">
                <div className="col-lg-5 mx-auto">
                    <img src="https://consumer.tcimg.net/assets/_next/static/images/module-3-img-16989b546cbf4c7944b1fd9bdeeac34d.svg" alt="" />
                </div>
                <div className="col-lg-5 mx-auto text-start">
                    <h3>Get a Trade-in Offer You Can Use Today</h3>
                    <p>Answer a few questions to see your car’s market value and get a cash offer in minutes. Cash out, or trade in for a new or used car.</p>
                   <br></br>
                   <br></br>
                   <br></br>
                 <a href="#last"> <button  id='i11' className="mt-3 btn app-main-btn text-white rounded-pill">Contact Now</button></a>
                    
                </div>
            </div>
        </div>
    );
};

export default SellCar;