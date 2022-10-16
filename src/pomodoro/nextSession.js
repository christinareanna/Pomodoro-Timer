/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */
function nextSession(focusDuration, breakDuration) {
    /**
     * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
     */
    return (currentSession) => {
        if (currentSession.label === "Focusing") {
            return {
                label: "On Break",
                timeRemaining: breakDuration * 60, //{secondsToDuration(60)}
            };
        }
        return {
            label: "Focusing",
            timeRemaining: focusDuration * 60,
        };
    };
}

export default nextSession;