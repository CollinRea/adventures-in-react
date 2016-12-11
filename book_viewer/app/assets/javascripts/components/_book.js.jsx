var Book = React.createClass({
  getInitialState() {
    return {editable: false}
  },

  handleEdit() {
    if(this.state.editable) {
      var name = this.refs.name.value;
      var id = this.props.book.id
      var content = this.refs.content.value;
      var book = {id: id, name: name, content: content}
      this.props.handleUpdate(book);
    }
    this.setState({ editable: !this.state.editable })
  },

  render() {
    var name = this.state.editable ? <input type="text"  ref="name" defaultValue={this.props.book.name} /> : <h3>{this.props.book.name}</h3>
    var content = this.state.editable ? <input type="text" ref="content" defaultValue={this.props.book.content} /> : <p>{this.props.book.content}</p>
    return (
      <div>
        {name}
        {content}
        <button onClick={this.props.handleDelete}> Delete </button>
        <button onClick={this.handleEdit}> {this.state.editable ? "Submit" : "Edit" } </button>
      </div>
    )
  }
});