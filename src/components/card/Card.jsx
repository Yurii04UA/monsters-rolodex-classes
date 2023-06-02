import { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="img"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
