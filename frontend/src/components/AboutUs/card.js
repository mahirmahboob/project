function Card(props) {
    return (
        <div className="about-cards row item">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Card
