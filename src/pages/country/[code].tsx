import { useRouter } from "next/router";
import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import ICountry from "@/types/ICountry";

export default function Country({ country }: { country: ICountry }) {
  const router = useRouter();
  const { code } = router.query;

  if (!country) {
    // fallback: "blocking" 중에 아래 return문에 접근해 에러를 발생하는 경우 방어
    return <div>존재하지 않는 국가 입니다.</div>;
  }

  return (
    <div>
      {code} {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "KOR" } }, { params: { code: "ABW" } }], // 존재하는 동적 경로 안내
    // fallback: false, // 위에서 명시하지 않은 경로를 접근하면 404를 노출
    fallback: "blocking", // 위에서 명시하지 않은 경로를 접근하면 실시간으로 정적 페이지 생성. 이후 재접근 시 빠르게 페이지 가져옴
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
