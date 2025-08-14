import BananasDePijamas from "./BananasDePijamas"
function Felca() {

    const url ="https://uploads.metroimg.com/wp-content/uploads/2023/09/24113421/Felca-NPC.jpg"
    return(
    <div>
        <h2>Felca Banana npc</h2>
        <img src={url} alt="Felca Banana npc" width={400}/>
        <BananasDePijamas/>
    </div>
    )
}

export default Felca