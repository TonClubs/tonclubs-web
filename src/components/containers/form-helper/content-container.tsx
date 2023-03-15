import styled, { css } from "styled-components";

type ContentContainerProps = {
  $leftSpace?: number;
};

const ContentContainer = styled.div<ContentContainerProps>`
  width: 310px;
  max-width: 100%;

  ${(props) =>
    props?.$leftSpace &&
    css`
      margin-left: ${props?.$leftSpace + "px"};
    `}
`;

export default ContentContainer;
