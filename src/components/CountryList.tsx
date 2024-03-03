import styled from "@emotion/styled";
import CountryItem from "@/components/CountryItem";
import ICountries from "@/types/ICountries";

export default function CountryList({ countries }: ICountries) {
  return (
    <SContainer>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </SContainer>
  );
}

CountryList.defaultProps = {
  countries: [],
};

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
