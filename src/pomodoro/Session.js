import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";

//{session?.timeRemaining} remaining

export default function Session({
    session,
    currentDuration,
    isTimerRunning
}) {
    // focusDuration, breakDuration
    //the fucking big ugly PAUSE
    //  const timer = (currentDuration === "Focusing" ? focusDuration : breakDuration)
    //  const progressBar = ((((currentDuration * 60) - session.timeRemaining) / (currentDuration * 60))  * 100).toFixed()
    const pausedText = isTimerRunning ? " " : 'PAUSED'

    if (!session) {
        return null;
    } else {
        const progressBar = ((((currentDuration * 60) - session.timeRemaining) / (currentDuration * 60)) * 100).toFixed()
        const progressPercent = progressBar + "%"
        return (
            <>
                <div>
                    {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused -place in own componente*/}
                    <div className="row mb-2">
                        <div className="col">
                            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                            <h2 data-testid="session-title">
                                {session?.label} for {minutesToDuration(currentDuration)}{" "}
                                minutes
                            </h2>
                            {/* TODO: Update message below correctly format the time remaining in the current session */}
                            <p className="lead" data-testid="session-sub-title">
                                {secondsToDuration(session?.timeRemaining)} remaining
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>{pausedText}</h2>

                </div>

                <div className="row mb-2">
                    <div className="col">
                        <div className="progress" style={{ height: "20px" }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow={progressBar}
                                style={{ width: progressPercent }}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}