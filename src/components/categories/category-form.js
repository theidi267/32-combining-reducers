import React from 'react';

class CategoryForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = this.props.category || {title:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handler( Object.assign({}, this.state) );
    if(! this.state.id ) {
      this.setState({title: ''});
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {

    return (
      <form className="categoryForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="New Category Name"
          onChange={this.handleChange}
        />
      </form>
    );
  }

}

export default CategoryForm;