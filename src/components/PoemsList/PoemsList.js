import PoemDetails from "../PoemDetails/PoemDetails";

import * as poemService from "../../services/poemService";

function PoemsList () {
    let list = poemService.getAll();
    let poemDetails = list.map((poemId) => (<PoemDetails key={poemId} id={poemId} excerptMode={true} />));
    return (
        <>
            {poemDetails}
        </>
    );
}

export default PoemsList;