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

    //Add activity to the DB
    const addActivity = (activity) => {
        setActivities([...activities, activity])
    };

    return (
        <>
            <ActivityForm addActivity={addActivity} />
            <h2>List of activities</h2>
            <DayTotal activities={activities} removeActivity={removeActivity} />
        </>
    );
}

export default ActivitiesWeekContainer;