import { Component } from 'react';
import { data } from '../data/users';
import { UsersList } from './UsersList/UsersList';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: data,
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(({ id }) => id !== userId),
    }));
  };

  addUser = userData => {
    const newUser = {
      id: nanoid(),
      ...userData,
    };

    this.setState(prevState => ({ users: [...prevState.users, newUser] }));
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <UsersList users={users} deleteUser={this.deleteUser} />
        <AddUserForm addUser={this.addUser} />
      </div>
    );
  }
}
