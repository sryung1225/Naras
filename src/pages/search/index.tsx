import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout";
import ICountry from "@/types/ICountry";
import { fetchSearchResults } from "@/api";

export default function Search() {
  // url parameter를 이용하는 country/[code].ts는 어느정도 한정적인 경우의 수
  // 그와 다르게 query string은 대응해야 할 수가 너무 많기 때문에 동적 경로라고 보지 않음 : getStaticPaths 사용 X

  // => getStaticProps를 과감히 지우고 컴포넌트 내부에서 작업
  // => useRouter를 사용해 query string만 가져와 mount되었을 때 api 호출하도록 함

  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const setData = async () => {
      const data = await fetchSearchResults(q);
      setCountries(data);
    };
    if (q) {
      setData();
    } // query string이 변경되거나 mount되었을 때 api 호출
  }, [q]);

  // => 최초 빈 div만 렌더링 됐다가
  // => 검색 결과 데이터는 api가 완료되는 시점에 client 측에서 추가로 렌더링

  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;
