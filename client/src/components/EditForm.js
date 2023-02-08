import { useState } from 'react';
import ActivitiesService from '../services/ActivityService';

const EditForm = ({ activityToEdit, handleShowEditForm, editActivity }) => {

    const [exerciseName, setExerciseName] = useState(activityToEdit.exercise.name)
    const [exerciseIntensity, setExerciseIntensity] = useState(activityToEdit.exercise.intensity)
    const [time, setTime] = useState(activityToEdit.time)
    const [day, setDay] = useState(activityToEdit.day)


    const onNameInput = (event) => { // this is the action of the user typing in the field. And this will update the state of "exerciseName" when its called with the value of the field. And it will be called in the JSX, ie return statement, as part of the the onChnage listener event
        setExerciseName(event.target.value)
    }
    const onIntensityInput = (event) => {
        setExerciseIntensity(event.target.value);
    }
    const onTimeInput = (event) => {
        setTime(event.target.value);
    }
    const onDayInput = (event) => {
        setDay(event.target.value);
    }
    

    const onSubmit = (event) => {
        event.preventDefault(); //preventing the form from refreshing itself on submit

        const editedActivity = { // this is gathering all the input fields (event.target.value) and bundling them into the correct format for the db
            // the followiung is the db object structure
            _id : activityToEdit._id,
            exercise: { name: exerciseName, intensity: exerciseIntensity },
            time: time,
            day: day
        }


        ActivitiesService.putActivity(editedActivity)
            .then(() => {
                editActivity(editedActivity)
        })
        
        // TODO: make a function that handles a put request in Activity Service

        handleShowEditForm()
    }

    return (
        <>
            <form onSubmit={onSubmit} id="activities-form">
                <h2>Edit Activity</h2>
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

export default EditForm 