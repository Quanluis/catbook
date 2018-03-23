import React from 'react';

export class Catname extends React.Component{
  render(){
      return(
          <div>
            <div>
              <h1> Catname </h1>
              <hr width = "20%"/>
              <form className ="form" action="submit" > <br/>
              First Name
              <input className ="form" type="text" name="firstName"/> <br/>
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