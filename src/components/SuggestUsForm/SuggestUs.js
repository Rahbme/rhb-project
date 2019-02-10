import React, { Component } from "react";
import Input from "../Input";
import GoogleFormTemplate from "./GoogleFormTemplate";
export const SuggestCopmonent = ({ FormRedirect, FormRedirectState, inputs, inputOnChange }) => (
  <GoogleFormTemplate
    FormRedirect={FormRedirect}
    FormRedirectState={FormRedirectState}
    FormTitle="اقترح مكان"
    FormDesc="اقترح علينا سواء بفكرة او مكان"
    FinalSentMsg="الله يعطيك العافية على التوصية، لاتحرمنا من توصياتك إذا عرفت مكان جديد"
    FormActionUrl="https://docs.google.com/forms/u/7/d/e/1FAIpQLSe-y3IuVxc6WjTFYHvR5Fw1_lq9U3uEX9rqhrWC0Onnrv8DPQ/formResponse"
  >
    <Input
      Forlabel="اسم المكان ( مطعم أو كافيه )"
      name="entry.344522578"
      required={true}
    />
    <Input
      Forlabel="المدينة"
      name="entry.2081730193"
      required={true}
    />
    <Input
      Forlabel="رابط مشاركة الموقع ( إن وجد )"
      name="entry.290755335"
    />
  </GoogleFormTemplate>
);

class SuggestUs extends Component {
  state = {
    FormRedirect: false,
    name: "",
    city: "",
    location: ""
  };
  FormRedirectState = () => this.setState({ FormRedirect: !this.state.FormRedirect, name: "", city: "", location: "" });

  inputOnChange = e =>
    this.setState({ [event.target.getAttribute("data-state")]: e.currentTarget.value }, () => console.log(this.state));
  render() {
    const { FormRedirect } = this.state;
    const inputs = { FormRedirect, ...this.state };
    return (
      <SuggestCopmonent
        handleTextFieldChanges={this.handleTextFieldChanges}
        FormRedirect={FormRedirect}
        FormRedirectState={this.FormRedirectState}
        inputs={inputs}
        inputOnChange={this.inputOnChange}
      />
    );
  }
}

export default SuggestUs;
