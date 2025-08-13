import GatoBanana from "./GatoBanana"
function BananaFilho () {

    const url = "https://i.redd.it/yk3isdlpnmu91.jpg"
    return(
        <div>
            <h2>Banana Filho</h2>
            <img src={url} alt="Banana filho" width={400} />
            <GatoBanana/>
        </div>
    )
}

export default BananaFilho