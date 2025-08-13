import Felca from "./Felca"

function BananaAleatorio() {

    const url = "https://content.imageresizer.com/images/memes/Banana-fort-meme-6.jpg"
    return (
        <div>
            <h2> Banana Aleatório</h2>
            <img src={url} alt="Banana Aleatorio" />
            <Felca/>
        </div>
    )
}

export default BananaAleatorio