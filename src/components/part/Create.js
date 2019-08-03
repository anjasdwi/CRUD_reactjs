import React, { Component } from 'react';
import Button from 'antd/es/button';

class Create extends Component {
    state= {
        name: '',
        job:'',
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
        console.log(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.create(this.state)
    }
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="name" value={this.state.value} onChange={this.onChange} placeholder="Your Name"/>
                <input type="text" name="job" value={this.state.value} onChange={this.onChange} placeholder="Job"/>
                <input type="submit" value="submit" className="btn"/>
            </form>
        )
    }
}

export default Create;