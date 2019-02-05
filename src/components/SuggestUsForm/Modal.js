import React from "react";
import Modal from "react-responsive-modal";
import { SuggestButton } from "../Button";
import suggest from "../../images/icons/suggest.png";
export default class ModalComponent extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <SuggestButton onClick={this.onOpenModal} isIcon="true">
          <img src={suggest} alt="أقتراح" />
          اقترح مكان
        </SuggestButton>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          showCloseIcon={false}
          styles={{ modal: { borderRadius: "30px" } }}
          center
        >
          {this.props.children}
        </Modal>
      </>
    );
  }
}
