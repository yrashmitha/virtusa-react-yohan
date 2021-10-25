import React, { Component } from "react";
import { UsePlaceholderProps } from "react-bootstrap/esm/usePlaceholder";
import { ContactForm } from "./components/ContactForm";
import { UserList } from "./components/UserList";
import { User } from "./Layout";

interface Props {}
interface State {
  users: Array<User>;
  name: string;
}

export default class Home extends Component<Props, State> {
  state = {
    users: [],
    name: "",
  };

  addUser = (params: User) => {
    this.setState((prevState) => ({
      users: [...prevState.users, params],
    }));
  };

  onDeleteHandler = (index: number) => {
    let old = this.state.users;
    old.splice(index, 1);
    this.setState({
      users: [...old],
    });
  };

  nthElement = (arr: any, n = 0) =>
    (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

  onUpdateHandler = (index: number, user: User) => {
    let old: Array<User> = this.state.users;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        old[index] = user;
      }
    }
    this.setState({
      users: [...old],
    });
    console.log(index, user);
  };

  render() {
    return (
      <div>
        <ContactForm clickHandler={this.addUser} />
        <UserList
          users={this.state.users}
          onDelete={this.onDeleteHandler}
          onUpdate={this.onUpdateHandler}
        />
      </div>
    );
  }
}
