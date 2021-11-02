import React from "react"


function Button({playPause, isTimerRunning, handleReset, stopDisabled, classNames }) {
  return (
    <div className="row">
      <div className="col">
        <div className="btn-group btn-group-lg">
          <button type="button" className="btn btn-primary" data-testid="play-pause" onClick={playPause}>
            <span className={classNames({
            oi: true,
            "oi-media-play": !isTimerRunning,
            "oi-media-pause": isTimerRunning,
            })}
            />
          </button>
          <button type="button" className="btn btn-secondary" data-testid="stop" onClick={handleReset} disabled={stopDisabled}>
            <span className="oi oi-media-stop" />
         </button>
      </div>
    </div> 
   </div>
)}

export default Button;