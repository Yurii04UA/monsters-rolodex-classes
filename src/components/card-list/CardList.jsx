import { Component } from "react";
import "./card-list.css";
import Card from "../card/Card";

class CardList extends Component {
  render() {
    // <h1 key={monster.id}>{monster.name}</h1>
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // const { name, id, email } = monster;
          return <Card key={monster.id} {...monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
