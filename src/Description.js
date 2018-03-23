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
                <form action="description">
                <input className = 'description' placeholder = "Description" type="description-text"rows="10"/>
                </form>
            </div>
        )
    }
}
export default Description; 