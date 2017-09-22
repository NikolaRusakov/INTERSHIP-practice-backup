const actions = {
    ADD_NOTE: "ADD_NOTE",
    EDIT_NOTE: "EDIT_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
    COLOR_CHANGE: "COLOR_CHANGE",
}

const initStore = {
    notes: []
};

export default function todo(state = initStore, action = {}) {

    switch (action.type) {
        case actions.ADD_NOTE: {
            const {notes} = state;
            return {
                notes: [
                    ...notes,
                    action.payload
                ]
            }
        }
        case actions.DELETE_NOTE: {
            const {notes} = state;
            return {
                notes: [
                    ...notes.slice(0, action.index),
                    ...notes.slice(action.index+1)
                ]
            }
        }
        case actions.EDIT_NOTE: {
            const {notes} = state;
            return {
                notes: [
                    ...notes.slice(0, action.index),
                    ...notes[action.index],
                    ...notes.slice(action.index+1)
                ]
            }
        }
        case actions.COLOR_CHANGE: {
            const {addForm} = state;
            return {
                addForm: [
                    ...addForm.slice(0, action.index), {
                        color: action.color
                    },
                    ...addForm.slice(action.index + 1)
                ]
            }
        }

        default:
            return state
    }
}