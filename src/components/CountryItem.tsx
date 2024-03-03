import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ICountry from "@/types/ICountry";

export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
}: ICountry) {
  // const router = useNavigate();
  const router = useRouter();

  const onClickItem = () => {
    // nav(`/country/${code}`);
    router.push(`/country/${code}`);
  };

  return (
    <SContainer onClick={onClickItem}>
      <SFlagImg src={flagImg} />
      <SContent>
        <SName>
          {flagEmoji} {commonName}
        </SName>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(", ")}</div>
        <div>인구 : {population}</div>
      </SContent>
    </SContainer>
  );
}

const SContainer = styled.div`
  width: 220px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const SFlagImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const SContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px;
`;
