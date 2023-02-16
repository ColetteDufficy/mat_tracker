import DayTotal from "../components/DayTotal";
import { useEffect, useState } from 'react';
import ActivitiesService from "../services/ActivityService";
import ActivityForm from "../components/ActivityForm";


// const to be created
const ActivitiesWeekContainer = () => {

    // setting the initial state of 'activities'. 
    // Any other states can be listed here too
    const [activities, setActivities] = useState([]);


    // useEFFECT 
    // useEffect is a React Hook that lets you synchronize a component with an external system.
    // useEffect(setup, dependencies?)

    // call useEffect on initial rendering of a page or on state changes, to stop it relaoding repeatedly. This useEffect is laoding al activities, and then remeber the empty array!!!
    // What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
    useEffect(() => {
        ActivitiesService.getActivities()
            .then(activities => setActivities(activities))
    },
        []);



    // ADD NEW ACTIVITY TO THE DB
    // create a function, and take in an rgument of activity
    // use the useState hook to update the statem using the spread operator and add the new activity - syntax 
    // hook( [...spreadOperator + current_state, object_to_be_added_to_the_current_state] )
    // addActivity will passed down as a prop
    const addActivity = (activity) => {
        setActivities([...activities, activity])
    };


    // REMOVES ACTIVITY BY ID 
    // create the function, taking inthe argument of an id
    // create a const array called activitiesToKeep, and filter it - to only keep the ids of activites that DONT match the identitfied id
    // chnage the state by using useHook on the const activitiesToKeep
    const removeActivity = (id) => {
        const activitiesToKeep = activities.filter(activity => activity._id !== id)
        setActivities(activitiesToKeep);
    };



    // EDIT ACTIVITY BY ID
    // create a function that takes in a specific activity that needs to be updated 
    const editActivity = (activity) => {
        // **************************** did i need to map the activities so that i didnt mutate the state? i need this explained to me *********************************
        const mappedIds = activities.map((activityToBeMapped) => activityToBeMapped._id)
        // create a new const, identifying the index position of the activity im rying to update - this will be constantly ch naging because the state will be constantly chnaging. 
        // ##### string.indexOf(searchvalue, start) ##########
        //indexOf(searchElement)
        // array.indexOf(searchElement, fromIndex)
        const indexOfActivityToBeUpdated = mappedIds.indexOf(activity._id)
        // craete a copy of the array so that i dont mutate the state
        const copyOfActivities = [...activities]
        // splice that array 
        // array.spilce(idenitfy_the_item_to_be_updated, how many instances, and what to update it with)
        copyOfActivities.splice(indexOfActivityToBeUpdated, 1, activity)
        // update using useState
        setActivities(copyOfActivities)
    }
    // pseudocode:
    // create the function called editActivity, that takes in the activity
    // the only unique element that can identfy the activity to be edited is its database id - after all, the activity is already in the db
    // create an array of just ids called mappedIds, based on the current array of ALL activities
    // get the index number of the chosen activity that i want to edit
    // make a copy of the current state
    // splice it, so that its updated with the updated activity






    return (
        <>
            <ActivityForm addActivity={addActivity} />
            <h2>List of activities</h2>
            <DayTotal editActivity={editActivity} activities={activities} removeActivity={removeActivity} />
        </>
    );
}

export default ActivitiesWeekContainer;