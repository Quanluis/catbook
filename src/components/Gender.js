import React from 'react';

class Gender extends React.Component {

    constructor(){
        super()
        this.state = {
            male: '',
            female: '',
            other: ''
        }
    }
    pickMale(event){
        this.setState({
             male: +event.target.value
        });
    }
    pickFemale(event){
        this.setState({
            female: +event.target.value
        })
    }
    pickOther(event){
        this.setState({
            other: +event.target.value
        })
    }


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
              <input
               value = {this.state.male}
               onChange = {this.pickMale.bind(this)} className ="Gender" type="radio" name="gender"  /> 
               Female
              <input
              value = {this.state.female}
              onChange = {this.pickFemale.bind(this)}            
              className = "Gender" type = "radio" name = "gender" />
              Other
              <input 
              value = {this.state.female}
              onChange = {this.pickOther.bind(this)}     
              className = "Gender" type = "radio" name = "gender"/>
              </form>
                </div>
            </div>
        )
    }
}
export default Gender;