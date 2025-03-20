import React from 'react'
import logo from "../../assets/images/logo.png";

const ClinicBranch = () => {
    const branches = [
        { id: 1, name: "All Nepal Health Treatment Clinic Nepal", place: "Biratnagar, Koshi Province", logo: logo },
        { id: 2, name: "All Nepal Health Treatment Clinic Nepal", place: "Biratnagar, Koshi Province", logo: logo },
        { id: 3, name: "All Nepal Health Treatment Clinic Nepal", place: "Biratnagar, Koshi Province", logo: logo },
        { id: 4, name: "All Nepal Health Treatment Clinic Nepal", place: "Biratnagar, Koshi Province", logo: logo },
      ];
  return (
    <>
    <div className='clinic-branch'
    style={{
        fontFamily:"Poppins"
    }}>
        <div>
            <div className='container py-5 ms-2'>
                <h4 className='pb-4'> Our Clinic Branches</h4>
             <div className='row'>
             {branches.map((branch) => (
              <div className='col-lg-3 col-md-6 col-sm-12' key={branch.id}>
                <div className="card shadow-sm d-flex justify-content-center align-items-center pt-4"
                style={{
                    width: '270px',
                    height: '350px',
                    position: 'relative',
                    }}>
                  <img
                    src={branch.logo}
                    alt={branch.name}
                    className="img-fluid my-5"
                    style={{ height: "83px",
                             width:"112px"
                         }}
                  />
                  <div className="card-body">
                    <h6 className=" branch-Name fw-bold text-center">{branch.name}</h6>
                    <span className='branch-Place'> {branch.place}</span>
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

export default ClinicBranch
