import { useState } from "react";
import ActivitiesService from "../services/ActivityService";

const ActivitiesForm = ({ addActivity }) => {

    const [formData, setFormData] = useState({
        exercise: "",
        intensity: "",
        time: "",
        day: ""
    })

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        ActivitiesService.postActivity[formData]
            .then((data) => {
                addActivity(data)
            })

        // Reset the form
        setFormData({
            exercise: "",
            intensity: "",
            time: "",
            day: ""
        })
    }

    return (
        <>
            <form onSubmit={onSubmit} id="activities-form">
                <h2>Add activity</h2>
                <label htmlFor="exercise.name">Exercise name: </label>
                <input
                    onChange={onChange}
                    type="text"
                    id="exercise.name"
                    name="exercise"
                    value={formData.exercise.name}
                />
                <label htmlFor="exercise.intensity">Intensity level: </label>
                <input
                    onChange={onChange}
                    type="text"
                    id="exercise.intensity"
                    name="intensity"
                    value={formData.exercise.intensity}
                />
                <label htmlFor="time">Minutes: </label>
                <input
                    onChange={onChange}
                    type="number"
                    id="time"
                    name="time"
                    value={formData.time}
                />
                <label htmlFor="day">Day: </label>
                <input
                    onChange={onChange}
                    type="text"
                    id="day"
                    name="day"
                    value={formData.day}
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