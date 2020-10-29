import React from 'react';

import './custom-button.styles.scss';

type CustomBtnProps = {
  children: React.ReactNode,
  type: "submit" | "button"
}

const CustomBtn = (props: CustomBtnProps) => {
  return (
      <button className="custom-button" type={props.type}>
        {props.children}
      </button>
  );
};

export default CustomBtn;