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
            body: JSON.stringify(payload), // im posting BACK to the dsb, so i want to convert the JS to JSON
            headers: { 'Content-Type': 'application/json' } // The media type of any resource is declared in the Content-Type property of the request header (on the client, when making a request to the server) or in the response header (on the server, when sending a response
            // The Correct Content-Type for JSON
            // JSON has to be correctly interpreted by the browser to be used appropriately. text/plain was typically used for JSON, but according to IANA, the official MIME type for JSON is application/json.

            // This means when you're sending JSON to the server or receiving JSON from the server, you should always declare the Content-Type of the header as application/json as this is the standard that the client and server understand.
            // https://www.freecodecamp.org/news/what-is-the-correct-content-type-for-json-request-header-mime-type-explained/
        })
            .then(res => res.json())
    },



    //Added a put function to the update button
    putActivity(payload, id) {
        return fetch(baseURL + `${id}`, { // this is essentially the same as the postActivity function, but it takes inthe specific id - how does it see this???
            method: "PUT",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    }
}

export default ActivitiesService