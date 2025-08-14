import GatoBanana from "./GatoBanana"

function bananafrita () {

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jrMwa-Tkg5BdP_Ebd1NbqFFuwA9empHj4w&s"
    return(
        <div>
            <h2>Banana Frita</h2>
            <img src={url} alt="Banana Frita" width={400} />
            <GatoBanana/>
        </div>
    )
}

export default bananafrita