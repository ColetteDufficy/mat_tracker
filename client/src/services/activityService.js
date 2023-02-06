const baseURL = 'http://localhost:9000/api/activities/'

//This is our fetching all seeds from the db
const ActivitiesService = {
    getActivities() {
        return fetch(baseURL)
            .then(res => res.json())
    }
}
export default ActivitiesService
