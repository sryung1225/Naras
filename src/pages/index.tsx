import { fetchCountries } from "@/api";
import ICountry from "@/types/ICountry";

interface IHome {
  countries: ICountry[];
}

export default function Home({ countries }: IHome) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // API 호출 코드가 필요함
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
