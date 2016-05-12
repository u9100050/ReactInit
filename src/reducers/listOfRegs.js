const initialState = {
    regions: [],
    visibleRegs: [],
    selectedReg: 'none',
    fetching: false,
    filterValue: ''
};

export default function listOfRegs(state = initialState, action) {
    switch (action.type) {
        case 'SET_REGIONS_REQUEST':
            return {...state, fetching: true};
        case 'SET_REGIONS_SUCCESS':
            return {...state, regions: action.payload, fetching: false};
        case 'SET_REGIONS_FAILURE':
            return {...state, fetching: false};
        case 'SET_FILTER':
            return {...state,regions: action.payload}
        default:
            return state;
    }
}
