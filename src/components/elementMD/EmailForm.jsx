import React from "react";

import "./EmailForm.css"

const EmailForm = () => {

return(
    <>

    <div>
        <h1>Contact Form</h1>

        <form>


        <div className="name-row">
        <label>First Name: </label>
        <input type="text"></input>

        <label>Last Name: </label>
        <input type="text"></input>

        </div>

        <label>Company: </label>
        <input type="text"></input>

        <label>Phone Number: </label>
        <input type="text"></input>

        <label>Email: </label>
        <input type="email"></input>


        <label>Message: </label>
        <textarea rows="4"/>

        <input type="submit" value="send"/>

        </form>





    </div>
    
    
    
    </>
)
}

export default EmailForm;



