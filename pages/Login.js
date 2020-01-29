import React from "react";
import Form from "react-bootstrap/Form";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  
    this.state = {
      hidden: true,
      value: ""
    };
    this.toggleShow = this.toggleShow.bind(this);
    
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
 

  handleSubmit = () => {
    // your submit logic
  };

  
  render() {
    const { password } = this.state;
    return (
      <div>
        <label></label>
        <input
          className="username"
          type="text"
          name="Username"
          placeholder="Username "
        />
        <style jsx>
          {`
            .username {
              width: 256px;
            }
          `}
        </style>

        <br></br>
        <br></br>
        <div>
          <ValidatorForm >
           
            <TextValidator className="username"
              type="text" label="password" onChange={this.handleChange}  
              name="password" value={password} 
              type={this.state.hidden ? "password" : "text"}
              placeholder="Password"
            />
            <button onClick={this.toggleShow}>Show / Hide</button>
          </ValidatorForm>
        </div>
        <br></br>
        <Form.Check
          type="checkbox"
          label="I have read and agree to the Terms and Conditions and Privacy Policy"
        />
        <br></br>

        <button onclick="myFunction()">Submit</button>
      </div>
    );
  }
}

export default Login;
