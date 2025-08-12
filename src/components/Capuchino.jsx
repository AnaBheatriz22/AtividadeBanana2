import DindindinDum from "./Dindindin"

function Capuchino () {

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FNqvlmK3PNGIXiyJJm03t957UxZ7HMAAqWs9XP-8dsg8Xxe_i29x8XarImtWOnOJ-Ho&usqp=CAU"
    return(
        <div>
            <h2>Capuchino Assasino:</h2>
            <img src={url} alt="capuchino assasino" />
            <DindindinDum/>
        </div>
    )
}

export default Capuchino