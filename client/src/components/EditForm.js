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

        const editedActivityToBeSentToDb = { // this is gathering all the input fields (event.target.value) and bundling them into the correct format for the db
            // the following is the db object structure, and its using the usestate
            exercise: { name: exerciseName, intensity: exerciseIntensity },
            time: time,
            day: day
        }

        // this is a const showing all the gathered fields relating to the activity that needs to be edited... so when the 'update' window is shown, the input fields will be populated with the data relating to that specific entry that needs to be updated. This is similar to the const above, but this has a db _id
        const editedActivity = {
            _id: activityToEdit._id,
            exercise: { name: exerciseName, intensity: exerciseIntensity },
            time: time,
            day: day
        }


        // the patch function needs to take in two arguments ie  putActivity(payload, id)
        ActivitiesService.putActivity(editedActivityToBeSentToDb, activityToEdit._id)
            .then(() => {
                editActivity(editedActivity)
        })
        
        /// this function comes from the completedActivity form 
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