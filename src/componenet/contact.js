import React, { Component } from "react"

class Contact extends Component{
    render(){
        return(
            <div> <h1>{this.props.name}</h1>
                <ul>
                    <li>cell phone: {this.props.cellphone}</li>
                    <li>email address: {this.props.email}</li>
                    <li>work phone: {this.props.workPhone}</li>
                </ul>
            </div>
            
        )
    }
}

export default Contact;