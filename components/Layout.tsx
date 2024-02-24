import type { ReactElement } from "react";
import { css } from "@emotion/react";

const headerStyle = css`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

const mainStyle = css`
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 10px;
`;

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <header css={headerStyle}>NARAS 🌏</header>
      <main css={mainStyle}>{children}</main>
    </div>
  );
}
