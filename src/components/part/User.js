import React, { Component } from 'react';

class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
        }
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    toggleState(){
        const { isEditing } = this.state;
        this.setState({
          isEditing:!isEditing
        })
      }

    //   updateItem(e){
    //     e.prefentDefault()
    //     this.props.edit(this.props.key, e.target.value)
    //     this.toggleState();
    // }
    updateItem(evt){  
        // console.log(evt.target.name)
        evt.preventDefault();
        this.props.edit(this.props.index, this.input.value)
        this.toggleState();
    }

    renderItem(){
            return (
                <div>
                    {this.props.detail.first_name}
                    <button onClick={this.props.delUser.bind(this, this.props.detail.id)}> x </button>
                    <button onClick={this.toggleState}> edit </button>
                </div>
            )
      }

      renderForm(){
        return (
            <form onSubmit={this.updateItem}>
                <input type="text" name="first_name" ref={(value) => {this.input = value}} defaultValue={this.props.detail.first_name} />
                <button type="submit">Update</button>  
            </form>
        )
      }

    render() {
        const { isEditing } = this.state;
        return (
            <section>
            {
            isEditing ? this.renderForm() :  this.renderItem()
            }
            
            </section> 
            )
    }
}

export default User;