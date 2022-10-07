import { useLoadScript } from "@react-google-maps/api";
import Maps from "../components/Maps";
import Header from "../components/Header";
import places from "./data/places.json";
import Head from "next/head";

export default function App({ places }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_KEY
  });
  return isLoaded ? (
    <>
      <Head>
        <title>Search Location</title>
        <meta name="description" content="Search Location" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {
        isLoaded ?
          <Maps places={places} /> : null
      }
      <Maps places={places} />
    </>
  ) : null
}

export const getStaticProps = async () => {
  return {
    props: {
      places
    }
  };
}