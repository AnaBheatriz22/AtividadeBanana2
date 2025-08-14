import Felca from "./Felca"

function GatoBanana() {

    const url = "https://i.pinimg.com/736x/21/74/01/217401dd349c077cdd3e71f61fba3a59.jpg"
    return(
        <div>
        <h2>Gato Banana</h2>
        <img src={url} alt="Gato Banana" width={400} />
        <Felca/>
        </div>
    )
}

export default GatoBanana