import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

export default function Searchbar({ q }: { q?: string }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSearch(q ?? "");
  }, [q]);

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== "") {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <SContainer>
      <input
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요..."
      />
      <button onClick={onClickSearch}>검색</button>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  gap: 10px;
  & > input {
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgb(230, 230, 230);
    padding: 15px;
  }
  & > button {
    width: 80px;
    border: none;
    border-radius: 10px;
    background-color: white;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;
