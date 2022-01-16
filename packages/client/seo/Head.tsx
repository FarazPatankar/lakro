import Head from 'next/head';

type Props = {
  title?: string;
  description: string;
};

export default ({ title, description }: Props) => {
  return (
    <Head>
      <title>{!title ? 'Lakro' : title}</title>
      <meta name="theme-color" content="#F20FFF" />
      <meta name="description" content={description} />
      <meta name="keywords" content="lakro, lakro.app, oss" />
      <meta property="og:title" content={!title ? 'Lakro' : title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/card.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={!title ? 'Lakro' : title} />
      <meta property="twitter:image" content="/assets/card.png" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
