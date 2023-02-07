import DayTotal from "../components/DayTotal";
import { useEffect, useState } from 'react';
import ActivitiesService from "../services/ActivityService";

const ActivitiesWeekContainer = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        ActivitiesService.getActivities()
            .then(activities => setActivities(activities))
    },
        []);

    //Removes activity be ID 
    const removeActivity = (id) => {
        const activitiesToKeep = activities.filter(activity => activity._id !== id)
        setActivities(activitiesToKeep);
    };

    return (
        <>
            <DayTotal activities={activities} removeActivity={removeActivity} />
        </>
    );
}

export default ActivitiesWeekContainer;