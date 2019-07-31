import React from 'react'

class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Please click on a character'
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Prompt;