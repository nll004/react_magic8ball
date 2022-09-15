import {useState} from "react";
import "./eightBall.css"

const EightBall = () => {
    const [isActive, setToActive] = useState(false)

    function toggleAnswer(e) {
        setToActive(current => !current)
    }

    return (
        <div className="EightBall-container">
            <div className={isActive ? "EightBall-ball answer" : "EightBall-ball"} onClick={toggleAnswer}>
                <p className="EightBall-question">Think of a Question</p>
            </div>
        </div>
    )
};

export default EightBall;
