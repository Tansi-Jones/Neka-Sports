import Head from "next/head";

export default function MetaTitle({ subTitle }) {
  return (
    <Head>
      <title>Neka Sports {subTitle && `| ${subTitle}`}</title>
    </Head>
  );
}
