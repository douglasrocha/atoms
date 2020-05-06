import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './scrollView.scss';

const ScrollBar = () => (
    <div className="scroll">
      <div className="bar" />
    </div>
);

const ScrollBars = () => (
    <React.Fragment>
      <ScrollBar />
      <ScrollBar />
    </React.Fragment>
);

const Content = (props) => {
    const { children, maxHeight, maxWidth, style } = props;
    const inputStyle = style || {};
    const componentStyle = Object.assign(inputStyle, {
        maxHeight: `calc(${maxHeight} - 8px)`,
        maxWidth: `calc(${maxWidth} - 8px)`
    });

    console.log(componentStyle);
    
    return (
        <div
          className="content"
          style={{ ...componentStyle  }}>
          { children }
        </div>
    );
};

export default (props) => {
    const {
        children,
        className,
        contentStyle,
        darkMode,
        maxHeight,
        maxWidth,
        style
    } = props;
    const events = extractEvents(props);

    return (
        <div
          className={ getClassName('at-scrollview', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          <Content
            maxHeight={ maxHeight }
            maxWidth={ maxWidth }
            style={ contentStyle }>
            { children }
          </Content>
          <ScrollBars />
        </div>
    );
}
