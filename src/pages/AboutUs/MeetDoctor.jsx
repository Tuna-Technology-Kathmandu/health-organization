import React from 'react';
import doctor from '../../utils/meetDoctor.json';

const MeetDoctor = () => {
  return (
    <>
    <div className='meet-doctor'
    style={{
        background:"#F4F3F1"
    }}
    >
        <div className=' py-5 mx-2'>
            <div className='ms-3'>
            <h3 className='pb-4'>Meet our Doctors</h3>
        <div className='row'>
            {doctor.map((item, index) => (
                <div className='col-lg-3 col-md-6 col-sm-6' key={index}>
                    <div className='card'
                    style={{
                        width: '270px',
                        height: '334px',
                        position: 'relative',
                        borderRadius: '5px',
                        border: '1px solid #23232380',
                        margin:"5px"
                        }}>
                        <center>
                            <img
                            src={item.image}
                            className="img-fluid my-3 rounded-4"
                          //  alt='Doctor image'
                            style={{ 
                                width:"176px",
                                height:"176px" 
                            }}
                            />
                        </center>
                        <div className='card-part'>
                        <h5 className="text-center">{doctor[0].title}</h5>
                        </div>
                    </div>


                </div>
            ))}

        </div>
            </div>
            
        </div>
    </div>
      
    </>
  )
}

export default MeetDoctor
