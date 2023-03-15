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

    color: rgba(114, 121, 160, 1);
    font-size: 14px;
    font-weight: 400;
    outline: none;
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
  label: string;
  name: string;
  textarea?: boolean;
  placeholder?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  textareaProps?: React.HTMLProps<HTMLTextAreaElement>;
};

const TextInput = (props: TextInputProps) => {
  const { label, name, placeholder, inputProps, textareaProps, textarea } =
    props;

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
        ></textarea>
      ) : (
        <input
          type="text"
          id={name}
          {...inputProps}
          {...field}
          placeholder={placeholder}
        />
      )}
    </TextInputStyled>
  );
};

export default TextInput;
