import ActivitiesService from "../services/ActivityService";

const CompletedActivity = ({ activity, removeActivity }) => {
    // console.log(activity);
    const handleDelete = () => {
        ActivitiesService.deleteActivity(activity._id)
        .then(() => {
            removeActivity(activity._id);
        })
    }

    return (
        <>
            <h4>{activity.exercise.name}</h4>
            <button onClick={handleDelete}> 🗑 </button>
        </>
    )
}

export default CompletedActivity