import Bananafrita from "./bananafrita"

function Joao() {

    const url = "https://pbs.twimg.com/media/Eaz1_kNXgAAnRNx.jpg"
    return(
        <div>
            <h2>Joao Banana</h2>
            <img src={url} alt="joaobanana" width={400} />
            <Bananafrita/>
        </div>
    )
}

export default Joao