const baseURL = 'http://localhost:9000/api/activities/'

//This is our fetching all seeds from the db
const ActivityService = {
    getActivity() {
    return fetch(baseURL)
    .then(res => res.json()) 
}
}
export default ActivityService
