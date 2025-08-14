import Joaozinho from "./Joaozinho"

function BananaAleatorio() {

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBIUVjXrqkzvh4XOCCbQ9Ub9twgQ58Wqg5w&s"
    return (
        <div>
            <h2> Banana Aleatório</h2>
            <img src={url} alt="Banana Aleatorio" width={400}/>
            <Joaozinho/>
        </div>
    )
}

export default BananaAleatorio