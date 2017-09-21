'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'
import {connect} from 'react-redux'

const actions = {
    ADD_NOTE: "ADD_NOTE",
    EDIT_NOTE: "EDIT_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
    COLOR_CHANGE: "COLOR_CHANGE",
    COLORPICKER_CLOSE: "COLORPICKER_CLOSE",
    COLORPICKER_CLICK: "COLORPICKER_CLICK"

}

const ColorPicker = class ColorPicker extends React.Component {

    state = {
        displayColorPicker: false,
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

    handleChange = (color) => {
        console.log(this.props);
        this.props.input.onChange(color.rgb)
    };

    render() {
        const{value:{r,g,b,a}}=this.props.input;
        console.log(this.props)
        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${r}, ${g}, ${b}, ${a})`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });
        console.log(this.props);
        return (

            <div>
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color}/>
                </div>
                {this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose}/>
                    <SketchPicker color={this.props.value} onChange={this.handleChange}/>
                </div> : null}

            </div>
        )
    }
}
export default ColorPicker;