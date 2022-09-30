import { HeroList } from "../components";
import { getHeroesByPublisher } from "../helpers"

export const DcPage = () => {

  return (
    <>
        <h1>DC Page</h1>
        <hr />

        <HeroList publisher={'DC Comics'} />
    </>
  )
}
