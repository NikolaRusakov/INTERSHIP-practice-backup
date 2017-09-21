import React from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardHeader, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';


export default class NoteSidebar extends React.Component {

    render() {
        const {title, content, created, lastModification} = this.props;
        return (
            <div>
                <Card>
                    <CardHeader>
                        <Row>
                            <Col md={{size: 1, push: 4, offset: 4}}>
                                <Button color="warning" size="sm" name="delete">deletion</Button>
                            </Col>
                            <Col md={{size: 1, push: 1}}>
                                <Button color="warning" size="sm" name="delete">editation</Button>
                            </Col>
                        </Row>
                    </CardHeader>

                    <CardBlock>
                        <CardTitle>{title}</CardTitle>
                        <CardText>{content}</CardText>

                    </CardBlock>
                    <CardFooter>{created}{lastModification}</CardFooter>
                </Card>
            </div>)
    }
}