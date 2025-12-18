import React, { Component } from "react";
import { FaCheckCircle } from "react-icons/fa";
  
class ContactUs extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }
  };

  // REGEX patterns
  nameRegex = /^[A-Za-z]{3,}$/;
  lastNameRegex = /^[A-Za-z]{1,}$/;
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  phoneRegex = /^[0-9]{10}$/;

 
  handleChange = (e) => {
    const {name,value} = e.target;
    this.setState({
      [name]:value
    });
  };

  handleSubmit = (e) => {
    
    e.preventDefault();

    let errors = {};

    if (!this.nameRegex.test(this.state.firstName))
      errors.firstName = "FirstName should have atleast 3 chars";

    if (!this.lastNameRegex.test(this.state.lastName))
      errors.lastName = "lastName should have atleast 1 char";

    if (!this.emailRegex.test(this.state.email))
      errors.email = "Email should contain @";

    if (!this.phoneRegex.test(this.state.phone))
      errors.phone = "Phn num should have 10 number";

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      alert("Form Submitted Successfully ");
    }
  };

  // VALID ICON CHECK
  isValid = (value, regex) => {
    return regex.test(value);
  };

  render() {
    const { firstName, lastName, email, phone, errors } = this.state;

    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">ContactUs</h2>

        <div className="row justify-content-center">
          <div className="col-md-5">

            <form onSubmit={this.handleSubmit}>

              {/* FIRST NAME */}
              <div className="mb-3 position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your firstName"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                />
                {this.isValid(firstName, this.nameRegex) &&
                  <FaCheckCircle className="text-success position-absolute top-50 end-0 translate-middle-y me-3" />
                }
                {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
              </div>

              {/* LAST NAME */}
              <div className="mb-3 position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your lastName"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
                {this.isValid(lastName, this.lastNameRegex) &&
                  <FaCheckCircle className="text-success position-absolute top-50 end-0 translate-middle-y me-3" />
                }
                {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
              </div>

              {/* EMAIL */}
              <div className="mb-3 position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {this.isValid(email, this.emailRegex) &&
                  <FaCheckCircle className="text-success position-absolute top-50 end-0 translate-middle-y me-3" />
                }
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              {/* PHONE */}
              <div className="mb-3 position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                />
                {this.isValid(phone, this.phoneRegex) &&
                  <FaCheckCircle className="text-success position-absolute top-50 end-0 translate-middle-y me-3" />
                }
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </div>

              <button className="btn btn-primary">
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
