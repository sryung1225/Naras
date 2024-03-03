import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home({ name }: { name: string }) {
  // 이 곳에서 작성하는 코드는 server에서 먼저 실행. 동시에 브라우저에도 실행됨
  const code = "KOR";
  const router = useRouter();
  const onClickButton = () => {
    router.push("/search");
  };

  useEffect(() => {
    console.log("HOME MOUNT");
  }, []); // server 측에만 console.log를 실행시키고 싶다면? useEffect를 이용해 마운트 될 떄 실행되도록
  return (
    <div>
      Home Page
      <p>{name}</p>
      <div>
        <button onClick={onClickButton}>Search 페이지로 이동</button>
      </div>
      <div>
        <Link href={"/search"}>Search 페이지로 이동</Link>
      </div>
      <div>
        {/* <Link href={`/country/${code}`}>{code} 페이지로 이동</Link> */}
        <Link href={{ pathname: "/country/[code]", query: { code: code } }}>
          {code} 페이지로 이동
        </Link>
      </div>
    </div>
  );
}

// getServerSideProps를 통해 해당 페이지가 SSR 방식으로 적용하는 페이지가 됨
export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수
  // getServerSideProps의 내용은 오직 server 측에서만 실행됨
  console.log("getServerSideProps Called"); // 화면 콘솔창(client)에는 뜨지 않음. 터미널에서만 출력됨
  // window

  return {
    props: {
      name: "KOREA",
    }, // props의 프로퍼티는 무조건 객체여야 함
  };
};
