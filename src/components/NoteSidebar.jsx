import React from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardHeader, CardSubtitle, Button, Row, Col, Container, CardFooter
} from 'reactstrap';


export default class NoteSidebar extends React.Component {

    render() {
        console.log(this.props);
        const {title, content, created} = this.props;
        const{r,g,b,a}=this.props.color;
        return (
            <div>
                <Card inverse style={{ backgroundColor: `rgba(${r},${g},${b},${a})`, borderColor: '#333' }}>
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
                    <CardFooter>{created}</CardFooter>
                </Card>
            </div>)
    }
}