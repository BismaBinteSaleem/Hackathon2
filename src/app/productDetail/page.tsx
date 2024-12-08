import next from "next/image"
import Image from "next/image";

export default function details(){
    return(
        <div>

<div className="w-full relative h-[1125px] text-left text-[15px] text-[#111] font-[Poppins]">
  <div className="absolute w-[calc(100%-824px)] top-[-26px] right-[56px] left-[768px] h-[1041px]">
    <div className="absolute top-[241px] left-0 flex flex-col items-start justify-start px-0 py-[24px] gap-[2px]">
      <div className="flex flex-col items-start justify-start">
        <div className="w-[374.9px] relative leading-[28px] flex items-center">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </div>
        <div className="flex flex-col items-start justify-start px-[65.4px] pt-[32px] pb-[24px] text-[36px]">
          <div className="w-[229px] relative leading-[28px] font-medium flex items-center h-[34px] shrink-0">
            ₹ 8 695.00
          </div>
        </div>
      </div>
      <div className="rounded-[30px] bg-[#111] overflow-hidden flex flex-row items-start justify-start px-[22.5px] py-[7.5px] text-center text-white">
        <img className="w-[29px] h-[29px] relative overflow-hidden shrink-0" src="/images/iconBuy.png" alt="" />
        <div className="w-[99px] relative leading-[24px] font-medium whitespace-pre-wrap flex items-center justify-center h-[29px] shrink-0">
          Add To Cart
        </div>
      </div>
    </div>
    <div className="absolute top-[135px] left-0 text-[48px] leading-[48px] font-medium">
      <p className="m-0">Nike Air Force 1</p>
      <p className="m-0">PLT.AF.ORM</p>
    </div>
  </div>
  <Image src={"/images/shoes3.png"} alt="logo" width={653} height={653}></Image>
</div>

        </div>
    )
}