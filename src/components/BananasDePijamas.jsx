import BananaChines from "./BananaChines"
function BananasDePijamas () {

    const url = "https://i.ytimg.com/vi/JuP3nmylMlk/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGFogWShlMA8=&rs=AOn4CLBIB3mEhZL373OnIEfLJMXMM_2tXA"
    return(
        <div>
            <h2>Bananas De Pijamas</h2>
            <img src={url} alt="Bananas de pijamas" width={400}/>
            <BananaChines/>
        </div>
    )
}

export default BananasDePijamas