import React, { Component } from 'react'

export default class Latestteacherslist extends Component {

    
    render() {

        console.log("test");
        let Latestprofile = localStorage.getItem('latestProfile');
        // console.log(JSON.parse(Latestprofile));
        
        
        // Latestprofile = JSON.parse(Latestprofile);
        

    
        
        let sendTeacherID = this.props.teacherID;

        return (

        <div>
            
            <div className=" mainPanel text-center mx-auto position-relative mainPanel shadow overflow-auto">
        
            <div className="w-100 py-4">
               <div className="container">
      
                 <div className="row overflow-hidden d-flex align-items-center">

               
             

                      <div className="col-md-4 col-sm-6 fs-2 fw-lighter ">
                          <div className="float-start text-secondary ">
                              Recent Profiles
                          </div>
                          
                      </div>



              </div>
          
              
               </div>
          
            </div>
{/*              
            <div className="w-100 py-4">
               <div className="container">
      
                 <div className="row overflow-hidden d-flex align-items-center">

               
                      <div className="col-md-1  d-none d-lg-block d-md-block d-xl-block d-xxl-block">
                          <div >
                              <img className="avatarimg" src={Latestprofile.avatar||"/images/unknown.jpg" }  alt="" />
                          </div>
                      </div>


                

                      <div className="col-md-4 col-sm-6 fs-2 fw-lighter ">
                        <div className="float-start text-secondary teacherName" onClick={function(){sendTeacherID(Latestprofile.id)}} >
                            <p>{Latestprofile.first_name}  {Latestprofile.last_name}</p>
                        </div>
                        
                    </div>

                      <div className="col-md-4  d-none d-lg-block d-md-block d-xl-block d-xxl-block fs-2 fw-lighter text-secondary">
                          {Latestprofile.email}
                      </div>

                      <div className="col-md-3  col-sm-6 ">
                          <button className='btn btn-success' onClick={function(){sendTeacherID(Latestprofile.id)}}>View</button>
                      </div> 


              </div>
          
              
               </div>
          
            </div>
              */}
          </div>
    </div>
  
        )
    }
}
