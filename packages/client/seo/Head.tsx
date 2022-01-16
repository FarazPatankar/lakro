import Head from 'next/head';

type Props = {
  title?: string;
  description: string;
};

export default ({ title, description }: Props) => {
  return (
    <Head>
      <title>{!title ? 'Lakro' : title}</title>
      <meta name="theme-color" content="#2463eb" />
      <meta name="description" content={description} />
    </Head>
  );
};
