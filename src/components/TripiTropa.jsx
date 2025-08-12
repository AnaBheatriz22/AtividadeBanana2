import Bananini from "./Bananini"
function TripiTropa () {

    const url = "https://static.wikitide.net/italianbrainrotwiki/thumb/9/9e/Trippi_Troppi.webp/299px-Trippi_Troppi.webp.png"
    return(
        <div>
            <h2>Tripi Tropa:</h2>
            <img src={url} alt="tripi tropa" />
            <Bananini/>
        </div>
    )
}

export default TripiTropa