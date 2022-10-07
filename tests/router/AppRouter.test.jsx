import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router";

describe('<AppRouter /> tests', ()=>{
    test('Must render Login page when not logged in', ()=>{
        const contextValue = {
            authState: {
                logged: false
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect(screen.getByText('Login')).toBeTruthy();
    });

    test('Must render Marvel page when logged in', ()=>{
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: 'ABC',
                    name: 'Joy'
                }
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Marvel Page')).toBeTruthy();

    })
});