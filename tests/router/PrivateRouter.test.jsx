import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRouter } from "../../src/router";

describe('<PrivateRouter /> tests', ()=>{
    test('Must have called localStorage.setItem()',()=>{
        // added geyItem to test localstorage
        Storage.prototype.getItem = jest.fn();

        const contextValue =  
        {
            authState: {
                    logged: true,
                    user: {
                        id: 'ABC',
                        name: 'Joy',
                    }
                }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PrivateRouter>
                    <h1>Ruta privada</h1>
                </PrivateRouter>
            </AuthContext.Provider>
        );

        expect(localStorage.getItem).toHaveBeenCalled();
    });
});