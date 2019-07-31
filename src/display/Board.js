import React from 'react';
import { Container } from 'react-bootstrap';
import './Board.css'
import Team from './TeamDisplay'

class Board extends React.Component {
    render() {
        return (
            <Container className="board-style">
                <Team />
                <br />
                <br />
                <Team />
            </Container>
        );
    }
}

export default Board;
