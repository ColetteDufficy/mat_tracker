import DayName from "./DayName";
import CompletedActivity from "./CompletedActivity";

const DayTotal = ({ activities, removeActivity }) => {
    return (
        <div>
            {activities.map(activity => {
                return (
                    <>
                        <DayName activity={activity} key={activity._id} />
                        <CompletedActivity activity={activity} key={activity._id} removeActivity={removeActivity} />
                    </>
                )
            })
            }
        </div>
    )
}

export default DayTotal