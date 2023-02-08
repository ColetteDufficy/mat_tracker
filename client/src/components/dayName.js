const DayName = ({ activity }) => {
    //This console.log will show the activity in the console.log window - more for testing
    console.log(activity)

    return (
        <>
            <h2>{activity.day}</h2>
        </>
    )
}

export default DayName
