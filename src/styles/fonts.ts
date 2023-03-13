import { css } from "styled-components";

export const fontsCss = css`
  @font-face {
    font-family: "Campton";
    src: url("/fonts/campton/Rene_Bieder_-_Campton_Book.otf") format("opentype");
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Campton";
    src: url("/fonts/campton/Rene_Bieder_-_Campton_Medium.otf")
      format("opentype");
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Campton";
    src: url("/fonts/campton/Rene_Bieder_-_Campton_SemiBold.otf")
      format("opentype");
    font-weight: 600;
    font-display: swap;
  }
`;
