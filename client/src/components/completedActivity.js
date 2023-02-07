import { deleteActivity } from "./services/ActivityService";

const CompletedActivity = ({ activity, removeActivity }) => {
    console.log(activity);
    const handleDelete = () => {
        deleteActivity(activity._id)
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


// import { deleteSighting } from "./SightingService"

// const SightingCard = ({ sighting, removeSighting }) => {

//     console.log(sighting);
//     const handleDelete = () => {
//         deleteSighting(sighting._id).then(() => {
//             removeSighting(sighting._id);
//         })
//     }
//     return (
//         <>
//             <h1>{sighting.species}</h1>
//             <p>Location: {sighting.location}</p>
//             <p>Date: {sighting.date}</p>
//             <button onClick={handleDelete}> 🗑 </button>
//             <hr></hr>
//         </>
//     )
// }

// export default SightingCard;