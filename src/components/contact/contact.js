import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../form/form";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

import "./contact.styles.scss";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="email" required />

          <Button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={this.state.disabled}
          >
            Send
          </Button>

          {this.state.emailSent === true && (
            <p className="d-inline success-msg">Email Sent</p>
          )}
          {this.state.emailSent === false && (
            <p className="d-inline err-msg">Email Not Sent</p>
          )}
        </Form>
      </div>
    );
  }
}

export default ContactPage;
