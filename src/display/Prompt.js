import React from 'react';
import '../css/Prompt.css';

class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Please click on a character'
        };
    }

    render() {
        return (
            <div className="prompt-style">
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Prompt;
