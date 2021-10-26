import React, { Component } from 'react'

export default class Latestteacherslist extends Component {
    render() {
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
             
            <div className="w-100 py-4">
               <div className="container">
      
                 <div className="row overflow-hidden d-flex align-items-center">

               
                      <div className="col-md-1  d-none d-lg-block d-md-block d-xl-block d-xxl-block">
                          <div >
                              <img className="avatarimg" src="./images/image1.jpg" alt="" />
                          </div>
                      </div>


                      <div className="col-md-4 col-sm-6 fs-2 fw-lighter ">
                          <div className="float-start text-secondary ">
                              LATEST Moemen Y.Moemen
                          </div>
                          
                      </div>

                      <div className="col-md-4  d-none d-lg-block d-md-block d-xl-block d-xxl-block fs-2 fw-lighter text-secondary">
                          moumenyasser@gmail.com
                      </div>

                      <div className="col-md-3  col-sm-6 ">
                          <button className='btn btn-success'>View</button>
                      </div> 


              </div>
          
              
               </div>
          
            </div>
             
          </div>
    </div>
  
        )
    }
}
