import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

function translate(props) {
    return `translate(${props.x}px, ${props.y}px)`;
}

const LetterBlock = (props) => {
    
    const [selected, setSelected] = useState(false);
    const [animating, setAnimating] = useState(true);
    const [{transform}, set] = useSpring(() => ({
            from: {transform: translate(props.from)},
            to: {transform: translate(props.to)},
            onRest: () => setAnimating(false)
         }));

    const bind = useDrag(({ down, offset: [mx, my] }) => {
        set({ transform: `translate(${props.to.x + mx}px, ${props.to.y + my}px)` })
    })

    return (
        <animated.div key={props.key}
            {...bind()}
            style={{transform}}
            className="alphablock-medium">
            {props.alpha} 
        </animated.div>
    );
}

export default LetterBlock;