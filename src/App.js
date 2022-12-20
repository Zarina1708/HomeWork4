import React from'react';
import './App.css';

// class Registration extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstname: '',
  //     lastname: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //   };
  //   this.onFirstNameChangeHandler = this.onFirstNameChangeHandler.bind(this);
  //   this.onLastNameChangeHandler = this.onLastNameChangeHandler.bind(this);
  //   this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
  //   this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
  //   this.onConfirmPasswordChangeHandler = this.onConfirmPasswordChangeHandler.bind(this);
  // }



  // onFirstNameChangeHandler(event) {
  //   this.setState({
  //     firstname: event.target.value,
  //   });
  // }

  // onLastNameChangeHandler(event) {
  //   this.setState({
  //     lastname: event.target.value,
  //   });
  // }

  // onEmailChangeHandler(event) {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // }

  // onPasswordChangeHandler(event) {
  //   this.setState({
  //     password: event.target.value,
  //   });
  // }

  // onConfirmPasswordChangeHandler(event) {
  //   this.setState({
  //     confirmPassword: event.target.value,
  //   });
  // }


//   render() {
//     return (
//       <div>
//         <h1>Registration</h1>
//         <br />
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             First Name: 
//           </label>
//           <input type="text" name="firstName" placeholder='введите имя' />
//           <label>
//             Last Name: 
//           </label>
//           <input type="text" name="lastname" placeholder='введите фамилию' />
//           <label>
//             Email: 
//           </label>
//           <input type="email" name="email" placeholder='введите почту' />
//           <label>
//             Password: 
//           </label>
//           <input type="password" name="password" placeholder='введите пароль' />
//           <label>
//             Confirm Password: 
//           </label>
//           <input type="password" name="confirmPassword" placeholder='повторите пароль' />
//         </form>
//       </div>
//     );
// }
// }

// export default Registration;



function ContactsForm() {
  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, lastname, email, password);
  }


  function handlClick(event) {
      event.preventDefault();
      alert('Успешно')
  }

  return (
    <div className='main'>
        <br />
        <div className='wrap'>
          <form onSubmit={handleSubmit}>
          <h1 className='title'>Registration </h1>
          <br />
            <label htmlFor='name'>
              Name: 
            </label>
            <br></br>
            <input
              type="text" 
              id='name'
              value={name} 
              placeholder='введите имя' 
              onChange={event => setName(event.target.value)}
            />
            <br></br>
            <label htmlFor='lastname'>
              Last Name: 
            </label>
            <br></br>
            <input 
              type="text"
              id='lastname'
              value={lastname}
              placeholder='введите фамилию' 
              onChange={event => setLastname(event.target.value)}
            />
            <br></br>
            <label htmlFor='email'>
              Email: 
            </label>
            <br></br>
            <input 
              type="email"
              id='email'
              value={email}
              placeholder='введите почту'  
              onChange={event => setEmail(event.target.value)}
            />
            <br></br>
            <label htmlFor='password'>
              Password: 
            </label>
            <br></br>
            <input 
              type="password" 
              id='password'
              value={password}
              placeholder='введите пароль'  
              onChange={event => setPassword(event.target.value)}
            />
          </form>
          <br></br>
          <button 
            className='button'
            type='submit'
            onClick={handlClick}>
              Submit
          </button>
        </div>
      </div>

   
  )
}



export default ContactsForm;

