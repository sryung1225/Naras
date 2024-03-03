import { useRouter } from "next/router";
import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import ICountry from "@/types/ICountry";

export default function Country({ country }: { country: ICountry }) {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div>
      {code} {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getServerSideProps = async (context: any) => {
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
