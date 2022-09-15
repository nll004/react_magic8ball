import {useState} from "react";
import {getText, ballText} from "./answers.js"
import "./eightBall.css"

const EightBall = () => {
    const [index, changeIndex] = useState(0);

    function toggleAnswer() {
        changeIndex(index !== 0 ? 0 : getText)
    }

    return (
        <div className="EightBall-container">
            <div className="EightBall-ball" onClick={toggleAnswer} style={{backgroundColor : ballText[index].color}}>
                <p className="EightBall-question">{ballText[index].msg}</p>
            </div>
        </div>
    )
};

export default EightBall;
