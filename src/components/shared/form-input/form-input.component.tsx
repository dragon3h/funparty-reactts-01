import React from 'react';

import './form-input.styles.scss';

type FormInputProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void,
  label: string,
  value: string,
  name: string,
  attrType: string,
  required?: boolean,
  autoComplete?: string
};

const FormInput = ({handleChange, label, value, name, attrType, ...otherProps}: FormInputProps) => {
  return (
      <div className="input-group">
        <input className="form-input"
               type={attrType}
               value={value}
               name={name}
               onChange={handleChange}
               {...otherProps}/>
        {
          label ? (
              <label className={`${(value && value.length) ? 'shrink':''} ${'form-input__label'}`}>
                {label}
              </label>
          ):null
        }
      </div>
  );
};

export default FormInput;
