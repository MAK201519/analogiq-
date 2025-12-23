import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Logotypes from "./components/Logotypes";
import Attribution from "./components/Attribution";
import DebugCompare from "./components/DebugCompare";

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
        <Attribution />
      </div>
    </>
  );
}
