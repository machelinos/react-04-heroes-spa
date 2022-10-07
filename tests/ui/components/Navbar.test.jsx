import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";
import { Navbar } from "../../../src/ui/components";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate,
})); 

describe('<Navbar /> tests', ()=>{

    const contextValue = {
        authState: {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Joy'
            }
        },
        logout: jest.fn()
    }

    

    test('Must render user name in navbar', ()=>{
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByLabelText('username').innerHTML).toBe(contextValue.authState.user.name);

    });

    test('Must call onLogout and Navigate when click on Logout button', ()=>{
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        fireEvent.click(screen.getByLabelText('logout'));
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {
            replace: true
        })

    });

});