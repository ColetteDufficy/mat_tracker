import { useState } from "react";
import ActivitiesService from "../services/ActivityService";

const ActivitiesForm = ({ addActivity }) => {

    const [exerciseName, setExerciseName] = useState("") // this is the hook, useState. When the page first loads, the fields are initially empty ie ""
    const [exerciseIntensity, setExerciseIntensity] = useState("")
    const [time, setTime] = useState("")
    const [day, setDay] = useState("")


    const onNameInput = (event) => { // this is the action of the user typing in the field. And this will update the state of "exerciseName" when its called with the value of the field. And it will be called in the JSX, ie return statement, as part of the the onChnage listener event
        setExerciseName(event.target.value)
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
        event.preventDefault(); //preventing the form from refreshing itself on submit

        const inputToSend = { // this is gathering all the input fields (event.target.value) and bundling them into the corrrect format for the db
            // the followiung is the db object structure
            exercise : {name: exerciseName, intensity: exerciseIntensity },
            time: time,
            day : day 
         }

         // this is the "gathered input fields" ie "inputToSend", and posting "inputToSend" to the db as one const
        ActivitiesService.postActivity(inputToSend)
            .then((data) => {
                addActivity(data)
            })
        setDay("") // form fields being reset as empty 
        setExerciseIntensity("")// form fields being reset as empty 
        setExerciseName("")// form fields being reset as empty 
        setTime("")        // form fields being reset as empty 
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