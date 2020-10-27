import React, {useState} from 'react';
import {animated, useTrail, useSpring} from 'react-spring';
import { useEffect, useRef } from 'react';

const config = { mass: 5, tension: 3000, friction: 200 }

const WiggleMessage = ({message, showDuration, onDone, displayCount = 15}) => {
    const showCount = useRef(displayCount);
    const [show, setShow] = useState(true);
    const [messageChars] = useState(message.split(""));
    const {left, ...props} = useSpring({from: {opacity: 0, left: 0}, to: {opacity: 1, left: 120, top: 200}});
    const [trails, set, stop] = useTrail(messageChars.length, () => 
            ({
                config,
                to: {opacity: 1, scale: 100},
                from: {opacity: 0, scale: 0},
                onRest: () => {
                    if (showCount.current - 2 > 0) {
                        showCount.current--;
                        setShow(showCount.current%2 == 0);
                    }
                    else if(onDone) {
                        console.log(showCount.current);
                        onDone();
                    }
                }
            }));

    useEffect(() => {
        console.log(showCount.current);
        set({opacity: show ? 1 : 0});
    }, [show]);

    return (
        <animated.div style={{...props, height: left.interpolate(l => `${l}px`)}} className="message-box">
            {trails.map((props, i) => {
                return (
                    <animated.span className="trails-text" key={`char-${i}`} style={{...props, color: `rgb(${150+i*20}, 150, 180)`}}>
                        {messageChars[i]}
                    </animated.span>);
            })}
        </animated.div>);
}

export default WiggleMessage;