import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div>
            <h4>Q-Zone</h4>
            <div className='bg-light rounded p-4 my-2'>
                <img className='img-fluid' src={qZone1} alt="" />
                <img className='img-fluid' src={qZone2} alt="" />
                <img className='img-fluid' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;