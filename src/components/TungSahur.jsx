import Bombardino from "./Bombardino"

function TungSahur() {

    const url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAm4VPetm-KEooEQNAeYqLPUZAVvEm4HPHyw&s"
    return(
    <div>
        <h2>Tung Tung Tung Sahur:</h2>
        <img src={url} alt="tung tung sahur" />
        <Bombardino/>
    </div>
    )
}

export default TungSahur