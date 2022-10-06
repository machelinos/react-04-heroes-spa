import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router";

describe('<PublicRoute /> tests', ()=>{

    test('Must render children when not logged', ()=>{
        const contextValue = {
            authState: {
                logged: false
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Testing children</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Testing children')).toBeTruthy();
    });

    test('Must Navigate when loggged', ()=>{
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
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <h1>Testing children</h1>
                            </PublicRoute>
                        } />
                        <Route path="/" element={<h1>Home route</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>

        )

        expect(screen.getByText('Home route')).toBeTruthy();

    });
});