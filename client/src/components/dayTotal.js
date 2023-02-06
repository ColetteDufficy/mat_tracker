import DayName from "./DayName";
import CompletedActivity from "./CompletedActivity";

const DayTotal = ({ activities }) => {
    return (
        <div>
            {activities.map(activity => {
                return (
                    <>
                        <DayName activity={activity} key={activity._id} />
                        <CompletedActivity activity={activity} key={activity._id} />
                    </>
                )
            })
            }
        </div>
    )
}

export default DayTotal