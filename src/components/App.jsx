import React from 'react';
import {connect} from 'react-redux'
import {Container, Row, Col, CardColumns, CardGroup, CardDeck} from 'reactstrap';

import Form from './Form'
import NoteSidebar from "./NoteSidebar";

const actions = {
    ADD_NOTE: "ADD_NOTE",
    EDIT_NOTE: "EDIT_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
    COLOR_CHANGE: "COLOR_CHANGE"
}

const App = class App extends React.Component {
    handleCreate = (data) => {
        this.props.dispatch({type: actions.ADD_NOTE, payload: data})
    };
    handleDelete = (index) => {
        console.log(index);
        this.props.dispatch({type: actions.DELETE_NOTE, index})
    };
    handleEdit = (index) => {
        this.props.dispatch({type: actions.EDIT_NOTE, index})
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
                                                key={index}
                                                {...item}
                                                onDelete={this.handleDelete.bind(this,index)}
                                                onEdit={this.handleEdit.bind(this,index)}
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
