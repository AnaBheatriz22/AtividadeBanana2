import BananasDePijamas from "./BananasDePijamas"

function BananaChines() {

    const url = "https://content.imageresizer.com/images/memes/Banana-fort-meme-6.jpg"
    return (
        <div>
            <h2> Banana Chines:</h2>
            <img src={url} alt="Banana Chines" />
            <BananasDePijamas/>
        </div>
    )
}

export default BananaChines