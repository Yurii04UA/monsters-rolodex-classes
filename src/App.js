import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      defaultMonsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          monsters: res,
          defaultMonsters: res,
          filteredMonsters: res,
        })
      );
  }

  // onChangeInput = (e) =>
  // this.setState({
  //   monsters: this.state.defaultMonsters.filter((el) =>
  //     el.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   ),
  // })
  onChangeInput = (e) =>
    this.setState({
      filteredMonsters: this.state.monsters.filter((el) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });

  render() {
    const searchBoxProps = {
      onChangeHandler: this.onChangeInput,
      placeholder: "Search monsters",
      className: "monsters-search-box",
    };
    return (
      <div className="App">
        {/* <input onChange={this.onChangeInput} placeholder="Search monsters" /> */}
        <SearchBox {...searchBoxProps} />
        {/* {this.state.filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))} */}
        <CardList monsters={this.state.filteredMonsters} />
      </div>
    );
  }
}

export default App;
