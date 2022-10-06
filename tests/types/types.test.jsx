import { types } from "../../src/types";

describe('Testing types', ()=>{
    test('Must use specified types', ()=>{
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })
});