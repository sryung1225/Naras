import type { ReactElement } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactElement }) {
  const router = useRouter();
  const onClickHeader = () => {
    router.push("/");
  };
  return (
    <div>
      <SHeader onClick={onClickHeader}>NARAS 🌏</SHeader>
      <SMain>{children}</SMain>
    </div>
  );
}

const SHeader = styled.header`
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

const SMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 10px;
`;
