import Capuchino from "./Capuchino"

function Bananini() {

    const url = "https://static.wikitide.net/italianbrainrotwiki/thumb/5/50/Chimpanzini_Bananino.png/300px-Chimpanzini_Bananino.png"
    return(
        <div>
            <h2>Chimpanzini Bananini:</h2>
            <img src={url} alt="chimpanzini bananini" />
            <Capuchino/>
        </div>
    )
}

export default Bananini