import React, { Component } from 'react';
import User from '../part/User'

class ListUser extends Component {
    render() {
        return this.props.users.map((user, index) => (
            <User key={index} index={index} detail={user} delUser={this.props.delUser} edit={this.props.edit}/>
            // <div key={user.id}>
            //     {user.first_name}
            //     <span onClick={this.props.delUser.bind(this, user.id)}> x </span>
            //     <span onClick={this.props.edit.bind(this, user.id)}> edit </span>
            // </div>
        ));
    }
}

export default ListUser;