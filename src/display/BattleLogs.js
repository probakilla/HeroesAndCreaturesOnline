import React from 'react';
import { Collapse, Button } from 'react-bootstrap';

class BattleLogs extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false
        };
    }

    appendText(content) {
        let element = document.getElementById('collapse-text');
        let text = document.createElement('p');
        text.innerHTML = content;
        text.appendChild(document.createElement('br'));
        element.appendChild(text);
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button
                    className="btn btn-dark raised"
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="collapse-text"
                    aria-axpend={open}
                >
                    {' '}
                    Click to expand the battle log (Not functional)
                </Button>
                <Collapse in={this.state.open}>
                    <div id="collapse-text">
                        <p>Battle has begun!</p> <br />
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default BattleLogs;
