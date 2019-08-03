import React, { Component } from 'react';

class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    onChange = (e) => {
        // this.setState({[e.target.name] : e.target.value});
        // this.props.dataEdit.map((dataEdit) => (
        //     this.setState({ 
        //         first_name : e.target.value,
        //     })
        // )
        
        console.log(this.state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.edit(this.state)
    }
    render() {
        return (
            <div>
                <input type="text" name="first_name" value={this.props.dataEdit.first_name} onChange={this.onChange} placeholder="Your Name"/>
                <input type="submit" value="submit" className="btn"/>
            </div>
        );
        
        // (
        //     <form onSubmit={this.onSubmit}>
        //         <input type="text" name="first_name" value={this.props.dataEdit} onChange={this.onChange} placeholder="Your Name"/>
        //         <input type="submit" value="submit" className="btn"/>
        //     </form>
        // )
    }
}

export default Edit;