import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroItem } from "./"

export const HeroList = ({publisher}) => {

  const heroes = useMemo(()=>{
    return getHeroesByPublisher(publisher); 
  }, [publisher]); 
  
  return (
    <ul>
        {
            heroes.map(hero=>(
                <HeroItem
                    hero={hero}
                    key={hero.id}
                />
            ))
        }
    </ul>
  )
}
