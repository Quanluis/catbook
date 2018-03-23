import React from 'react';

class Gender extends React.Component {
    render(){
        return(
            <div>
                <div>
                <h1>
                    Gender
                </h1>
                <hr width = "20%"/>
                </div>
                <br/>
                <div>
                <form className = 'Gender' action="submit" >
               Male
              <input className ="Gender" type="radio" name="gender" value = "male"/> 
               Female
              <input className = "Gender" type = "radio" name = "gender" value = 'female' />
              Other
              <input className = "Gender" type = "radio" name = "gender" value = "other" />
              </form>
                </div>
            </div>
        )
    }
}
export default Gender;