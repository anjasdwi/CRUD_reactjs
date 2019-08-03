import React, { Component } from 'react'
import '../../App.css';
// import User from '../User'
import ListUsers from '../part/ListUsers'
import Create from '../part/Create'
import axios from 'axios'
import Pagination from '../part/Pagination';
import Edit from '../part/Edit'

export class Home extends Component {
  constructor(){
    super();  
    this.state  = {
        users: [],
        page:'1',
        per_page: '',
        total: '',
        total_pages: '',
        edit_form : false,
        edit_data : [],
      }
    this.edit = this.edit.bind(this);
  }
  
    componentDidMount(){
        this.getUsers(this.state.page)
    }

    delUser = (id) => {
      axios.delete(`https://reqres.in/api/users/${id}`).then(res =>  {
          this.setState({ users: [...this.state.users.filter(user => user.id !== id)]});
          console.log(res)
        })
    }

    createUser = (data={}) => {
      axios.post('https://reqres.in/api/users', data).then(res =>  {
            data = {
              avatar :'',
              email : '',
              first_name: res.data.name,
              id : res.data.id,
              last_name: res.data.name
            }
          this.setState({ users: [...this.state.users, data]});
          console.log(res)
        })
    }

    getUsers = (page) => {
      axios.get(`https://reqres.in/api/users?page=${page}`).then(res =>  {
          this.setState({
            users : res.data.data,
            page : res.data.page,
            per_page: res.data.per_page,
            total: res.data.total,
            total_pages: res.data.total_pages,
          });
          console.log(this.state)
      })
    }

    pagination(){
      var n = this.state.total_pages;
      var elements = [], i;
      for(i=1; i <= n; i++){
          // elements.push(<span onClick={this.getUsers.bind(this, i)}> {i} </span>);
          elements.push(<Pagination key={i} change={this.getUsers} page={i}/>);
      }
      return elements;
    }
    
    edit = (index, newValue) => {
      var users = this.state.users;
      var user = users[index];
      // console.log(user)
      user['first_name'] = newValue;
      // console.log(users)
      this.setState({
      users
      })
    }
  
    render() {
      return (
        <React.Fragment>
            <Create create={this.createUser} />
            <ListUsers users={this.state.users} delUser={this.delUser} edit={this.edit}/>
            {this.pagination()}
            {/* {this.state.edit_form && <Edit dataEdit={this.state.edit_data}/>} */}
        </React.Fragment>
      );
    }
    
  }
export default Home;