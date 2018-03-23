import React from 'react';

class Age extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    Age
                </h1>
                <hr width = "20%"/>
                <br/>
                <form action="">
                <input className = "age" type="number"/>
                </form>
            </div>
        )
    }
}
export default Age;
