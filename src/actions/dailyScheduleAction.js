import axios from "axios";

export function getDailyScheduleAction() {
    return (dispatch) => {
        dispatch({ type: "Fetch" });
        axios.get("http://localhost:3000/api/dailyMeetingSchedule")
            .then((response) => {
                dispatch({ type: "Received", payload: response.data });
            }).catch((err) => {
                dispatch({ type: "Error", payload: err });
            })
    }
}