import React from 'react'

const Contact  = (props) => { //by taking props, we automatically get Router information from <Route> bcuz that is one the things that the router provides us.
    // setTimeout(()=>{
    //     props.history.push('/about') //After 2 sec, redirect to about page
    // }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium voluptatibus beatae iusto pariatur a quos autem magnam laudantium ullam, vel ea rerum debitis dignissimos nihil maxime illum possimus placeat!</p>
        </div>
    )
}

export default Contact;
