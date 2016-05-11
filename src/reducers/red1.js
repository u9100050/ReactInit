import {} from '';

const initialState = {
   elems: ''
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case '':
            return {...state, elems: ''};
        case '':
            return {...state, elems: ''};
        default:
            return state;
    }
}
