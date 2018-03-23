import React from 'react';

class Description extends React.Component{
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
                <textarea className = 'des-box' rows = '5' col= '40'>
                    </textarea>
                
                </form>
            </div>
        )
    }
}
export default Description; 