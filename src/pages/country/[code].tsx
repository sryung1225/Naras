import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import ICountry from "@/types/ICountry";

export default function Country({ country }: { country: ICountry }) {
  const router = useRouter();
  const { code } = router.query;

  console.log(country);

  if (router.isFallback) {
    // fallback: true일 때 사용. 최초 html에 해당 코드가 저장됨
    return (
      <>
        <Head>
          <title>NARAS</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="NARAS" />
          <meta
            property="og:description"
            content="전 세계 국가들의 정보를 확인해보세요"
          />
        </Head>
        <div>Loading...</div>
      </>
    );
  }
  if (!country) {
    // fallback: "blocking" 중에 아래 return문에 접근해 에러를 발생하는 경우 방어
    return <div>존재하지 않는 국가 입니다.</div>;
  }

  return (
    <>
      <Head>
        <title>{country.commonName} 국가 정보 조회 | NARAS</title>
        <meta property="og:image" content={country.flagImg} />
        <meta
          property="og:title"
          content={`${country.commonName} 국가 정보 조회 | NARAS`}
        />
        <meta
          property="og:description"
          content={`${country.commonName} 국가의 자세한 정보입니다.`}
        />
      </Head>
      <SContainer>
        <SHeader>
          <SCommonName>
            {country.flagEmoji}&nbsp;{country.commonName}
          </SCommonName>
          <SOfficalName>{country.officialName}</SOfficalName>
        </SHeader>
        <SFlagImg>
          <Image
            src={country.flagImg}
            alt={`${country.commonName}의 국기 이미지입니다.`}
            fill
            priority
          />
        </SFlagImg>
        <SBody>
          <div>
            <b>코드 :</b>&nbsp;{country.code}
          </div>
          <div>
            <b>수도 :</b>&nbsp;{country.capital.join(", ")}
          </div>
          <div>
            <b>지역 :</b>&nbsp;{country.region}
          </div>
          <div>
            <b>지도 :</b>&nbsp;
            <a target="_blank" href={country.googleMapURL}>
              {country.googleMapURL}
            </a>
          </div>
        </SBody>
      </SContainer>
    </>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "KOR" } }, { params: { code: "ABW" } }], // 존재하는 동적 경로 안내
    // fallback: false, // 위에서 명시하지 않은 경로를 접근하면 404를 노출
    // fallback: "blocking", // 위에서 명시하지 않은 경로를 접근하면 실시간으로 정적 페이지 생성. 이후 재접근 시 빠르게 페이지 가져옴
    fallback: true, // 데이터가 없는 상태(props가 없는 버전)의 html 우선 생성. 데이터를 후에 전달하는 방식.
  };
};

export const getStaticProps = async (context: any) => {
  const { code } = context.params;
  let country = null;

  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
  };
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const SHeader = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const SOfficalName = styled.p``;

const SCommonName = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SFlagImg = styled.div`
  position: relative;
  width: 320px;
  height: 213px;
`;
