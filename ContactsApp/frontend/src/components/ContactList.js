import React, { Component } from "react";

class ContactList extends Component{

    constructor(props){
        super(props);
            this.state ={
                infoContact: null,
                showInfo: false
            }
            this.sendContact = this.sendContact.bind(this)
            this.goForm = this.goForm.bind(this)     
    }

    
    componentWillMount(){
        
    }
    
    sendContact(contact){
        this.props.dataCurrentContact(contact)
    }

    goForm(){
        this.props.changeViewToForm()
    }
    

    render() {
        console.log(this.props);
        var self = this;
        return(

            <div className="container">
    
                <div id="task-container">
    
      
                    <div id="form-wrapper" style={{flex:1}} >

                        <h2>Contacts</h2>
            
                        <div align="right">
                            <button onClick={this.goForm} className="btn btn-outline-success">Add Contact</button>
                        </div>
                    
                    </div>
    
    
                    <div id="list-wrapper">
                        {this.props.data.map(function(contact, index){
                            
                            
                            var contIndex= "contact "+ index;
                            var contIndex= "infoContact "+ index;

                            return(
                                
                                <div id={contIndex}
                                    onClick={()=> self.sendContact(contact)}
                                    key={index} 
                                    className="task-wrapper flex-wrapper">
                                    
                                    <div style={{flex:1}}>
                                        <span>{contact.firstName.substring(0,1)}{contact.lastName.substring(0,1)}</span>
                                    </div>
                
                                    <div style={{flex:7}}>
                                        <span>{contact.firstName} {contact.lastName}</span>
                                    </div>
                
                                    <div style={{flex:1}}>
                                        <button className="btn btn-outline-danger">Delete</button>
                                    </div>

                                    <div id={contIndex}></div>
            
                                </div>
            

                            )
                            
                            
                            
    
                    })}
                    </div>
    
    
            </div>
    
    
                
            </div>
    
        );
    }

};

export default ContactList;