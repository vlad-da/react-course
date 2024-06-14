
import style from './Input.module.scss';

import { forwardRef } from 'react';
const Input = forwardRef (function Input({isValid, ...props}, ref) {

  return (
    <input {...props}
        ref = {ref}
        className={isValid ? "" : "invalid-form"}
        
      />
  )
})

export default Input;
