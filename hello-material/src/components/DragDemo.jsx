import { render } from 'react-dom'
import React from 'react'
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './../styles.css'

function Pull() {
    const [{ transform }, set] = useSpring(() => ({ to: { transform: `translate(0px, 0px)` } }))
    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ down, movement: [mx, my] }) => {
      set({ transform: down ? `translate(${mx}px, ${my}px)` : `translate(0px, 0px)` })
    })
    // Bind it to a component
    return <animated.div className="draggable" {...bind()} style={{ transform }} />
}

const DragDemo = (props) => {
    return (
        <Pull />
    );
}
export default DragDemo