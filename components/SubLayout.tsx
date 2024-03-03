import type { ReactElement } from "react";
import styled from "@emotion/styled";

export default function SubLayout({ children }: { children: ReactElement }) {
  return (
    <div className="SubLayout">
      <div>{children}</div>
      <SFooter>@sryung1225</SFooter>
    </div>
  );
}

const SFooter = styled.footer`
  border-top: 1px solid rgb(230, 230, 230);
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
  color: gray;
  font-size: 14px;
`;
