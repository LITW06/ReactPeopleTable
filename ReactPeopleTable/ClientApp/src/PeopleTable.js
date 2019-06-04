import React from 'react';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    render() {
        return (
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.people.map((person, idx) => {
                        return (
                            <PersonRow index={idx} onDeleteClick={this.props.onDeleteClick} person={person} key={idx} />
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default PeopleTable;