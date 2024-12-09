
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="relative w-full flex flex-row items-center justify-start px-4 box-border gap-2 text-left text-sm text-gray-800 font-sans">
        <div className="overflow-hidden flex flex-row items-center justify-start z-0">
          <div className="overflow-hidden flex flex-row items-center justify-start px-5">
            <div className="w-[192px] bg-white flex flex-col items-start justify-start gap-11">
              <div className="w-[169.2px] flex flex-col items-start justify-start px-1 py-1 box-border gap-4">
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Shoes</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Sports Bras</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Tops & T-Shirts</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Hoodies & Sweatshirts</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Jackets</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Trousers & Tights</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Shorts</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Tracksuits</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Jumpsuits & Rompers</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Skirts & Dresses</div>
                <div className="w-full text-lg font-medium h-[17px] flex items-center">Socks</div>
                <div className="w-[101.6px] text-xl font-medium h-[38.6px] flex items-center">Accessories & Equipment</div>
              </div>

              {/* Gender Section */}
              <div className="flex flex-col items-start justify-start gap-5 text-sm">
                <div className="w-full border-t border-b py-1 gap-1 flex flex-col items-center">
                  <div className="w-full flex flex-row items-center justify-between py-4">
                    <div className="w-[58px] text-lg font-medium h-[17px] flex items-center">Gender</div>
                    <div className="w-[14px] h-[14px] relative">
                      <div className="absolute top-[9.54px] left-[0.65px] rounded-tl-sm bg-black w-[9px] h-[2px] rotate-[-46deg]" />
                      <div className="absolute top-[3.07px] left-[7.09px] rounded-br-sm bg-black w-[9px] h-[2px] rotate-[46deg]" />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1 px-1 py-1">
                    <div className="flex flex-row items-center justify-start gap-2 py-1">
                      <div className="w-[20px] h-[20px] rounded border border-gray-300" />
                      <div className="w-[31.3px] text-sm">Men</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2 py-1">
                      <div className="w-[20px] h-[20px] rounded border border-gray-300" />
                      <div className="w-[55px] text-sm">Women</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2 py-1">
                      <div className="w-[20px] h-[20px] rounded border border-gray-300" />
                      <div className="w-[49.1px] text-sm">Unisex</div>
                    </div>
                  </div>
                </div>

                {/* Kids Section */}
                <div className="w-full border-b py-1 gap-1 flex flex-col items-center">
                  <div className="w-full flex flex-row items-center justify-between py-4">
                    <div className="w-[35.8px] text-lg font-medium h-[17px] flex items-center">Kids</div>
                    <div className="w-[14px] h-[14px] relative">
                      <div className="absolute top-[9.54px] left-[0.65px] rounded-tl-sm bg-black w-[9px] h-[2px] rotate-[-46deg]" />
                      <div className="absolute top-[3.07px] left-[7.09px] rounded-br-sm bg-black w-[9px] h-[2px] rotate-[46deg]" />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1 px-1 py-1">
                    <div className="flex flex-row items-center justify-start gap-2 py-1">
                      <div className="w-[20px] h-[20px] rounded border border-gray-300" />
                      <div className="w-[35.8px] text-sm">Boys</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2 py-1">
                      <div className="w-[20px] h-[20px] rounded border border-gray-300" />
                      <div className="w-[33.1px] text-sm">Girls</div>
                    </div>
                  </div>
                </div>

                {/* Shop by Price Section */}
                <div className="w-full border-b py-1 gap-1 flex flex-col items-center">
                  <div className="w-full flex flex-row items-center justify-between py-4">
                    <div className="w-[106px] text-lg font-medium h-[17px] flex items-center">Shop By Price</div>
                    <div className="w-[14px] h-[14px] relative">
                      <div className="absolute top-[9.54px] left-[0.65px] rounded-tl-sm bg-black w-[9px] h-[2px] rotate-[-46deg]" />
                      <div className="absolute top-[3.07px] left-[7.09px] rounded-br-sm bg-black w-[9px] h-[2px] rotate-[46deg]" />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1 px-1 py-1">
                    <div className="flex flex-row items-center justify-start gap-2 py-1">
                      <div className="w-[20px] h-[20px] rounded border border-gray-300" />
                      <div className="w-[122.9px] text-sm">Under ₹ 2 500.00</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2 py-1">
                      <div className="w-[20px] h-[20px] rounded border border-gray-300" />
                      <div className="w-[110.5px] text-sm">₹ 2 501.00 - ₹ 7 500.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Separator */}
            <div className="absolute top-[calc(50%-437.3px)] right-0 overflow-hidden flex flex-row items-center justify-start py-2 z-1">
              <div className="w-[7px] h-[329px] rounded bg-black opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Product 1 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes1.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 2 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes2.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 3 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes3.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 4 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes4.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 5 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes5.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 6 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes6.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 7 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes7.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 8 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes8.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 9 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes9.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 10 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes10.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 11 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes11.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 12 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes12.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 13 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes13.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 14 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes14.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 15 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes15.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 16 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes16.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 17 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes17.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 18 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes18.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 19 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes19.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 20*/}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes20.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 21 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes21.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
        {/* 22 */}
        <div className="relative w-full">
          <div className="absolute top-[348px] left-0 w-[348px] h-[185px]">
            <div className="absolute top-[9px] left-0 flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-medium">Just In</div>
              <div className="flex flex-col items-start justify-start px-[3.3px] text-[#111]">
                <div className="relative leading-[24px] font-medium">Nike Air Force 1 Mid &#39;07</div>
                <div className="relative leading-[24px] text-[#757575]">Men&#39;s Shoes</div>
              </div>
            </div>
            <div className="absolute top-[90px] left-0 leading-[24px] text-[#757575] text-center flex items-center justify-center w-[60.7px] h-[17px]">
              1 Colour
            </div>
            <div className="absolute top-[126px] left-0 leading-[28px] font-medium text-[#111] flex items-center w-[132.4px] h-[17px]">
              MRP : ₹ 10 795.00
            </div>
          </div>
          <Image
            className="absolute w-full top-0 right-0 left-0 max-w-full overflow-hidden h-[348px] object-cover"
            src="/images/shoes22.png"
            alt="Product 1"
            width={348}
            height={348}
          />
        </div>
























































































































      </div>
    </div>
  );
}
