import React, { useState, ReactNode } from 'react'
import { useTransition, animated } from 'react-spring';

interface PropTypes {
    completed?: () => void;
    children: ReactNode;
}

const PageTransition = (props: PropTypes) => {
    const [showPage, setShowPage] = useState(true);


    const transitions = useTransition(showPage, null, {
        from: { transform: 'scale(0)', opacity: 0 },
        enter: { transform: 'scale(1)', opacity: 1 },
        leave: { transform: 'scale(0)', opacity: 1 },
        onRest: props.completed
    });

    const content = props.children;

    return (
        <div>
            {transitions.map(
                ({item, key, props}) => item && <animated.div key={key} style={props}>{content}</animated.div>
            )}
        </div>
    )
}

export default PageTransition
