import Image from "next/image"; // Only import Image from next/image

export default function Details() {
  return (
    <div className="w-full relative">
      <div className="text-left text-[#111] font-[Poppins] px-4 md:px-8">
        <div className="w-full md:w-[calc(100%-824px)] h-auto md:h-[1041px] relative">
          {/* Product Details Section */}
          <div className="absolute top-[241px] left-0 flex flex-col items-start justify-start px-0 py-[24px] gap-[2px]">
            <div className="flex flex-col items-start justify-start">
              <div className="w-full md:w-[374.9px] relative leading-[28px] flex items-center">
                Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
              </div>
              <div className="flex flex-col items-start justify-start px-[65.4px] pt-[32px] pb-[24px] text-[36px]">
                <div className="w-[229px] relative leading-[28px] font-medium flex items-center h-[34px] shrink-0">
                  ₹ 8 695.00
                </div>
              </div>
            </div>
            <div className="rounded-[30px] bg-[#111] overflow-hidden flex flex-row items-start justify-start px-[22.5px] py-[7.5px] text-center text-white">
              <Image
                className="w-[29px] h-[29px] relative overflow-hidden shrink-0"
                src="/images/iconBuy.png"
                alt="buy icon"
                width={29}
                height={29}
              />
              <div className="w-[99px] relative leading-[24px] font-medium whitespace-pre-wrap flex items-center justify-center h-[29px] shrink-0">
                Add To Cart
              </div>
            </div>
          </div>

          {/* Product Name Section */}
          <div className="absolute top-[135px] left-0 text-[48px] leading-[48px] font-medium">
            <p className="m-0">Nike Air Force 1</p>
            <p className="m-0">PLT.AF.ORM</p>
          </div>
        </div>

        {/* Product Image */}
        <div className="w-full flex justify-center mt-[50px] md:mt-0">
          <Image src="/images/shoes3.png" alt="Nike shoes" width={653} height={653} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
