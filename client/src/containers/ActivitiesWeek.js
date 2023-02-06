import DayTotal from "../components/DayTotal";
import { useEffect, useState } from 'react';
import ActivitiesService from "../services/ActivityService";

const ActivitiesWeekContainer = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        ActivitiesService.getActivities()
            .then(activities => setActivities(activities))
    },
        [])

    return (
        <>
            <DayTotal activities={activities} /> 
        </>
    )
}

export default ActivitiesWeekContainer