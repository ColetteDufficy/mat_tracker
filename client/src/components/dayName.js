const DayName = ({ activity }) => {
    //This console.log will show the activity in the console.log window - more for testing
    console.log(activity)

    return (
        <>
            <p>{activity.day}</p>
        </>
    )
}

export default DayName
