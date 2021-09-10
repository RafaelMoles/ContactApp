import React, { Component } from "react";

class ContactDetail extends Component{

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.goEdit = this.goEdit.bind(this);
        this.deleteItem= this.deleteItem.bind(this);
        this.getCookie= this.getCookie.bind(this); 
    }

    goEdit(){
        this.props.changeEditableDetail(this.props.data)
    }

    goBack(){
        this.props.changeViewToList()
    }

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    deleteItem(){
        var csrftoken = this.getCookie('csrftoken');
        var id = this.props.data.id;
    
        fetch(`http://127.0.0.1:8000/api/contact_delete/${id}/`, {
          method:'DELETE',
          headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
          },
        }).then((response) =>{
            console.log("REQUEST TO DELETE ITEM")
          this.goBack();
        })
    }
    

    render() {

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
                            <button onClick={this.deleteItem} className="btn btn-outline-danger"> Delete </button>
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