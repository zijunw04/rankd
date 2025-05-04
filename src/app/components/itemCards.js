import Image from "next/image";
import { SiLinkedin } from "react-icons/si";
import companies from "../data/company";

export default function ItemPanel({
  item,
  onClick,
  side,
  disabled,
  revealed,
}) {

  const getImageSize = () => {
    if (item.type === "brainrot") {
      return "w-100 h-100"; 
    } else if (item.type === "company") {
      return "w-24 h-24"; 
    } else {
    
      return "w-24 h-24";
    }
  };

  return (
    <div
      className={`
        flex flex-col h-full w-full md:w-1/2 bg-white
        px-4 py-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40
        md:py-12 z-10
        transition-transform duration-150 ease-in-out
        ${!disabled ? "hover:-translate-y-4" : ""}
        max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl
        mx-auto
      `}
      onClick={disabled ? undefined : onClick}
      style={{ cursor: !disabled ? "pointer" : "default" }}
    >
      {/* Image/Logo and Name */}
      <div className="flex flex-col items-center w-full mb-8">
        {item.image && (
          <Image
            width={1000}
            height={1000}
            src={item.image}
            alt={`${item.name} image`}
            className={`${getImageSize()} object-cover rounded bg-gray-50 border mb-4 mx-auto`}
          />
        )}
        <div className="flex items-center justify-center gap-2 mb-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 transition-colors duration-150 text-center leading-none">
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
              <SiLinkedin size={24} className="align-middle pt-[2px]" />
            </a>
          )}
        </div>
        {item.subtitle && (
          <div className="text-gray-500 text-lg mb-2 text-center">
            {item.subtitle}
          </div>
        )}
        
        {/* Metadata Fields - Dynamically rendered */}
        {item.metadata && Object.keys(item.metadata).length > 0 && (
          <div className="mb-4 text-center text-gray-600 space-y-1">
            {Object.entries(item.metadata).map(([key, value]) => (
              <div key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </div>
            ))}
          </div>
        )}
        
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Elo */}
        <div className="mt-1 text-center w-40 h-10 mx-auto flex items-center justify-center">
          {!revealed ? (
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-400 font-semibold" />
          ) : typeof item.elo !== "number" ? (
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-400 font-semibold">
              Loading...
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-semibold transition-all duration-300">
              <span className="font-semibold">Elo:</span>
              <span className="font-bold ml-1">{item.elo}</span>
              {typeof item.eloChange === "number" &&
                item.eloChange !== 0 && (
                  <span
                    className={`ml-2 ${
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
      
      {/* Description */}
      {item.description && (
        <div className="mb-10 text-center">
          <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">
            About
          </div>
          <p className="text-gray-700 text-xl leading-relaxed">
            {item.description}
          </p>
        </div>
      )}
      
      {/* Additional Sections - Dynamically rendered */}
      {item.sections && 
        Object.entries(item.sections).map(([title, content]) => (
          <div key={title} className="mb-10 text-center">
            <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">
              {title}
            </div>
            <div className="text-xl text-gray-700">{content}</div>
          </div>
        ))}
    </div>
  );
}
