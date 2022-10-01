import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const heroes = useMemo(()=>{
    return getHeroesByName(searchText);
  },[location]);

  const onSubmitSearch = (event)=>{
    event.preventDefault();
    
    navigate(`?q=${searchText}`);
  }

  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <form onSubmit={onSubmitSearch}>
              <input
                autoComplete="off"
                className="form-control"
                name="searchText"
                placeholder="Search hero..."
                type="text"
                value={searchText}
                onChange={onInputChange}
              />

              <button
                className="btn btn-outline-primary mt-2"
              >
                Search
              </button>
            </form>

          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
              !q && (
                <div className="alert alert-primary">
                  Search a hero
                </div>
  
              )
            }

            {
              (q && heroes.length===0) && (
                <div className="alert alert-danger">
                  There is no hero <strong>{ q }</strong>
                </div>
              )
            }

            {
              (q && heroes.length > 0) && (
                  heroes.map(hero=>(
                      <HeroCard
                          key={hero.id}
                          {...hero}
                      />
                  ))
              )
            }

          </div>

        </div>

    </>
  )
}
