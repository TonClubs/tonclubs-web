import styled, { css } from "styled-components";

type ButtonProps = {
  $mode: "form-back" | "form-next";
};

const Button = styled.button<ButtonProps>`
  padding: 12px 30px;
  height: 43px;
  border-radius: 16px;
  opacity: 1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;

  ${(props) =>
    props?.$mode === "form-back" &&
    css`
      border: 2px solid rgba(132, 131, 156, 1);
      background-color: rgba(50, 48, 66, 1);
    `}

  ${(props) =>
    props?.$mode === "form-next" &&
    css`
      width: 186px;
      border: 2px solid rgba(135, 139, 250, 1);
      background-color: rgba(75, 105, 255, 1);
    `}
`;

export default Button;
