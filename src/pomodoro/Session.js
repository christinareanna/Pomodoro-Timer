import React from "react"
import { minutesToDuration, secondsToDuration } from "../utils/duration";

export default function Session({ session, focusDuration, breakDuration, isStopped, remainingTime, isTimerRunning }) {
  
const paused = isTimerRunning ? "" : "Paused"
const currentTimer = (session === "Focusing" ? focusDuration : breakDuration)
const percent = ((currentTimer * 60 - remainingTime) / (currentTimer * 60)) * 100

if (!isStopped) {

return (
    <div> 
        <div className="row">
            <div className="col">
                <h2 data-testid="session-title">
                    {session} for {minutesToDuration(currentTimer)} minutes
                </h2>
                <p className="lead" data-testid="session-sub-title">
                    {secondsToDuration(remainingTime)} remaining
                </p>
            </div>
        </div>
    <h2>{paused}</h2>
        <div className="row">
            <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={percent}
                        style={{ width: `${percent}%` }}>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
} else {
   return null;
}
}