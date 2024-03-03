import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout";
import ICountry from "@/types/ICountry";
import { fetchSearchResults } from "@/api";
import Searchbar from "@/components/Searchbar";
import CountryList from "@/components/CountryList";
import Head from "next/head";

export default function Search() {
  const router = useRouter();
  const q = typeof router.query.q === "string" ? router.query.q : undefined;

  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const setData = async () => {
      const data = await fetchSearchResults(q);
      setCountries(data);
    };
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>NARAS 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS 검색 결과" />
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
