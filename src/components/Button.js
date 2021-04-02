import React from 'react';
import './Button.scss';

let styles = ['btn-primary', 'btn-outline'];
let sizes = ['btn-medium', 'btn-large', 'btn-mobile', 'btn-wide'];
let colors = ['primary', 'blue', 'red', 'green'];

let Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {

    let checkBtnStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
    let checkBtnSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
    let checkBtnColor = colors.includes(buttonColor) ? buttonColor : null;

    return <button className={`btn ${checkBtnStyle} ${checkBtnSize} ${checkBtnColor}`} onClick={onClick} type={type}>{children}</button>
}

export default Button;