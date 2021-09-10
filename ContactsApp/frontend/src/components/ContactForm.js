import React, { Component } from "react";

class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            editing: false,

            newContact:{
                id:null, 
                firstName:'',
                lastName:'',
                organization:'',
                phone: '',
                email: ''
            }
        }
        this.goBack= this.goBack.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getCookie = this.getCookie.bind(this)
             
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

    handleSubmit(e){
        e.preventDefault()
        console.log('ITEM:', this.state.newContact)
    
        var csrftoken = this.getCookie('csrftoken')
    
        var url = 'http://127.0.0.1:8000/api/contact_create/'
    
        if(this.state.editing == true){
          url = `http://127.0.0.1:8000/api/contact_update/${ this.state.newContact.id}/`
          this.setState({
            editing:false
          })
        }
    
    
    
        fetch(url, {
            method:'POST',
            headers:{
              'Content-type':'application/json',
              'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify(this.state.newContact)
          }).then((response)  => {
              
              this.setState({
                newContact:{
                    id:null, 
                    firstName:'',
                    lastName:'',
                    organization:'',
                    phones: '',
                    emails: ''
                }
              })
              this.goBack();/**Show popup */
          }).catch(function(error){
            console.log('ERROR:', error)
          })
      
    
    }


    render(){

        return(

            <div className="Container">
                
                <div id="task-container">

                    <div id="form-wrapper">
                    
                        <form onSubmit={this.handleSubmit}>

                        <div align="right">
                            <button onClick={this.goBack} className="btn btn-light"> Back </button>
                        </div>

                        <div>
                            <h4>Add Contact</h4>
                        </div>

                            
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input onChange={(e) => this.setState({ newContact:{...this.state.newContact, firstName: e.target.value}
                                })} type="FName" class="form-control" id="InpFName" value={this.state.newContact.firstName} aria-describedby="emailHelp" type="text" placeholder=""></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Last Name</label>
                                <input onChange={(e) => this.setState({ newContact:{...this.state.newContact, lastName: e.target.value}
                                })} type="LName" class="form-control" id="InpSName" placeholder=""></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Organization</label>
                                <input onChange={(e) => this.setState({ newContact:{...this.state.newContact, organization: e.target.value}
                                })}  type="Org" class="form-control" id="InpOrg" placeholder=""></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Phone Number</label>
                                <input onChange={(e) => this.setState({ newContact:{...this.state.newContact, phone: e.target.value}
                                })} type="phone" class="form-control" id="InpPhone" placeholder=""></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Email</label>
                                <input onChange={(e) => this.setState({ newContact:{...this.state.newContact, email: e.target.value}
                                })} type="email" class="form-control" id="InpEmail" placeholder=""></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Contact</button>
                            
                        </form>
                    </div>
                    
                </div>

            </div>

        )

    }
}

export default ContactForm;