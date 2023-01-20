import {bool} from "prop-types";
import {throws} from "assert";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';

export type StateType={
    collapsed: boolean
}
export const reducer = (state: StateType , action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:

            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('Bad')
    }

}