export const reducer = (state, action) => {
    switch (action) {
        case 'sunrise':
            return state + ' sunrise';
        case 'daytime':
            return state + ' day-time';
        case 'sunset':
            return state + ' sunset';
        default:
            return state;
    }
};

