import { useField } from "formik";
import React from "react";
import styled from "styled-components";

const CheckboxInputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 17px;

  label {
    display: block;
    font-size: 14px;
    color: #909ef2;
    cursor: pointer;
  }

  .checkbox-wrapper {
    position: relative;
    width: 32px;
    height: 32px;
    margin-right: 4px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background-image: linear-gradient(
      270deg,
      rgba(26, 24, 34, 1) 0%,
      rgba(26, 25, 35, 1) 100%
    );
    appearance: none;
    margin: 0;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      width: 22px;
      height: 22px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 3px;
      border: 2px solid rgba(135, 139, 250, 1);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
      background: rgba(75, 105, 255, 1);
      outline: none;

      opacity: 0;
    }

    &:checked:after {
      opacity: 1;
    }
  }
`;

type CheckboxInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
};

const CheckboxInput = (props: CheckboxInputProps) => {
  const { label, name, placeholder, inputProps } = props;

  const [field, meta] = useField(props);

  return (
    <CheckboxInputStyled>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          {...inputProps}
          {...field}
          id={name}
          placeholder={placeholder}
        />
      </div>
      <label htmlFor={name}>{label}</label>
    </CheckboxInputStyled>
  );
};

export default CheckboxInput;
