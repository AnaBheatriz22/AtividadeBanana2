import Joao from "./Joao"

function bananafrita () {

    const url = "https://www.receitasdemae.com.br/wp-content/uploads/2013/05/banana-frita.jpg"
    return(
        <div>
            <h2>Banana Frita</h2>
            <img src={url} alt="Banana Frita" />
            <Joao/>
        </div>
    )
}

export default bananafrita