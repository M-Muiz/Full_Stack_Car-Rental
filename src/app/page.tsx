import Explore from "@/components/Explore";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
<div className="">
  <Slider/>
  <div className="relative">
    <Explore />
  </div>
</div>
  );
}
