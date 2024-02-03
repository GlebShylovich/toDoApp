import React from "react";
import './App.css'
import Item from "./Components/Item/Item";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      ageInput: '',
      statusInput: '',
      filterValue: '',
      items: []
    };
  }
  renderItem = () => {
    const newItem = {
      id: Date.now(),
      name: this.state.nameInput,
      age: this.state.ageInput,
      status: this.state.statusInput
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      nameInput: '',
      ageInput: '',
      statusInput: '',
      filterValue: ''
    }));
  };

  deleteItem = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  }
  addName = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.nameInput = e.target.value;
    this.setState(copyState);
  }
  addAge = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.ageInput = e.target.value;
    this.setState(copyState);
  }
  addStatus = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.statusInput = e.target.value;
    this.setState(copyState);
  }
  filterItems = () => {
    const filteredItems = this.state.items.filter(item => item.status.includes(this.state.filterValue));
    this.setState({ items: filteredItems });
  }
  filterLogic = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.filterValue = e.target.value;
    this.setState(copyState);
  }
  render() {
    return (
      <>
        <div className="form">
          <h2>To do app</h2>
          <input value={this.state.nameInput} onChange={this.addName} />
          <input value={this.state.ageInput} onChange={this.addAge} />
          <select value={this.state.statusInput} onChange={this.addStatus}>
            <option value="" disabled>Status</option>
            <option value="200">200</option>
            <option value="404">404</option>
            <option value="600">600</option>
          </select>
          <button onClick={this.renderItem}>Submit</button>
        </div>
        <div className="filter">
          <h2>Filter</h2>
          <select value={this.state.filterValue} onChange={this.filterLogic}>
            <option value="200">200</option>
            <option value="404">404</option>
            <option value="600">600</option>
          </select>
          <button onClick={this.filterItems}>Filter</button>
        </div>
        <h1>Notes</h1>
        <div className="notes">
          {
            this.state.items.map((item, index) => (
              <Item key={index} item={item} content={this.state} deleteItem={this.deleteItem} />
            ))
          }
        </div>
      </>
    )
  }
}
export default App;