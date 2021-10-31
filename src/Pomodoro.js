import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import Session from "./Session"
import Controls from "./Controls"
import Button from "./Button"



function Pomodoro() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [session, setSession] = useState("Focusing");
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [remainingTime, setRemainingTime] = useState(1500)
  const [isStopped, setIsStopped] = useState(true)
  const [stopDisabled, setStopDisabled] = useState(true)
  const [controlsDisabled, setControlsDisabled] = useState(false)
  const audio = new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`)
  
  
  useInterval(() => {
    setRemainingTime(remainingTime - 1)
    if(remainingTime <= 0) {
      audio.play()
    if(session === "Focusing") {
      setSession("On Break")
      setRemainingTime(breakDuration * 60)
    } else if 
      (session === "On Break") {
      setSession("Focusing")
      setRemainingTime(focusDuration * 60)
      }
    }
  },
    isTimerRunning ? 1000 : null
  );
  
 const handleReset= () => {
   setIsTimerRunning(false)
   setSession("Focusing")
   setFocusDuration(25)
   setBreakDuration(5)
   setRemainingTime(1500)
   setIsStopped(true)
   setStopDisabled(true)
   setControlsDisabled(false)
 }
 
const playPause = () => { 
  setIsTimerRunning((running) => !running)
  setIsStopped(false)
  setStopDisabled(false)
  setControlsDisabled(true)
}
  
  
  return (
    <div>
      <Controls focusDuration={focusDuration} setFocusDuration={setFocusDuration} setBreakDuration={setBreakDuration} setRemainingTime={setRemainingTime} breakDuration={breakDuration} controlsDisabled={controlsDisabled}/>
      <Button playPause={playPause} isTimerRunning={isTimerRunning} handleReset={handleReset} stopDisabled={stopDisabled} classNames={classNames}/>
      <Session session={session} focusDuration={focusDuration} breakDuration={breakDuration} isStopped={isStopped} remainingTime={remainingTime} isTimerRunning={isTimerRunning} />
      <audio src={audio} type="audio/mp3"></audio>
    </div>
  );
}

export default Pomodoro;
