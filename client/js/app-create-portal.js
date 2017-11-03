import * as React from 'react';
import * as ReactDOM from 'react-dom';

class ModalDialog extends React.Component {

  constructor(props) {
    super(props);

    this.screenBlockDiv = document.createElement('div');
    this.screenBlockDiv.classList.add('screen-block');
    this.modalDiv = document.createElement('div');
    this.modalDiv.classList.add('modal-dialog');
  }

  displayModal = () => {
    if (this.props.showModal) {
      document.body.appendChild(this.screenBlockDiv);
      document.body.appendChild(this.modalDiv);
    } else {
      this.screenBlockDiv.remove();
      this.modalDiv.remove();
    }
  }

  componentWillMount() {
    this.displayModal();
  }

  // componentWillUpdate - runs before props are updated
  // componentDidUpdate - runs after props are updated
  componentDidUpdate() {
    this.displayModal();
  }

  componentWillUnmount() {
    this.screenBlockDiv.remove();
    this.screenBlockDiv = null;
    this.modalDiv.remove();
    this.modalDiv = null;
  }

  render() {
    console.log('render modal dialog: show modal = ', this.props.showModal);
    return ReactDOM.createPortal(this.props.children, this.modalDiv);
  }

}

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  showModal = () => this.setState({ showModal : true });
  hideModal = () => this.setState({ showModal : false });

  render() {
    return <div>

      <ModalDialog showModal={this.state.showModal}>
        <div>
          <span className="alert">Notification: package arrived</span>
          <button type="button" onClick={this.hideModal}>Close</button>
        </div>
      </ModalDialog>

      <button type="button" onClick={this.showModal}>Show Modal</button>


    </div>;
  }
}


ReactDOM.render(<Demo />, document.querySelector('main'));
