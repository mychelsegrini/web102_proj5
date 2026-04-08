const Card = ({prop, text}) => {
    return (
        <div className="card">
            <h2>{text}</h2>
            <h3>{prop}</h3>
        </ div>
    )
}

export default Card;