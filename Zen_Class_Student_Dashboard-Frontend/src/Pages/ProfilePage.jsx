import { useContext, useEffect } from "react";
import MainSpace from "../Components/Mainspace";
import { AppCtx } from "../Context/AppContext";

export default function ProfilePage(){
    //importing states from the use context
    const {setHeading}=useContext(AppCtx);
    //setting heading value as My Profile when the page is loaded
    useEffect(()=>{
        setHeading("My Profile");
    },[])
    //getting data from the local storage
    const userDetails=JSON.parse(localStorage.getItem("data"))
    
    return(
        //profilepage component as children for mainspace component
        <MainSpace>
            <div className="subject-section">
            <div className="card">
            <div className="card-body profile-section text-center">
                <h1 className="text-3xl low-heading"><b><u>Personal Informations</u></b></h1><hr/>
                <h5 className="card-title">Name - {userDetails.username}</h5>
                <h5 className="card-title low-heading">Email - {userDetails.email}</h5>
                <h5 className="card-title">Batch - B50 WD Tamil</h5>        
            </div>
            </div><br/>
            <div className="card">
            <div className="card-body profile-section text-center">
                <h1 className="text-3xl text-center low-heading"><b><u>Class Informations</u></b></h1><hr/>
                <h5 className="card-title">Number of Days Present : {(userDetails.dashboard.attendance).length}</h5>
                <h5 className="card-title">Number of Leaves : {userDetails.leaves.count}</h5>
                <h5 className="card-title">Number of Tasks Submitted :  {userDetails.dashboard.tasks.count}</h5>
                <h5 className="card-title">Capstone Status :  {userDetails.capstone.status?userDetails.capstone.status:"Not Submitted"}</h5>  
                <h5 className="card-title">Portfolio Status :  {userDetails.portfolio.status?userDetails.portfolio.status:"Not Submitted"}</h5>   
                <h5 className="card-title">Number of Testimonial Submitted :  {userDetails.testimonial.count}</h5>           
            </div>
            </div>
            <br/><br/><br/>
            </div>
        </MainSpace>
    )
}