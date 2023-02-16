import ActivitiesService from "../services/ActivityService";
import EditForm from '../components/EditForm';
import React, { useState } from "react";

const CompletedActivity = ({ activity, editActivity, removeActivity }) => {


    // this is showing/hiding the update form from view - false means it set to hide on initial load
    const [showEdit, setShowEdit] = useState(false)

    // creating a function to toggle the view of 'showEdit'
    const handleShowEditForm = () => {
        setShowEdit(!showEdit)
    }

    const handleDelete = () => {
        ActivitiesService.deleteActivity(activity._id)
            .then(() => {
                removeActivity(activity._id);
            })
    }

    return (
        <>
            <p>{activity.exercise.name}</p>
            <p>{activity.time} mins</p>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleShowEditForm}> Update activity! </button>
            {showEdit && <EditForm editActivity={editActivity} activityToEdit={activity} handleShowEditForm={handleShowEditForm} />}
            <hr></hr>
        </>
    )
}

export default CompletedActivity