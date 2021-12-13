import { useState,useEffect } from "react"
const Pomodoro =() => {
const [minutes,setMinutes] = useState(25)
const [seconds,setSeconds] = useState(0)
const [displayMessage,setDisplayMessage] = useState(false)
const [isPaused,setIsPaused] = useState(true)

useEffect(() => {
    let interval = setInterval(() => {
        if (isPaused) {return}
        clearInterval(interval)

        if ( seconds === 0){
            if (minutes !== 0){
                setSeconds(59)
                setMinutes(minutes -1 )
            } else {
                let minutes =  displayMessage ? 24 : 4;
                let seconds = 59;
                setMinutes(minutes)
                setSeconds(seconds)
                setDisplayMessage(!displayMessage)
            } 
            
        } else{
            setSeconds(seconds -1)
        }
    }, (1000));

},[seconds,isPaused])

const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return (
        <div className="pomodoro">
            <div className="pomodoroTimerMessage">
                <h3>PomodoroQuests</h3>
            </div>
           <div className="message">
               {displayMessage && <div>displayBreak Time! new session starts in: </div>}
           </div>
           <div className="timer">{timerMinutes}:{timerSeconds}</div>
           <button onClick={()=>{setIsPaused(!isPaused)}}>{isPaused ? 'Start' : 'Pause'}</button>
           <div>ADD QUEST TO YOUR POMODORO LIST! ++++</div>
           
        </div>
    )
}
export default Pomodoro