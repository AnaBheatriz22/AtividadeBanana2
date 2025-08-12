import Lirilila from "./Lirilila"

function Bombardino() {

    const url = "https://i.pinimg.com/236x/5f/9f/8b/5f9f8b58ce45ff9e83888eefad39a4a2.jpg"
    return(
        <div>
        <h2>Bombardino Crocodilo:</h2>
        <img src={url} alt="bombardino crocodilo" />
        <Lirilila/>
        </div>
    )
}

export default Bombardino