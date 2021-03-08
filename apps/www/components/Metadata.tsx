import Head from "next/head";

const TITLE = "Jonas Daniels (@jnsdls)";
const DESCRIPTION =
  "Frontend Engineer @ Twitch. Used to build startups @ Bebo (acq by Twitch). Advisor to startups @ f.inc.";
const URL = "https://jnsdls.dev";
const IMAGE = `${URL}/images/me.jpeg`;

interface MetaDataProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export const MetaData: React.FC<MetaDataProps> = ({
  title = TITLE,
  description = DESCRIPTION,
  url = URL,
  image = IMAGE,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="jnsdls.dev" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:site" content="@jnsdls" />
      <meta property="twitter:card" content="summary" />
    </Head>
  );
};
