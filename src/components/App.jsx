import { Component } from 'react';
import { data } from '../data/users';
import { UsersList } from './UsersList/UsersList';

export class App extends Component {
  state = {
    users: data,
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(({ id }) => id !== userId),
    }));
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <UsersList users={users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}
