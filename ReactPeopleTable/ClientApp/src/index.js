import React from 'react';
import { render } from 'react-dom';
import HeaderRow from './HeaderRow';
import PeopleTable from './PeopleTable';
import axios from 'axios';

class App extends React.Component {

    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        addAsUpperCase: false
    }

    componentDidMount = () => {
        axios.get('/api/sample/person').then(({ data }) => {
            this.state.people.push(data);
            this.setState({ people: this.state.people });
        });
    }

    onInputChange = e => {
        const { person } = this.state;
        person[e.target.name] = e.target.value;
        this.setState({ person });
    }

    onAddClick = () => {
        const { people } = this.state;
        const copy = [...people];
        const { person } = this.state;
        if (this.state.addAsUpperCase) {
            person.firstName = person.firstName.toUpperCase();
            person.lastName = person.lastName.toUpperCase();
        }
        copy.push(this.state.person);
        this.setState({
            people: copy, person: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
    }

    onClearClick = () => {
        this.setState({ people: [], addAsUpperCase: false });
    }

    onDeleteClick = index => {
        console.log(index);
        const copy = [...this.state.people];
        copy.splice(index, 1);
        this.setState({ people: copy });
    }

    onUpperCaseChanged = val => {
        this.setState({ addAsUpperCase: val });
    }

    onAddFake = () => {
        //axios.get('/api/sample/personage', { params: { min: 10, max: 15 } }).then(({ data }) => {
        //    this.state.people.push(data);
        //    this.setState({ people: this.state.people });
        //});
        axios.post('/api/sample/personage', { min: 10, max: 15 }).then(({ data }) => {
            this.state.people.push(data);
            this.setState({ people: this.state.people });
        });
    }

    render() {
        let table;
        if (this.state.people.length) {
            table = <PeopleTable onDeleteClick={this.onDeleteClick} people={this.state.people} />;
        } else {
            table = <h1>Loading....</h1>;
        }
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <button className="btn btn-success" onClick={this.onAddFake}>Add Fake From C#</button>
                <HeaderRow onInputChange={this.onInputChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    person={this.state.person}
                    addAsUpperCase={this.state.addAsUpperCase}
                    onUpperCaseChanged={this.onUpperCaseChanged}
                />
                {table}
            </div>);
    }
}

render(<App />, document.getElementById('root'));