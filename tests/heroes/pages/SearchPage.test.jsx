import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate
}));
describe('Search page tests', ()=>{

    beforeEach(()=>jest.clearAllMocks());
    
    test('must load initial default data', ()=>{
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('must fill input with batman and must render batman card', ()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        expect(screen.getByRole('textbox').value).toBe('batman');
        expect(screen.queryByText('Search a hero')).toBeFalsy();
        expect(screen.queryByLabelText('noresults')).toBeFalsy();
        expect(screen.getByRole('img').src).toContain('assets/heroes/dc-batman.jpg');
    });

    test('Must render error block if no hero found (vatman123)', ()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=vatman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        expect(screen.queryByLabelText('noresults')).toBeTruthy();

    });

    test('Must call navigate to new page', ()=>{
        const searchQuery = 'superman';

        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        const submitBtn = screen.getByRole('button');
        fireEvent.change(input, {target: { value: searchQuery } });
        fireEvent.click(submitBtn);
        
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${searchQuery}`);

    });
});