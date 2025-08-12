import TripiTropa from "./TripiTropa"

function Lirilila() {

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxR5R4dMh1F-FRYVJP9DqodSJ_d57aw2d0RQ&s"
    return (
        <div>
            <h2>Lirilí Laríla:</h2>
            <img src={url} alt="lirila" />
            <TripiTropa/>
        </div>
    )
}

export default Lirilila