import { css, Global } from "@emotion/react";

const style = css`
  html,
  body {
    margin: 0px;
    background-color: rgb(245, 245, 245);
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};
