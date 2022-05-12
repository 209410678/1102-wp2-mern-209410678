import { useState, useEffect } from 'react';
import { Logo_78, FormRow_78 } from '../components';
import Wrapper from '../assets/wrappers/Register_78';

import { useAppContext } from '../context/appContext_78';
import Alert_78 from '../components/Alert_78';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}

function Register_78() {
    const [values, setValues] = useState(initialState);

    const { showAlert, displayAlert} = useAppContext();

    const toggleMember = () => {
      setValues( {...values, isMember: !values.isMember} );
    }

    const handleChange = (e) => {
        console.log('e.target', e.target)
        setValues({...values, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log('e.target', e.target)
        const {email, password } = values;
        if(!email || !password) {
          displayAlert();
          return;
        }
    }

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
          <Logo_78 />
          <h3> {values.isMember ? 'Login' : 'Register'}</h3>
          {showAlert && <Alert_78 /> }
          {/* name input */}
          {!values.isMember && (
            <FormRow_78 
            type="text"
            name='name'
            value={values.name}
            handleChange={handleChange}
            className='form-input' 
          />
          ) }
          
          {/*email input */}
          <FormRow_78 
            type="email"
            name='email'
            value={values.email}
            handleChange={handleChange}
            className='form-input' 
          />
          {/*password input */}
          <FormRow_78 
            type="password"
            name='password'
            value={values.password}
            handleChange={handleChange}
            className='form-input' 
          />
          <button className='btn btn-block' type="submit">
              submit
          </button>
          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' className='member-btn' onClick={toggleMember}>
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
      </form>
    </Wrapper>
  )
}

export default Register_78
