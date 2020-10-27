import React, { useState, createRef } from 'react';
import Draggable from 'react-draggable'
import {useSprings, animated, interpolate} from 'react-spring';
import { useEffect } from 'react';
import {useMeasure} from './../hooks/windowHooks';
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

function to(i, w) {
    const offset = i>=24 ? 80*2 : 0;
    const width = Math.floor(w/13);
    const out = { transform: `translate()`};
    return out;
}

function templateFinalStyles(i, w) {
    let row = Math.floor(i/13);
    let col = Math.floor(i%13);
    console.log(w);

    const width = Math.ceil(w/15);//2 blocks padding on both sides
    let fontSize = Math.floor(width/3);
    const x = Math.floor((col+1)*(width));
    const y = 50 + Math.floor((row)*(width));

    return { transform: `translate(${x}px, ${y}px)`, width: width-15, height: width-15, fontSize: `${fontSize}px` };
}

function templateInitStyles(i, w) {
    const x = 0, y = 0, width = 0;
    return { transform: `translate(${x}px, ${y}px)`, width: width-15, height: width-15 };
}

function from(i, w) {

}

const WordBoard = ({word}) => {

    const [refs, setRefs] = useState([createRef()]);
    const [containerBind, { width }] = useMeasure();
    const [pressed, setPressed] = useState(-1);
    const [addedAlphas, setAddedAlphas] = useState([]);
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
    const [springs, set, stop] = useSprings(alphas.length,
        i => ({...templateFinalStyles(i, width), from: templateInitStyles(i, width)}))

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
        set(i => ({...templateFinalStyles(i, width), from: templateInitStyles(i, width)}))
    }, [width]);

    useEffect(() => {
        const temp = [];
        for (let i = 0;i < total; i++) {
            temp.push(
                <LetterBlock alpha={alphas[addedAlphas[i]]}
                    from={{x: getX(addedAlphas[i]), y: getY(addedAlphas[i])}}
                    to={{x: 400 + i*100, y: 400 }} />
            );
        }
        setItems(temp);
    }, [total]);

    return (
        <>
        <div {...containerBind}  className="playarea">
            {
                alphas.map((alpha, i) => {
                    return (
                        <animated.div key={`block-${i}`} className="alphablock" 
                            style={{...springs[i]}} 
                            onMouseUp={(e) => onMouseUp(e, i)}>
                            <div  key={`block-cnt-${i}`} className="alpha-content">
                                {alpha}
                            </div>
                        </animated.div>
                    );
                })
            }
            {items}
        </div>
        </>
    );
}

export default WordBoard;