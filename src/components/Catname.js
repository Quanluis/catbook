import React from 'react';

export class Catname extends React.Component{

  constructor (){
    super();
    this.state = {
      lettersFirst: '',
      lettersLast: ''
    }
  }
    onlyLettersFirst(event){
      this.setState({
       lettersFirst: event.target.value.substr(0,15)  
      }) 

    }
    onlyLettersLast(event){
      this.setState({
       lettersLast: event.target.value.substr(0,15)  
      })
    }


  render(){
      return(
          <div>
            <div>
              <h1> Catname </h1>
              <hr width = "20%"/>
              <form className ="form" action="submit" > <br/>
              First Name
              <input
                value = {this.state.lettersFirst}
                onChange = {this.onlyLettersFirst.bind(this)}  className ="form" type="text" name="firstName"/>
                <br/>
              </form>
              <div>
              <form className = 'form' action="submit" > <br/>
              Last Name 
              <input    
                value = {this.state.lettersLast}
                onChange = {this.onlyLettersLast.bind(this)} 
                className ="form" type="text" name=""/> <br/>
              </form>
              </div>
            </div>
          </div>
      )
  }
}
export default Catname; 