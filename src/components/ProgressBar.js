import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../stylesheets/progressbar.css'


/* 
<Fade right>
    <ProgressBar percentage={60} />
</Fade> 
*/

export default function ProgressBas({ percentage }) {
    const [percent, setPercent] = useState(0)

    return (
        <Fade right
            onReveal={() => {
                for (let i = 0; i < percentage; i++) {
                    setTimeout(() => {
                        setPercent(i)
                    }, 1500)
                }
            }}>
            <div className="progress-bar">
                <Filler percentage={percent} />
            </div>
        </Fade>

    )
}

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
}