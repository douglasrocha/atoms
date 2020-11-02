import React, { useState } from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './scrollView.scss';

const VerticalScrollBar = (props) => {
    const { offset } = props;
    return (
	<div className="scroll vertical">
	    <div className="bar" />
	</div>
    );
}

const HorizontalScrollBar = (props) => {
    const { offset } = props;
    return (
	<div className="scroll horizontal">
	    <div className="bar" />
	</div>
    );
}

export default (props) => {
    const {
        children,
        className,
        darkMode,
        maxHeight,
        maxWidth,
        style
    } = props;

    const scrollViewRef = React.createRef();
    const events = extractEvents(props);
    const [ verticalOffset, setVerticalOffset ] = useState(0);
    const [ horizontalOffset, setHorizontalOffset ] = useState(0);
    const [ maxVerticalOffset, setMaxVerticalOffset ] = useState(0);
    const [ maxHorizontalOffset, setMaxHorizontalOffset ] = useState(0);

    
    const handleScroll = () => {
	const scrollY = window.scrollY;
	const scrollX = window.scrollX;
	const scrollTop = scrollViewRef.current.scrollTop;
	const scrollLeft = scrollViewRef.current.scrollLeft;
	const maxOffsetTop = scrollViewRef.current.scrollTopMax;
	const maxOffsetLeft = scrollViewRef.current.scrollLeftMax;
	setVerticalOffset(scrollTop);
	setHorizontalOffset(scrollLeft);
	setMaxVerticalOffset(maxOffsetTop);
	setMaxHorizontalOffset(maxOffsetLeft);
    };

    return (
        <div
	    ref={ scrollViewRef }
            className={ getClassName('at-scrollview', className, darkMode) }
	    style={{ maxHeight, maxWidth }}
	    onScroll={ handleScroll }
            { ...events }>

	    <div className="content">
		{ children }
	    </div>
	    
	    <VerticalScrollBar
		maxOffset={ maxVerticalOffset }
		offset={ verticalOffset } />
	    
	    <HorizontalScrollBar
		maxOffset={ maxHorizontalOffset }
		offset={ horizontalOffset } />
        </div>
    );
}
