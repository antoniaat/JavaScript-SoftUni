const eventModel = function () {

    const getAllEvents = function () {
        let url = `appdata/${storage.appKey}/events`;
        return requester.get(url);
    };

    const organizeEvent = function (params) {
        delete params.result;
        let url = `appdata/${storage.appKey}/events`;
        return requester.post(url, "", params);
    };

    const getAllEventsByOrganizer = function (username) {
        let url = `appdata/${storage.appKey}/events?query={"organizer": {"$eq": "${username}"}}`;
        return requester.get(url);
    };

    const eventDetails = function (id) {
        let url = `appdata/${storage.appKey}/events?query={"_id": {"$eq": "${id}"}}`;
        return requester.get(url);
    };

    const eventJoin = function (obj) {

        let filter = (kvp) => kvp !== '_id' && kvp !== '_acl' && kvp !== '_kmd';

        let data = Object.entries(obj).filter((kvp) => filter(kvp[0])).reduce((acc, curr) => {
            acc[curr[0]] = curr[1];
            return acc;
        }, {});

        let result =  {
            id: obj._id,
            data
        };
        console.log(result.data);
        result.data.peopleInterestedIn += 1;

        return eventEdit(result);
    };

    const eventEdit = function (res) {
        let url = `appdata/${storage.appKey}/events/${res.id}`;
        return requester.put(url, '', res.data)
    };

    const eventDelete = function (id) {
        let url = `appdata/${storage.appKey}/events/${id}`;
        return requester.del(url);
    };

    return {
        organizeEvent,
        getAllEvents,
        getAllEventsByOrganizer,
        eventDetails,
        eventEdit,
        eventDelete,
        eventJoin
    }
}();