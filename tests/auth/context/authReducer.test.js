import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/types";

describe('authReducer tests', ()=>{
    const initialState = {
        logged: false
    }

    test('Must return the default initial state', ()=>{
        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Must login and set user', ()=>{
        const loginAction = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Joy'
            }
        }

        const newState = authReducer(initialState,loginAction);
        expect(newState).toEqual({
            logged: true,
            user: loginAction.payload
        })

    });

    test('Must logout and delete user', ()=>{
        const logoutAction = {
            type: types.logout
        }

        const newState = authReducer({
            logged: true,
            user: {
                id: 'ABC',
                name: 'Joy'
            }
        }, logoutAction);

        expect(newState).toEqual(initialState);
    });
});