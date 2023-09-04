import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
const PriceListItem = ({ item, view }) => {
  return (
    <div className="flex lg:items-center justify-between lg:gap-3 even:bg-gray-100 flex-wrap lg:flex-nowrap flex-col lg:flex-row p-6 lg:p-0">
      {view && (
        <div className="w-40 shrink-0 lg:border-r lg:pl-6">
          {item.listTitle}
        </div>
      )}
      <div className="flex items-center justify-start lg:justify-end ml-auto w-full flex-wrap">
        {item.logos.slice(0, 5).map((logo, index) => {
          return (
            <div key={index} className="w-28 lg:w-1/4 xl:w-1/5 shrink-0">
              <Image
                src={logo}
                alt={item.listTitle}
                style={{ maxWidth: "100%" }}
              />
            </div>
          );
        })}
      </div>
      <div className="lg:w-32 lg:shrink-0 lg:py-10">
        {item.logos.length > 5 && (
          <div className="flex items-center lg:justify-center cursor-pointer">
            + {item.logos.length - 5} Others <HiChevronRight />
          </div>
        )}
      </div>
      {item.fees && (
        <div className="lg:w-48 lg:shrink-0">
          <span className="font-semibold">{item.fees}</span> Platform fees
          {item.feeDesc && (
            <div className="text-slate-700 text-sm">{item.feeDesc}</div>
          )}
        </div>
      )}
    </div>
  );
};
export default PriceListItem;
