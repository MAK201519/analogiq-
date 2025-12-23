import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Logotypes from "./components/Logotypes";
import Attribution from "./components/Attribution";
import DebugCompare from "./components/DebugCompare";
import HeadingSubheading from "./components/HeadingSubheading";
import Services from "./components/Services";
import CTA from "./components/CTA";
import CaseStudies from "./components/CaseStudies";

export default async function Home({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ debug: string }>;
}) {
  const searchParams = await searchParamsPromise;
  const isDebug = searchParams.debug === "1";
  return (
    <>
      {isDebug && <DebugCompare />}
      <div className="relative pt-[60px] min-w-[1440px]">
        <NavigationBar />
        <Header className="mt-[70px]" />
        <Logotypes className="mt-[70px]" />
        <HeadingSubheading
          className="mt-[140px]"
          heading="Services"
          subheading="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <Services className="mt-[80px]" />
        <CTA className="mt-[100px]" />
        <HeadingSubheading
          className="mt-[140px]"
          heading="Case Studies"
          subheading="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <CaseStudies className="mt-[80px]" />
        <Attribution className="mt-[70px]" />
      </div>
    </>
  );
}
