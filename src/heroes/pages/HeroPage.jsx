import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const hero = useMemo(()=>getHeroById(id),[id]);

  const onNavigateBack = ()=>{
    navigate(-1, {
      replace: true
    })
  }

  if(!hero){
    return (
      <>
        <Navigate to="/marvel" />
      </>
    )
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft animate__fast">
        <img
          className="img-thumbnail"
          alt={hero.superhero}
          src={`/assets/heroes/${id}.jpg`}
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInRight animate__fast">
        <h3>{hero.superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {hero.publisher}
          </li>
          <li className="list-group-item">
            <strong>First appearanc:</strong> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ hero.characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >Back</button>

      </div>
    </div>
  )
}
