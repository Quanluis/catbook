import React from 'react';



export class Catname extends React.Component{

  constructor (){
    super();
    this.state = {
      letters: '' 
    }
   

  }
    onlyLetters(event){
      this.setState({
       letters: event.target.value.substr(0,15)
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
              value = {this.state.letters}
              onChange = {this.onlyLetters.bind(this) }  className ="form" type="text" name="firstName"/> <br/>
              </form>
              <div>
              <form className = 'form' action="submit" > <br/>
              Last Name 
              <input className ="form" type="text" name=""/> <br/>
              </form>
              </div>
            </div>
          </div>
      )
  }
}
export default Catname; 