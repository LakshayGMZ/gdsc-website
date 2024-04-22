import FeedBack from "../components/feedback/FeedBack.jsx";
import Domains from "../components/domains/Domains.jsx";
import Hero from "../components/hero/Hero.jsx";
import Resource from "../components/resource/Resource.jsx";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Domains />
      <Resource />
      <FeedBack />
    </>
  );
}
