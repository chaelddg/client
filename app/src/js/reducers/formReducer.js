export default function reducer(state={
    form_data: []
}, action) {

    switch (action.type) {
        case "FETCH_FORM_DATA": {
            return {...state, fetching: true}
        }
        case "SEND_FORM_DATA": {
            return {...state, fetching: false, error: action.payload}
        }
    }

    return state
}