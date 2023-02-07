const baseURL = 'http://localhost:9000/api/activities/'

//This is our fetching all seeds from the db
const ActivitiesService = {
    getActivities() {
        return fetch(baseURL)
            .then(res => res.json())
    },

    deleteActivity(id) {
        return fetch(baseURL + id, {
            method: "DELETE"
        })
    },

    postActivity(payload) {
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    }
}

export default ActivitiesService