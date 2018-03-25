import React from 'react';

class SubmitButton extends React.Component{

    constructor(){
        super()
        this.State = {
            
        }
    }
    
    render(){
        return(
            <div>
                <button onClick = { (e) => console.log('hello')} >Submit</button>
            </div>
        )
    }
}
export default SubmitButton;