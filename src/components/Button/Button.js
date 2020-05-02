import React from 'react';
import { getClassName, getBaseStyle } from '../../utils/ComponentUtils';
import './button.scss';

export default (props) => {
    const {
        className,
        darkMode
    } = props;

    return (
        <button
          className={ getClassName('at-button', className, darkMode) }
          style={ getBaseStyle()}
          onClick={ props.onClick }>
          {props.label}
        </button>
    );
}
