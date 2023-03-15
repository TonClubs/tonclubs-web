import { useField } from "formik";
import React from "react";
import styled, { css } from "styled-components";

const NumberInputStyled = styled.div<{ $label_on_top: boolean }>`
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props?.$label_on_top &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    `}

  input {
    display: block;
    width: 125px;
    max-width: 100%;
    padding: 10px 25px 10px 11px;
    border: 0;
    border-radius: 10px;
    background-image: linear-gradient(
      270deg,
      rgba(26, 24, 34, 1) 0%,
      rgba(26, 25, 35, 1) 100%
    );
    text-align: right;

    color: #fff;
    font-size: 14px;
    font-weight: 400;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  label {
    display: block;
    font-size: 14px;
    color: #fff;
  }

  .input-con {
    position: relative;

    &.suffix {
      input {
        padding-right: 54px;
      }
    }
  }

  .suffix-text {
    position: absolute;
    right: 10px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #7279a0;
    width: 36px;
    justify-content: center;
  }
`;

type NumberInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  maxNum?: number;
  minNum?: number;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  suffix?: string;
  label_on_top?: boolean;
};

const NumberInput = (props: NumberInputProps) => {
  const {
    label,
    name,
    placeholder,
    inputProps,
    suffix,
    maxNum,
    minNum,
    label_on_top,
  } = props;

  const [field, meta] = useField(props);

  return (
    <NumberInputStyled $label_on_top={label_on_top || false}>
      <label htmlFor={name}>{label}</label>
      <div className={"input-con" + (suffix ? " suffix" : "")}>
        <input
          type="text"
          pattern="[0-9]*"
          id={name}
          {...inputProps}
          {...field}
          defaultValue={0}
          onChange={(elm: React.ChangeEvent<HTMLInputElement>) => {
            const newVal = Number(elm.target.value);
            if (elm.target.value?.length > 1 && !newVal) {
              elm.preventDefault();
              return;
            }

            elm.target.value = (newVal || 0) + "";

            field.onChange(elm);
          }}
          placeholder={placeholder}
        />
        {suffix && <div className="suffix-text">{suffix}</div>}
      </div>
    </NumberInputStyled>
  );
};

export default NumberInput;
