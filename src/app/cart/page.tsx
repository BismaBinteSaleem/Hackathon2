import { NextPage } from 'next';
import Image from 'next/image';

const AutoLayoutHorizontal: NextPage = () => {
  return (
    <div className="relative shadow-[inset_0px_0px_0px_#e5e5e5,_inset_0px_0px_0px_#e5e5e5,_inset_0px_-1px_0px_#e5e5e5,_inset_0px_0px_0px_#e5e5e5] bg-transparent w-full flex flex-row items-start justify-start py-[24px] box-border text-left text-[15px] text-[#757575] font-inter">
      <div className="flex flex-row items-start justify-start gap-[30px]">
        <Image className="relative overflow-hidden flex-shrink-0 object-cover" src="/Frame.png" alt="" width={150} height={150} />
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-row items-start justify-start gap-[178.8px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium text-[#111]">Nike Dri-FIT ADV TechKnit Ultra</div>
              <div className="overflow-hidden flex flex-row items-start justify-start px-[3.3px]">
                <div className="relative leading-[28px]">Men's Short-Sleeve Running Top</div>
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start px-[62.3px]">
                <div className="relative leading-[28px]">Ashen Slate/Cobalt Bliss</div>
              </div>
              <div className="flex flex-row items-start justify-start px-[19.9px]">
                <div className="flex flex-row items-start justify-start gap-[0.2px]">
                  <div className="relative leading-[28px]">Size</div>
                  <div className="w-[67px] relative bg-white h-[28px] overflow-hidden flex-shrink-0 text-right text-[16px]">
                    <div className="absolute top-0 left-[39px] leading-[28px]"></div>
                    <div className="absolute top-[6px] left-[10px] text-[14px] text-left">L</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[28px]">Quantity</div>
                  <div className="w-[58px] relative bg-white h-[28px] overflow-hidden flex-shrink-0 ml-[-0.8px] text-right text-[16px]">
                    <div className="absolute top-0 left-[30px] leading-[28px]"></div>
                    <div className="absolute top-[6px] left-[10px] text-[14px] text-left">1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start px-[4.2px] pl-[2px] text-right text-[#111]">
              <div className="relative leading-[28px]">MRP: ₹ 3 895.00</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start px-[473.3px] py-[4px_6px] gap-[16px]">
            <Image className="relative overflow-hidden flex-shrink-0" src="/images/menCart (5).png" alt="" width={24} height={24} />
            <Image className="relative overflow-hidden flex-shrink-0" src="/Frame.svg" alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLayoutHorizontal;
