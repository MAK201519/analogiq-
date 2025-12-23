import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Logotypes from "./components/Logotypes";
import Attribution from "./components/Attribution";
import DebugCompare from "./components/DebugCompare";
import HeadingSubheading from "./components/HeadingSubheading";

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
        <Attribution className="mt-[70px]" />
      </div>
    </>
  );
}
