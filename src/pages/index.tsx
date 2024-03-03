import Head from "next/head";
import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import ICountires from "@/types/ICountries";

export default function Home({ countries }: ICountires) {
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
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

// 페이지에 SSG 방식 적용(default) : server 측에서 페이지를 빌드 타임에 한 번만 렌더링
export const getStaticProps = async () => {
  // API 호출 코드가 필요함
  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴"); // 실제로는 페이지를 새로고침해도 콘솔이 출력되지 않음. 개발 모드에서는 계속 출력되므로 제대로 텍스트하려면 build 결과물로 확인해야 함

  return {
    props: {
      countries,
    },
  };
};
