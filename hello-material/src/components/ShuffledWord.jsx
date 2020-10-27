// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list

import React, { useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useDrag } from 'react-use-gesture'
import { useSprings, animated, interpolate, useTrail } from 'react-spring'
import { useEffect } from 'react'
import {useMeasure} from './../hooks/windowHooks';
import { set } from 'lodash-es'
//  import './styles.css'

// Returns fitting styles for dragged/idle items
const fn = (order, width, down, originalIndex, curIndex, x, onShuffle) => index => {
  const offset = (width - order.length*100)/2;
  if (!down && onShuffle) {
      onShuffle(order);
  }
  return down && index === originalIndex
    ? { to: {x: offset + curIndex * 100 + x, scale: 1.3, zIndex: '1', shadow: 15, color: 'rgb(120, 130, 100)'}, immediate: n => n === 'x' || n === 'zIndex' }
    : { to: {x: offset + order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, color: 'rgb(255, 255, 255)'}, immediate: false }
}

const getSpringUpdateFn = (order, width, height) => index => {
    const offset = (width - order.length*100)/2;
    const voffset = (height - 100)/2;
    return {to: {x: offset + order.indexOf(index) * 100, y: voffset, scale: 1, zIndex: '0', shadow: 1, color: 'rgb(255,255,255)'}, immediate: false }
};

function checkWord(originalWord, order, loadNextCallback) {
    console.log(originalWord);
}

function ShuffledWord({ shuffleWord, originalWord }) {
  const items = shuffleWord.split(" ");
  const [offset, setOffset] = useState(100);
  const [loadNext, setLoadNext] = useState(false);
  const [containerBind, { width, height }] = useMeasure();
  const [trail, set, stop] = useTrail(5, () => ({opacity: 0}))

  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(items.length, getSpringUpdateFn(order.current, width, height)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], down, movement: [x, ] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curCol = clamp(Math.round((curIndex * 100 + x) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curCol)
    setSprings(fn(newOrder, width, down, originalIndex, curIndex, x, (cbOrder)=>checkWord(originalWord, order, setLoadNext))); // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder;
  })

  useEffect(() => {
    setSprings(getSpringUpdateFn(order.current, width, height))
  }, [width]);

  return (
    <div {...containerBind} className="playarea">
      {springs.map(({ zIndex, shadow, x, y, scale, color }, i) => {
        return (
        <animated.div className="alphablock-medium"
          {...bind(i)}
          key={i}
          style={{
            fontSize: '60px',
            zIndex,
            color,
            boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            transform: interpolate([x, y, scale], (x, y, s) => `translate3d(${x}px,${y}px,0) scale(${s})`)
          }}
        >
            <animated.div style={{color}}>{items[i]}</animated.div>
        </animated.div>);
        })}
        
    </div>
  )
}

export default ShuffledWord;