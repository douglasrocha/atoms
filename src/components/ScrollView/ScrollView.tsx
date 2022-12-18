import * as React from 'react';
import { useState } from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../services/ComponentService';
import './scrollView.css';

export interface ScrollViewProps extends BaseProps {
    children: React.ReactElement,
    maxHeight: number | string,
    maxWidth: number | string
}

export interface ScrollBarProps extends BaseProps {
    offset: number,
    maxOffset: number
}

export const ScrollView = (props: ScrollViewProps) => {
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
	// const scrollTop = scrollViewRef.current.scrollTop;
	// const scrollLeft = scrollViewRef.current.scrollLeft;
	// const maxOffsetTop = scrollViewRef.current.scrollTopMax;
	// const maxOffsetLeft = scrollViewRef.current.scrollLeftMax;
	// setVerticalOffset(scrollTop);
	// setHorizontalOffset(scrollLeft);
	// setMaxVerticalOffset(maxOffsetTop);
	// setMaxHorizontalOffset(maxOffsetLeft);
    };

    return (
        <div
            //ref={ scrollViewRef }
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

const VerticalScrollBar = (props: ScrollBarProps) => {
    const { offset } = props;
    return (
	<div className="scroll vertical">
	    <div className="bar" />
	</div>
    );
}

const HorizontalScrollBar = (props: ScrollBarProps) => {
    const { offset } = props;
    return (
	<div className="scroll horizontal">
	    <div className="bar" />
	</div>
    );
}