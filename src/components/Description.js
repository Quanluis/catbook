import React from 'react';

class Description extends React.Component{

    constructor(){
        super()
         this.State = {
             descript: ''

        }
    }
    descriptionChange(e){
        this.setState ({
            descript: +e.target.value
        }) 
    }

    render(){
        return(
            <div>
                <h1>
                    Description
                </h1>
                <hr width = "40%"/> 
                <p>Show off some Cool info,story,Anything about your friend!</p>
                <br/>   
                <form className="description">
                <textarea
                onChange = {this.descriptionChange.bind(this)}  
                className = 'des-box' rows = '5' col= '40'>
                    </textarea>
                
                </form>
            </div>
        )
    }
}
export default Description; 