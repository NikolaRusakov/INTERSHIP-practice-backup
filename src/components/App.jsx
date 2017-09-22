import React from 'react';
import {connect} from 'react-redux'
import {Container, Row, Col, CardColumns, CardGroup, CardDeck} from 'reactstrap';

import Form from './Form'
import NoteSidebar from "./NoteSidebar";

const actions = {
    ADD_NOTE: "ADD_NOTE",
    EDIT_NOTE: "EDIT_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
    COLOR_CHANGE: "COLOR_CHANGE",
    COLORPICKER_CLOSE: "COLORPICKER_CLOSE",
    COLORPICKER_CLICK: "COLORPICKER_CLICK"

}

const App = class TodoList extends React.Component {
    handleCreate = (data) => {
        this.props.dispatch({type: actions.ADD_NOTE, payload: data})
    };

    render() {
        const {notes} = this.props;
        return <div>
            <Container fluid={true}>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <Form onSubmit={this.handleCreate}/>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true}>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <CardDeck>
                            {notes.map((item, index) =>
                                <Container>
                                    <Row>
                                        <Col md={{size: 6}}>
                                            <NoteSidebar
                                                key={`note-${index}`}
                                                {...item}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            )}

                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        </div>
    };
};

export default connect((state) => ({notes: state.todo.notes}))(App);
