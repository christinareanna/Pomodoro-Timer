import React from 'react'
import { minutesToDuration } from "../utils/duration"

function Controls({ focusDuration, setFocusDuration, breakDuration, setBreakDuration, setRemainingTime, controlsDisabled }) {
  
  const increaseFocusTime = () => {
    setFocusDuration((time) => Math.min(60, time + 5))
    setRemainingTime((time) => Math.min(3600, time + 5 * 60))
  }
  
  const decreaseFocusTime = () => {
    setFocusDuration((time) => Math.max(5, time - 5))
    setRemainingTime((time) => Math.max(300, time - 5 * 60))
  }
  
  const increaseBreakTime = () => {
    setBreakDuration((time) => Math.min(15, time + 1))
  }
  
  const decreaseBreakTime = () => {
    setBreakDuration((time) => Math.max(1, time - 1))
  }
  
  
  return (
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocusTime}
                disabled={controlsDisabled}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocusTime}
                disabled={controlsDisabled}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={decreaseBreakTime}
                  disabled={controlsDisabled}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={increaseBreakTime}
                  disabled={controlsDisabled}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
)}

export default Controls
