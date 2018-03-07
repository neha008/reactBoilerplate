import React from 'react';
import ReactDOM from 'react-dom';
class VissibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility : !prevState.visibility
            }
        })
                
    }
    render() {
        return (
            <div>
                <h1>Visibilitty toggels</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide Details' : 'show details'}</button>
                {
             this.state.visibility && (
                    <div>
                        <p>hey</p>
                    </div>
                )
            } 
            </div>
        )
    }
}

ReactDOM.render(<VissibilityToggle />, document.getElementById('app'));