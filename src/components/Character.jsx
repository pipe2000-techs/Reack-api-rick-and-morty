function Character({charecter}) {
    return(
        <div className="text-center p-5">
            <h2>{charecter.name}</h2>
            <img className="img-fluid rounded-pill" src={charecter.image} alt={charecter.name} />
            <p>Origin: {charecter.origin.name} <br />
                Status: {charecter.status}</p>
        </div>
    )
}

export default Character