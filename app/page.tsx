import Image from "next/image";
import homeDesign from "@/app/home-design.png";
import NavigationBar from "./components/NavigationBar";
import Attribution from "./components/Attribution";

export default async function Home({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ debug: string }>;
}) {
  const searchParams = await searchParamsPromise;
  const isDebug = searchParams.debug === "1";
  return (
    <>
      {isDebug && (
        <Image
          src={homeDesign}
          alt="home design"
          width={homeDesign.width / 2}
          className="h-auto block mx-auto absolute top-0 left-0 right-0 min-w-[1440px]"
        />
      )}
      <div className="relative pt-[60px] min-w-[1440px]">
        <NavigationBar />
        <Attribution />
      </div>
    </>
  );
}
