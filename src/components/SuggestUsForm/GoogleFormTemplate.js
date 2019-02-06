import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Modal from "./Modal";
import suggest from "../../images/icons/suggest.png";
import party from "../../images/icons/party.png";
import heart from "../../images/icons/heart.png";
const GoogleFormTemplate = ({
  FormRedirect,
  FormRedirectState,
  FormTitle,
  FormDesc,
  FinalSentMsg,
  FormActionUrl,
  children
}) => {
  return (
    <>
      {FormRedirect && <iframe name="hidden_iframe" id="hidden_iframe" title="frame" style={{ display: "none" }} />}
      <Modal>
        {FormRedirect && (
          <MsgSent>
            <p>
              {FinalSentMsg}
              <img src={party} alt="heart" /> <img src={heart} alt="" />
            </p>
          </MsgSent>
        )}
        <StyledForm
          action={FormActionUrl}
          method="post"
          target="hidden_iframe"
          onSubmit={FormRedirectState}
          visibility={FormRedirect ? `hidden` : `visible`}
        >
          <img src={suggest} alt="اقترح مكان" />
          {children}

          <Button
            type="submit"
            width="100%"
            height="2.2rem"
            BGColor="var(--color-primary)"
            BorderRadius="50px"
            FontFamily="Dubai-Light,sans-serif"
            FontSize="0.8rem"
            FontWeight="600"
          >
            إرسال{" "}
          </Button>
        </StyledForm>
      </Modal>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  visibility: ${props => props.visibility};
  margin: 0px auto;
  img {
    width: 1.1rem;
    height: 1rem;
    margin: auto;
    margin-bottom: 18px;
  }
  input {
    height: 100%;
    margin-bottom: 40px;
    height: 35px;
  }
  button {
    margin-bottom: 20px;
    margin-top: 5px;
  }

  input,
  textarea {
    width: 240px;
    max-width: 400px;
    margin: 6px auto;
    padding: 10px;
    overflow: visible;
    font-weight: 400;
    background-color: #f5f5f5;
    border-radius: 14px;
    border-width: 0px;
    font-size: 0.8rem;
    line-height: normal;
  }
  p {
    color: grey;
    font-size: 0.8rem;
  }
  label {
    margin-bottom: 3px;
  }
`;

const MsgSent = styled.div`
  position: absolute;
  z-index: 1000;
  padding-top: 37%;
  margin-left: 11%;
  img {
    width: 0.9rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

export default GoogleFormTemplate;
