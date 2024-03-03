import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";
import ICountry from "@/types/ICountry";

interface ISearch {
  countries: ICountry[];
}

export default function Search({ countries }: ISearch) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;

export const getServerSideProps = async (context: any) => {
  // 1. 검색 결과 API 호출
  // 2. Props 리턴

  // context 매개변수에는 브라우저에서 받은 요청의 정보들이 담김
  // => 검색어가 담긴 query string도 context 안에서 가져올 수 있음
  const { q } = context.query;

  let countries = [];
  if (q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: {
      countries,
    },
  };
};
