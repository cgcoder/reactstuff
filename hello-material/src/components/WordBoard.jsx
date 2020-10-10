import React, { useState, createRef } from 'react';
import Draggable from 'react-draggable'
import {useSprings, animated, interpolate} from 'react-spring';
import { useEffect } from 'react';
import LetterBlock from './LetterBlock';

const alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// const alphas = "⚽⚽⚽⚽⚽🎃🎃🎃🎃🎃".split("");
//const alphas = ["⚽", "⚽", "⚽", "⚽", "⚽", "🚓", "🚓", "🚓", "🚓", "🚓"];
// const alphas = ["🍓","🍓","🍓","🍓","🍓","🍉","🍉","🍉","🍉","🍉", "+", "=", "1", "2", "3", "4", "5", "6", "7"];
//const alphas = ["🏎️","🏎️","🏎️","🏎️","🏎️","🏎️","🏎️","🏎️","🏎️","🏎️", "+", "=", "1", "2", "3", "4", "5", "6", "7"];
const stationSize = 10;
const cols = 13;

function translateCss(i) {
    return `translate(${getX(i)}px, ${getY(i)}px)`;
}

function translate(i) {
    return {x: getX(i), y: getY(i)};
}

function getX(i) {
    return (i%13)*100+100;
}

function getY(i) {
    return (Math.floor(i/13)*100 + 14);
}

function to(i) {
    const offset = i>=24 ? 80*2 : 0;
    const out = {xy: [i * 100 + 250, 250], 
        background: `rgb(${Math.random()*100 + 10}, ${Math.random()*155 + 10}, ${Math.random(155)+10}, 1)`};
    return out;
}

function from(i) {
    return {xy: [0, 0], background: `white` };
}

const WordBoard = (props) => {

    const [refs, setRefs] = useState([createRef()]);
    const [pressed, setPressed] = useState(-1);
    const [addedAlphas, setAddedAlphas] = useState([]);
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
    const [springs, set, stop] = useSprings(alphas.length,
        i => ({...to(i), from: from(i)}))

    const onMouseDown = (e, index) => {
        console.log(e);
        
    }

    const onMouseUp = (e, i) => {
        addedAlphas.push(i);
        setTotal(total+1);
    }

    const onMouseMove = (e) => {
        
    }

    useEffect(() => {
        const temp = [];
        for (let i = 0;i < total; i++) {
            temp.push(
                <LetterBlock alpha={alphas[addedAlphas[i]]}
                    from={{x: getX(addedAlphas[i]), y: getY(addedAlphas[i])}}
                    to={ {x: 400 + i*100, y: 400 }} />
            );
        }
        setItems(temp);
    }, [total]);

    

    return (
        <>
        <div className="playarea">
            {
                alphas.map((alpha, i) => {
                    return (
                        <div key={`temp-blocks-${i}`} className="alphablock-medium" 
                            style={{transform: `${translateCss(i)}`}} 
                            onMouseUp={(e) => onMouseUp(e, i)}>{alpha}</div>
                    );
                })
            }
            {items}
        </div>
        </>
    );
}

export default WordBoard;