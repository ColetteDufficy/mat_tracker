import DayTotal from "../components/DayTotal";
import { useEffect, useState } from 'react';
import ActivitiesService from "../services/ActivityService";
import ActivityForm from "../components/ActivityForm";

const ActivitiesWeekContainer = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        ActivitiesService.getActivities()
            .then(activities => setActivities(activities))
    },
        []);

    //Removes activity by ID 
    const removeActivity = (id) => {
        const activitiesToKeep = activities.filter(activity => activity._id !== id)
        setActivities(activitiesToKeep);
    };

    const editActivity = (activity) => {
        const mappedIds = activities.map((activityToBeMapped)=> activityToBeMapped._id )
        const indexOfActivityToBeUpdated = mappedIds.indexOf(activity._id)

        const copyOfActivities = [... activities]
        copyOfActivities.splice(indexOfActivityToBeUpdated, 1, activity)

        setActivities(copyOfActivities)

    }
    //Add activity to the DB
    const addActivity = (activity) => {
        setActivities([...activities, activity])
    };

    return (
        <>
            <ActivityForm addActivity={addActivity} />
            <h2>List of activities</h2>
            <DayTotal editActivity={editActivity} activities={activities} removeActivity={removeActivity} />
        </>
    );
}

export default ActivitiesWeekContainer;