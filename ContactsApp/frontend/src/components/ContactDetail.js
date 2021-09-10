import React, { Component } from "react";

class ContactDetail extends Component{

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.goEdit = this.goEdit.bind(this);
             
    }

    goEdit(){
        this.props.changeEditableDetail(this.props.data)
    }

    goBack(){
        this.props.changeViewToList()
    }

    /*
    displayJSON() {

        
        var mainContainer = document.getElementById("myData");
        var data = this.props.data;

        var divMobile = document.createElement("divMobile");
        divMobile.innerHTML = "Personal"+ ' ' + data['Mobile'];
        mainContainer.appendChild(divMobile);

        var divWork = document.createElement("divWork");
        divMobile.innerHTML = "Work"+ ' ' + data['Work'];
        mainContainer.appendChild(divWork);

        var divOther = document.createElement("divOther");
        divMobile.innerHTML = "Other"+ ' ' + data['Other'];
        mainContainer.appendChild(divOther);
    
    }*/

    render() {
        /*var phones = this.props.data.phones;
        var emails = this.props.data.emails;*/
        return(

            
            <div className="container">
    
                <div id="task-container">
    
                    <div id="form-wrapper" style={{flex:1}} >
                    
                        <div align="right">
                            <button onClick={this.goBack} className="btn btn-light"> Back </button>
                        </div>

                        <div>
                            <h2>Contacts</h2>
                        </div>

                                    
                        <div align="right">
                            <button onClick={this.goEdit} className="btn btn-outline-warning">Edit Contact</button>
                        </div>
                    
                    </div>
    

                    <div id="form-wrapper">

                        <div class="form-group" >
                            <h5>Full Name</h5>
                            <span>{this.props.data.firstName} {this.props.data.lastName}</span>
                        </div>

                        <div class="form-group">
                            <h5>Organization</h5>
                            <span>{this.props.data.organization}</span>
                        </div>

                        <div class="form-group">
                            <h5>Phone</h5>
                            <span>{this.props.data.phone}</span>
                        </div>

                        <div class="form-group">
                            <h5>Email</h5>
                            <span>{this.props.data.email}</span>
                        </div>
                 

                    </div>

            </div>

            </div>
    
        );
    }

};

export default ContactDetail;