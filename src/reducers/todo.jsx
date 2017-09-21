const actions = {
    ADD_NOTE: "ADD_NOTE",
    EDIT_NOTE: "EDIT_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
    COLOR_CHANGE: "COLOR_CHANGE",
    COLORPICKER_CLOSE: "COLORPICKER_CLOSE",
    COLORPICKER_CLICK: "COLORPICKER_CLICK"
}

const initStore = {
    notes: []
};

export default function todo(state = initStore, action = {}) {

    switch (action.type) {
        case actions.ADD_NOTE: {
            const {notes} = initStore;
            return {
                notes: [
                    ...notes,
                    action.payload
                ]
            }
        }
        case action.DELETE_NOTE: {
            return {
                notes: [
                    ...action.slice(0, action.index),
                    ...action.slice(action.index + 1)
                ]
            }
        }
        case action.COLOR_CHANGE: {
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
        case action.COLORPICKER_CLOSE: {
            const {addForm} = state;
            return {
                addForm: [
                    ...addForm.slice(0, action.index),
                    {
                        displayColorPicker: false
                    },
                    ...addForm.slice(action.index+1),
                ]
            }
        }
        case action.COLORPICKER_CLICK: {
            const {addForm} = state;
            return {
                addForm: [
                    ...addForm.slice(0, action.index),
                    {
                        displayColorPicker: !notes[action.index].displayColorPicker
                    },
                    ...notes.slice(action.index + 1)
                ]
            }
        }
        default:
            return state
    }
}