const Card = (props) => {
    return (<div className="card" style={{ "width": "18rem" }}>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
            <a href="#" className="btn btn-primary">{props.linkText}</a>
        </div>
    </div>);
}

export default Card;