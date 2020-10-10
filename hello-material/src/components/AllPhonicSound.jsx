import React from 'react';
import {useSprings, animated, interpolate, useTrail} from 'react-spring';

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const cols = 6;
function to(i) {
    const offset = i>=24 ? 80*2 : 0;
    const out = {xy: [(i%cols)*80 + offset + 150, Math.floor(i/cols)*80 + 50], 
        background: `rgb(${Math.random()*100 + 10}, ${Math.random()*155 + 10}, ${Math.random(155)+10}, 1)`};
    return out;
}

function from(i) {
    return {xy: [0, 0], background: `#000000` };
}


const AllPhonicSound = (props) => {

    const [elRefs, setElRefs] = React.useState([]);
    const [springs, set, stop] = useSprings(alphabets.length, 
            i => ({...to(i), from: from(i)}))
    
    return (
        <>
        <div className="playarea">
          {
            springs.map(({xy, background}, i) => {
                return <animated.div key={`alpha-${i}`}
                    style={{
                        background,
                        transform: interpolate([xy], xy => `translate3d(${xy[0]}px, ${xy[1]}px, 0)`)
                    }}
                    ref={elRefs[i]} id={`block${alphabets[i]}`} 
                    className="alphablock">{alphabets[i]}
                </animated.div>;
            })
          }
        </div>
        </>
    );
}

export default AllPhonicSound;