import React, { Component, Suspense} from 'react'
import {useImage} from 'react-image'

export default class Teacherlist extends Component {

   
    
    render() {
        let teachersList = this.props.teachers_list;
        function addDefaultSrc(ev){
            ev.target.src = 'some default image url'
            console.log('hh')
          }
        return (

            <div className=" mainPanel text-center mx-auto position-relative mainPanel shadow overflow-auto">

                    {teachersList.map((teacher)=>(

                    

          <div className="w-100 py-4">
             <div className="container">
               <div className="row overflow-hidden d-flex align-items-center">


                    <div className="col-md-1  d-none d-lg-block d-md-block d-xl-block d-xxl-block">
                        <div >
                            <img 

                            className="avatarimg" 
                            src={teacher.avatar} 
                            onError={(event) => event.target.style.display = 'none'}/>
                        </div>
                    </div>


                    <div className="col-md-4 col-sm-6 fs-2 fw-lighter ">
                        <div className="float-start text-secondary ">
                            <p>{teacher.first_name}  {teacher.last_name}</p>
                        </div>
                        
                    </div>

                    <div className="col-md-4  d-none d-lg-block d-md-block d-xl-block d-xxl-block fs-2 fw-lighter text-secondary text-start"  >
                        <p><a href={`mailto:${teacher.email}`} className="teachersEmails"> {teacher.email}</a></p>
                    </div>

                    <div className="col-md-3  col-sm-6 ">
                        <button className='btn btn-success'>View</button>
                    </div> 


            </div>
        
            
             </div>
        
          </div>
           
       

                    ))}


                

            </div>
        
    
          
        )
    }
}
