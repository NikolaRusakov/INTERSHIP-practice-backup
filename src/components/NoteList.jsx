import React from 'react';
import {connect} from 'react-redux'
import {ListGroup, Container, Row, Col, Button} from 'reactstrap';

import User from './User'
import Form from './Form'

const actions = {
    ADD_NOTE: "ADD_NOTE",
    EDIT_NOTE: "EDIT_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
    COLOR_CHANGE: "COLOR_CHANGE",
    COLORPICKER_CLOSE: "COLORPICKER_CLOSE",
    COLORPICKER_CLICK: "COLORPICKER_CLICK"
}

const TodoList = class TodoList extends React.Component {

    handleCreate = (data) => {
        this.props.dispatch({type: actions.ADD_NOTE, payload: data})
    };
    render = () => {
        const {list} = this.props;
        return <div>
            <Container fluid={true}>
                <Row>
                    <Col xs={{size: 6, offset: 3}}>
                        <Form onSubmit={this.handleCreate}/>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={{size: 5}}>


                    </Col>
                </Row>
            </Container>
        </div>
    };
};

export default connect((state) => ({list: state.todo.notes}))(TodoList);
