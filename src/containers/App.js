import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    
    constructor(){
        super()
        this.state ={
            robotz: [],
            searchfield: ''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robotz: users}));
}
onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
}

render() {
    const {robotz,searchfield} = this.state;
    const filteredRobots = robotz.filter(robot => {
        return robot.name.toLowerCase()
        .includes(searchfield.toLowerCase());
    })
       return !robotz.length ?
          <h1>Loading...</h1> :
        (
                <div className="tc">
                    <h1 className="f2">RoboContacts</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
                );
            }
        }
    
    

export default App;