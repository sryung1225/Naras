import type { ReactElement } from "react";
import { css } from "@emotion/react";

const footerStyle = css`
  border-top: 1px solid rgb(230, 230, 230);
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
  color: gray;
  font-size: 14px;
`;

export default function SubLayout({ children }: { children: ReactElement }) {
  return (
    <div className="SubLayout">
      <div>{children}</div>
      <footer css={footerStyle}>@sryung1225</footer>
    </div>
  );
}
