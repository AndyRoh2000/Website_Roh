import PokeRoh from "@/components/card";
import PokeRohinfo from "@/components/about";
import AboutRoh from "@/components/abouttxt";

export default function Home() {
  return (
<div>
  <div className="flex flex-wrap justify-center items-center">
    <div className="flex pl-2 pr-2 pb-2">
      <PokeRoh />
    </div>
    <div className="flex h-full pl-2 pr-2 pb-2">
      <PokeRohinfo />
    </div>
  </div>
  <div className="flex justify-center w-full pl-2 pr-2 pb-2">
    <div className="w-full max-w-[460px] custom-lg:max-w-[940px]">
      <AboutRoh />
    </div>
  </div>
</div>

  );
}
