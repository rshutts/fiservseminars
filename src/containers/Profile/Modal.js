import Login from "./UpdateForm";

class PostsList extends Component {
  state = {
    modalOpen: false,
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
       <div>
          <button onClick={this.handleOpen}>Login</button>
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
          >
            <Modal.Header>Login</Modal.Header>
            <Modal.Content>
              <Login handleClose={this.handleClose} />
            </Modal.Content>
          </Modal>
        </div>
     )
   }
}