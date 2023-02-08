import ActivitiesService from "../services/ActivityService";

const CompletedActivity = ({ activity, removeActivity }) => {
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
            <hr></hr>
        </>
    )
}

export default CompletedActivity