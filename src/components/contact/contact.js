import React, { Fragment } from "react";
import * as emailjs from "emailjs-com";

import FormInput from "../form/form";

import "./contact.styles.scss";

import {
  Field,

  Control,

  Button,

  Textarea,

} from "rbx";

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "jacquelinetropp_gmail_com",
        "contactform",
        "contact_form",
        "user_XaBslOmnrGhx7hvUmamIT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message } = this.state;

    return (
      <Fragment >
        <div className="contact" id="contact">
          <h2>Let's Talk!</h2>
          <div className="contactbox">
            <div className="formbox">
              <form onSubmit={this.handleSubmit} id="contact_form">
                <FormInput
                  name="name"
                  type="text"
                  handleChange={this.handleChange}
                  value={name}
                  label="Name"
                  required
                />
                <FormInput
                  name="email"
                  type="email"
                  handleChange={this.handleChange}
                  value={email}
                  label="Email"
                  required
                />
                <FormInput
                  name="subject"
                  type="text"
                  handleChange={this.handleChange}
                  value={subject}
                  label="Subject"
                  required
                />

                <Field>
                  <Control>
                    <Textarea
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                      placeholder="message"
                    />
                  </Control>
                </Field>

                <Field kind="group">
                  <Control>
                    <Button color="dark">Send</Button>
                  </Control>
                </Field>
              </form>
            </div>
            <div className="textbox">
              <p>
                If you have any comments, questions, or business inquiries
                please contact me. You should get a response within 24 hours.
              </p>
              <div className="info">
                <ion-icon name="location-outline"></ion-icon>
                <h4>Jacqueline Tropp - Chicago</h4>
              </div>
              <div className="info">
                <ion-icon name="mail-outline"></ion-icon>

                <h4>jacquelinetropp@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Ⓒ Jacqueline Tropp | 2020</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;
