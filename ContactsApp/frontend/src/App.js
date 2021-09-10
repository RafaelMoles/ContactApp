import React from 'react';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import ContactForm from './components/ContactForm';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
      this.state = {

        activeState:'ListView',

        contactList:[],

        activeItem:{
          id:null, 
          firstName:'',
          lastName:'',
          organization:'',
          phone: '',
          email: '',
        },

        editing:false,
        cookieValue: null
      }
      this.fetchContacs = this.fetchContacts.bind(this)
      this.changeViewToDetail = this.changeViewToDetail.bind(this)
      this.changeViewToList = this.changeViewToList.bind(this)
      this.changeViewToForm = this.changeViewToForm.bind(this)
      this.changeEditableDetail=this.changeEditableDetail.bind(this)

      
  };


  componentWillMount(){
    this.fetchContacts()
    
  }

  fetchContacts(){

    console.log('Fetching...')

    fetch('http://127.0.0.1:8000/api/contact_list/')
    .then(response => response.json())
    .then(data => 
      this.setState({
        contactList:data
      })
      )
  }

  changeEditableDetail(dataContact){
    this.setState({
      activeState: 'FormView',
      activeItem: dataContact,
      editing:true
    })
  }

  changeViewToDetail(dataContact){
    this.setState({
      activeState: 'ContactView',
      activeItem: dataContact,
      editing:false
    })
  }
  
  changeViewToList(){
    this.setState({
      activeState: 'ListView',
      activeItem:{
        id:null, 
        firstName:'',
        lastName:'',
        organization:'',
        phone: '',
        email: '',
      },
      editing: false
    })
    this.fetchContacts()
  }

  changeViewToForm(){
    this.setState({
      activeState: 'FormView',
      activeItem:{
        id:null, 
        firstName:'',
        lastName:'',
        organization:'',
        phone: '',
        email: '',
      },
      editing:false
    })

  }



  render(){

    var contactList = this.state.contactList

    return(
      <div>
        
          {this.state.activeState === 'ListView' ? 
          <ContactList 
              dataCurrentContact={this.changeViewToDetail.bind(this)} 
              changeViewToForm={this.changeViewToForm.bind(this)}
              data={contactList}>
              
          </ContactList> : null}

          {this.state.activeState === 'ContactView' ? 
          <ContactDetail 
            data={this.state.activeItem} 
            changeViewToList={this.changeViewToList.bind(this)}
            changeEditableDetail={this.changeEditableDetail.bind(this)}>
          </ContactDetail> : null}

          {this.state.activeState === 'FormView' ? 
          <ContactForm      
            changeViewToList={this.changeViewToList.bind(this)}
            data={this.state.activeItem}
            editing={this.state.editing}>

          </ContactForm> : null}

      </div>
      
    )
    
  }
}

export default App;
