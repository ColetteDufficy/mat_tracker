import { useState } from "react";
import ActivitiesService from "../services/ActivityService";

const ActivitiesForm = ({ addActivity }) => {

    const [exerciseName, setExerciseName] = useState("")
    const [exerciseIntensity, setExerciseIntensity] = useState("")
    const [time, setTime] = useState("")
    const [day, setDay] = useState("")


    const onNameInput = (event) => {
        setExerciseName(event.target.value);
    }
    const onIntensityInput = (event) => {
        setExerciseIntensity(event.target.value);
    }
    const onTimeInput = (event) => {
        setTime(event.target.value);
    }
    const onDayInput= (event) => {
        setDay(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const inputToSend = { 
            exercise : {name: exerciseName, intensity: exerciseIntensity },
            time: time,
            day : day 
         }

        ActivitiesService.postActivity(inputToSend)
            .then((data) => {
                addActivity(data)
            })
        setDay("")
        setExerciseIntensity("")
        setExerciseName("")
        setTime("")        
    }

    return (
        <>
            <form onSubmit={onSubmit} id="activities-form">
                <h2>Add activity</h2>
                <label htmlFor="exercise-name">Exercise name: </label>
                <input
                    onChange={onNameInput}
                    type="text"
                    id="exercise-name"
                    name="exercise"
                    value={exerciseName}
                />
                <label htmlFor="exercise-intensity">Intensity level: </label>
                <input
                    onChange={onIntensityInput}
                    type="text"
                    id="exercise-intensity"
                    name="intensity"
                    value={exerciseIntensity}
                />
                <label htmlFor="time">Minutes: </label>
                <input
                    onChange={onTimeInput}
                    type="number"
                    id="time"
                    name="time"
                    value={time}
                />
                <label htmlFor="day">Day: </label>
                <input
                    onChange={onDayInput}
                    type="text"
                    id="day"
                    name="day"
                    value={day}
                />
                <input
                    type="submit"
                    value="save"
                    id="save" />
            </form>
        </>
    )

}

export default ActivitiesForm