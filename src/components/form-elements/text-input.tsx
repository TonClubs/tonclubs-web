import { useField } from "formik";
import React from "react";
import styled from "styled-components";

const TextInputStyled = styled.div`
  margin-bottom: 17px;

  textarea,
  input {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 10px 11px;
    border: 0;
    border-radius: 10px;
    background-image: linear-gradient(
      270deg,
      rgba(26, 24, 34, 1) 0%,
      rgba(26, 25, 35, 1) 100%
    );

    color: #fff;
    font-size: 14px;
    font-weight: 400;
    outline: none;

    &::placeholder {
      color: #7279a0;
      opacity: 0;
    }

    &:disabled {
      background-image: 0;
      background: #35354c;
      color: #909ef2;
      font-weight: 600;
    }
  }

  textarea {
    resize: none;
  }

  label {
    display: block;
    font-size: 14px;
    color: #fff;
    margin-bottom: 12px;
  }
`;

type TextInputProps = {
  name: string;
  customEndValue?: string;
  label: string;
  textarea?: boolean;
  placeholder?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  textareaProps?: React.HTMLProps<HTMLTextAreaElement>;
};

const TextInput = (props: TextInputProps) => {
  const {
    label,
    name,
    placeholder,
    inputProps,
    textareaProps,
    textarea,
    customEndValue,
  } = props;

  const [field, meta] = useField(props);

  return (
    <TextInputStyled>
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea
          rows={2}
          id={name}
          {...textareaProps}
          {...field}
          placeholder={placeholder}
          {...(customEndValue ? { value: customEndValue } : {})}
        ></textarea>
      ) : (
        <input
          type="text"
          id={name}
          {...inputProps}
          {...field}
          placeholder={placeholder}
          {...(customEndValue ? { value: customEndValue } : {})}
        />
      )}
    </TextInputStyled>
  );
};

export default TextInput;
