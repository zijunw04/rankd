import Image from "next/image";
import { SiLinkedin } from "react-icons/si";
import companies from "../data/company";

export default function ItemPanel({
  item,
  onClick,
  side,
  disabled,
  revealed,
  className,
}) {

  const getImageSize = () => {
    if (item.type === "brainrot") {
      return "w-[200px] h-[200px] sm:w-100 sm:h-100"; 
    } else if (item.type === "company") {
      return "w-16 h-16 sm:w-24 sm:h-24"; 
    } else {
      return "w-16 h-16 sm:w-24 sm:h-24";
    }
  };

  return (
    <div
      className={`
        flex flex-col h-full bg-white
        px-2 py-4 sm:px-6 md:px-10 lg:px-16
        md:py-12 z-10
        transition-transform duration-150 ease-in-out
        ${!disabled ? "hover:-translate-y-2 sm:hover:-translate-y-4" : ""}
        max-w-full items-center justify-center
        ${className || ""}
      `}
      onClick={disabled ? undefined : onClick}
      style={{ cursor: !disabled ? "pointer" : "default" }}
    >
      {/* Image/Logo and Name */}
      <div className="flex flex-col items-center w-full mb-4 sm:mb-8">
        {item.image && (
          <Image
            width={1000}
            height={1000}
            src={item.image}
            alt={`${item.name} image`}
            className={`${getImageSize()} object-cover rounded bg-gray-50 border mb-2 sm:mb-4 mx-auto`}
          />
        )}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900 transition-colors duration-150 text-center leading-none">
            {item.name}
          </h2>
          {item.externalLink && (
            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-black flex items-center pointer-events-auto ${
                disabled ? "cursor-pointer" : ""
              }`}
              aria-label={`${item.name} external link`}
              style={{ lineHeight: 1 }}
            >
              <SiLinkedin size={20} className="align-middle pt-[2px]" />
            </a>
          )}
        </div>
        {item.subtitle && (
          <div className="text-gray-500 text-sm sm:text-lg mb-1 sm:mb-2 text-center">
            {item.subtitle}
          </div>
        )}
        
        {/* Metadata Fields - Dynamically rendered */}
        {item.metadata && Object.keys(item.metadata).length > 0 && (
          <div className="mb-2 sm:mb-4 text-center text-gray-600 text-xs sm:text-sm space-y-1">
            {Object.entries(item.metadata).map(([key, value]) => (
              <div key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </div>
            ))}
          </div>
        )}
        
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-1 sm:mt-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Elo */}
        <div className="mt-1 text-center w-32 sm:w-40 h-8 sm:h-10 mx-auto flex items-center justify-center">
          {!revealed ? (
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-400 font-semibold" />
          ) : typeof item.elo !== "number" ? (
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-400 text-xs sm:text-sm font-semibold">
              Loading...
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 text-xs sm:text-sm font-semibold transition-all duration-300">
              <span className="font-semibold">Elo:</span>
              <span className="font-bold ml-1">{item.elo}</span>
              {typeof item.eloChange === "number" &&
                item.eloChange !== 0 && (
                  <span
                    className={`ml-1 sm:ml-2 ${
                      item.eloChange > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ({item.eloChange > 0 ? "+" : ""}
                    {item.eloChange})
                  </span>
                )}
            </div>
          )}
        </div>
      </div>
      
      {/* Description - Now visible on all screens */}
      {item.description && (
        <div className="mb-4 sm:mb-10 text-center">
          <div className="font-bold text-base sm:text-2xl text-gray-900 mb-1 sm:mb-2 tracking-wide">
            About
          </div>
          <p className="text-gray-700 text-xs sm:text-xl leading-relaxed">
            {item.description}
          </p>
        </div>
      )}
      
      {/* Additional Sections - Now visible on all screens */}
      {item.sections && 
        Object.entries(item.sections).map(([title, content]) => (
          <div key={title} className="mb-4 sm:mb-10 text-center">
            <div className="font-bold text-base sm:text-2xl text-gray-900 mb-1 sm:mb-2 tracking-wide">
              {title}
            </div>
            <div className="text-xs sm:text-xl text-gray-700">{content}</div>
          </div>
        ))}
    </div>
  );
}
