import { useField } from "formik";
import { useState } from "react";
import styled from "styled-components";
import { StepFormikHelpersType } from "../form-steps/create/step.type";

const ButtonOptionSelectStyled = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 19px;

  button {
    width: 100%;
    height: 34px;
    border: 0;
    border-radius: 10px;

    background: #565a7d;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease background, 0.25s ease opacity;
    opacity: 0.22;
    font-weight: 300;

    &:hover {
      background: #777a94;
    }

    &.active {
      background: #565a7d;
      opacity: 1;
    }
  }
`;

type TextInputProps = {
  name: string;
  default_active_index: number;
  button_options?: {
    value: string | boolean | number;
    label: string;
  }[];
  formikHelpers: StepFormikHelpersType;
};

const ButtonOptionSelect = (props: TextInputProps) => {
  const [field, meta] = useField(props);

  const { button_options, formikHelpers, name, default_active_index } = props;

  const [activeIndex, setActiveIndex] = useState(default_active_index);

  const handleButtonClick = (
    value: string | boolean | number,
    index: number
  ) => {
    setActiveIndex(index);
    formikHelpers.setFieldValue(name, value);
  };

  return (
    <ButtonOptionSelectStyled>
      {button_options?.map((item, index) => {
        return (
          <button
            key={"button-option_" + index}
            className={activeIndex == index ? "active" : ""}
            onClick={() => handleButtonClick(item?.value, index)}
          >
            {item?.label}
          </button>
        );
      })}
    </ButtonOptionSelectStyled>
  );
};

export default ButtonOptionSelect;
