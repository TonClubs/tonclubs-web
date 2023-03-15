import { useField } from "formik";
import { useState } from "react";
import styled from "styled-components";
import { StepFormikHelpersType } from "../form-steps/create/step.type";

const SelectOptionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 19px;

  .select-wrapper {
    position: relative;
    width: 113px;
    height: 34px;
    &:after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      right: 11px;
      top: 50%;
      transform: translateY(-50%);
      background: url("/circle-arrow-bottom.svg");
      z-index: 21321;
      pointer-events: none;
    }
  }

  select {
    position: relative;
    width: 113px;
    height: 34px;
    padding-left: 14px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(
      270deg,
      rgba(26, 24, 34, 1) 0%,
      rgba(26, 25, 35, 1) 100%
    );
    outline: none;
    color: #fff;
    appearance: none;
  }

  label {
    display: block;
    font-size: 14px;
    color: #fff;
  }
`;

type SelectOptionProps = {
  name: string;
  label: string;
  selectProps?: React.HTMLProps<HTMLSelectElement>;
};

const SelectOption = (props: SelectOptionProps) => {
  const [field, meta] = useField(props);

  const { name, label, selectProps } = props;

  return (
    <SelectOptionStyled>
      <label htmlFor={name}>{label}</label>
      <div className="select-wrapper">
        <select id={name} {...field} {...selectProps}>
          <option value={"-empty-"}></option>
          <option value={"fans"}>Fans</option>
          <option value={"news"}>News</option>
          <option value={"creators"}>Creators</option>
          <option value={"exclusive"}>Exclusive</option>
          <option value={"sports"}>Sports</option>
          <option value={"dao"}>DAO</option>
          <option value={"trade"}>Trade</option>
          <option value={"bet"}>Bet</option>
          <option value={"alphas"}>Alphas</option>
          <option value={"gaming"}>Gaming</option>
          <option value={"other"}>Other</option>
        </select>
      </div>
    </SelectOptionStyled>
  );
};

export default SelectOption;
