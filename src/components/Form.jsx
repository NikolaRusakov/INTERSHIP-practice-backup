import React from 'react';
import {Button, Container, Col, Row} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import FormField from "./FormField";
import ColorPicker from './ColorPicker';

class Form extends React.Component {

    static formName = "addForm";

    static propTypes = {
        onSubmit: React.PropTypes.func.isRequired
    };
    /*state={
        displayColorPicker: false,
        color:{
            r:'0',
            g:'0',
            b:'0',
            a:1
        }
    }*/



    handleSubmit = (data) => {
        this.props.onSubmit(data);
        this.props.reset();
    };

    render() {
        return <form onSubmit={handleSubmit(this.handleSubmit)}>
            <Field component={ColorPicker} name="color"  label="Color"/>
            <Field component={FormField} name="title" label="title" type="title" placeholder="Title of a memo"/>
            <Field component={FormField} name="content" label="content" type="textarea" placeholder="Actual notes..."/>
            <Container>
                <Row>
                    <Col xs={{offset: 5}}>
                        <Button color="primary" type="submit" size="sm" disabled={submitting}>Proveď</Button>
                    </Col>
                </Row>
            </Container>
        </form>

        const {handleSubmit, submitting} = this.props;
    }
}

Form = reduxForm({
    initialValues: {
        title: "Chleba",
        notes: "Přidal bych další část 2.",
        created:new Date().toDateString(),
        color: {
            r: '0',
            g: '0',
            b: '0',
            a: '1',
        },
        displayColorPicker:false
    },
    form: Form.formName,
    validation: Form.validation,
})(Form);

export default Form;
