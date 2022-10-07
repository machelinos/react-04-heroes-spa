import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Search page tests', ()=>{
    test('must load initial default data', ()=>{
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });
});