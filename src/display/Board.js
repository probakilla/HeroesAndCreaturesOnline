import React from 'react';
import { Container } from 'react-bootstrap';
import './Board.css';
import Team from './TeamDisplay';
import Prompt from './Prompt';

class Board extends React.Component {
    render() {
        return (
            <div>
                <Container className='board-style'>
                    <Team />
                    <br />
                    <br />
                    <Team />
                </Container>
                <Prompt />
            </div>
        );
    }
}

export default Board;
