import ActivitiesService from "../services/ActivityService";
import EditForm from '../components/EditForm';
import React, { useState } from "react";

const CompletedActivity = ({ activity, editActivity, removeActivity }) => {

    const [showEdit, setShowEdit] = useState(false)

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
            <button onClick={handleShowEditForm}> Update! </button>
            {showEdit && <EditForm editActivity={editActivity} activityToEdit={activity} handleShowEditForm={handleShowEditForm} />}
            <hr></hr>
        </>
    )
}

export default CompletedActivity