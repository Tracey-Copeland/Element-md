import React from "react";

import "./EmailForm.css"

const EmailForm = () => {

return(
    <>
    <div>
    <div className="page-container">
        <div className="white-space">

        </div>

    <div className="cu-form-cont">
        <div className="em-header-row">
        <h1>Contact Form</h1>
        <p>We look forward to speaking with you! For sales inquires, 
            please contact: Sales@element-md.com. For all other inquires, 
            please contact Support@element-md.com, or complete the form below!</p>
        </div>
        <div className="cu-email-form">
        <form >


        <div className="cu-name-row">
            <div>
        <label>First Name: </label>
        <input type="text"></input>
            </div>
            <div>
        <label>Last Name: </label>
        <input type="text"></input>
            </div>
        </div>

        <label>Company: </label>
        <input type="text"></input>
        <br/>

        <label>Phone Number: </label>
        <input type="text"></input>
        <br/>

        <label>Email: </label>
        <input type="email"></input>
        <br/>


        <label>Message: </label>
        <textarea rows="4"/>
        <br/>

        <input type="submit" value="Send"/>

        </form>
        </div>





    </div>
    </div>
    </div>
    
    
    
    </>
)
}

export default EmailForm;



