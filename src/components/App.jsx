import React from 'react';
import {connect} from 'react-redux'
import {ListGroup, Container, Row, Col, Button} from 'reactstrap';

import User from './User'
import Form from './Form'

const actions = {
    USER_CREATE: "USER_CREATE",
    USER_DELETE: "USER_DELETE",
    COLOR_CHANGE: "COLOR_CHANGE",
    COLORPICKER_CLOSE: "COLORPICKER_CLOSE",
    COLORPICKER_CLICK: "COLORPICKER_CLICK"
}

const TodoList = class TodoList extends React.Component {
    render = () => {
        const {list} = this.props;
        return <div>
            <Container fluid={true}>
                <Row>
                    <Col xs={{size: 6, offset: 3}}>
                        <Form onSubmit={this.handleCreate}/>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col xs={{size: 3, push: 2}}>
                            <Button color="secondary" name="toLeft" type="submit" size="sm">{">>>"}</Button>
                        </Col>
                        <Col xs={{size: 2, push: 6}}>
                            <Button color="secondary" name="toLeft" type="submit" size="sm">{"<<<"}</Button>

                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <Row>
                    <Col xs={{size: 5}}>
                        <ListGroup>
                            {list.map((item, index) => item.side == "left" &&
                                <User
                                    key={`ListItem-0-${index}`}
                                    {...item}
                                />
                            )
                            }
                        </ListGroup>
                    </Col>
                    <Col xs={{size: 5, offset: 2}}>
                        <ListGroup>
                            {list.map((item, index) => item.side == "right" &&
                                <User
                                    key={`ListItem-1-${index}`}
                                    {...item}
                                />
                            )
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    };
};

export default connect((state) => ({list: state.todo.list}))(TodoList);
