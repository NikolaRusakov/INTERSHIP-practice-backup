import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

export default class FormField extends React.Component {
    render() {
        return (
            <FormGroup>
                <Label>{this.props.label}</Label>
                <Input {...this.props} {...this.props.input}  />
            </FormGroup>
        )
    }
}