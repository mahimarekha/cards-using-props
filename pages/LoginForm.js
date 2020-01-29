import React from 'react';
import PropTypes from 'prop-types';
class LoginForm extends React.Component {
render(){
  const {data}=this.props;
  const namesList=data.map(name=>{
    console.log(name.name)
  })
  return(
    <ul>
      <li className="boy">name 1></li>
      <li className="girl">name 1></li>
      <li className="boy">name 1></li>
    </ul>
  )
}
  }

export default LoginForm;