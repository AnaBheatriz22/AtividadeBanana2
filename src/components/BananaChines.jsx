import BananaFilho from "./BananaFilho"

function BananaChines() {

    const url = "https://content.imageresizer.com/images/memes/Banana-fort-meme-6.jpg"
    return (
        <div>
            <h2> Banana Chinês:</h2>
            <img src={url} alt="Banana Chines" width={400}/>
            <BananaFilho/>
        </div>
    )
}

export default BananaChines