use mat_tracker;
db.dropDatabase();

db.activities.insertMany([
    {
        exercise: {name: "Yoga", intensity: "moderate"},
        time: 30,
        day: "Monday"
    },

    {
        exercise: 
        {
            name: "Running",
            intensity: "vigorous"
        },
        time: 30,
        day: "Monday"
    },

    {
        exercise: 
        {
            name: "Pilates",
            intensity: "moderate"
        },
        time: 60,
        day: "Tuesday"
    },

    {
        exercise: 
        {
            name: "Swimming",
            intensity: "vigorous"
        },
        time: 60,
        day: "Tuesday"
    },

    {
        exercise: 
        {
            name: "Martial Arts",
            intensity: "vigorous"
        },
        time: 60,
        day: "Wednesday"
    },

    {
        exercise: 
        {
            name: "Walking",
            intensity: "moderate"
        },
        time: 45,
        day: "Friday"
    },
]);
