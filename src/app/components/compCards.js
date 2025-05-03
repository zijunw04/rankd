import Image from "next/image";
import { SiLinkedin } from "react-icons/si";

export default function CompanyPanel({
  company,
  onClick,
  side,
  disabled,
  revealed,
}) {
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
      {/* Logo and Name */}
      <div className="flex flex-col items-center w-full mb-8">
        {company.logo && (
          <Image
            width={1000}
            height={1000}
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-24 h-24 object-cover rounded bg-gray-50 border mb-4 mx-auto"
          />
        )}
        <div className="flex items-center justify-center gap-2 mb-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 transition-colors duration-150 text-center leading-none">
            {company.name}
          </h2>
          {company.linkedin && (
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-black flex items-center pointer-events-auto ${
                disabled ? "cursor-pointer" : ""
              }`}
              aria-label={`${company.name} LinkedIn`}
              style={{ lineHeight: 1 }}
            >
              <SiLinkedin size={24} className="align-middle pt-[2px]" />
            </a>
          )}
        </div>
        <div className="text-gray-500 text-lg mb-2 text-center">
          {company.type}
        </div>
        {/* Location, Founding Date, Employee Size, Tags */}
        <div className="mb-4 text-center text-gray-600 space-y-1">
          {company.location && (
            <div>
              <span className="font-semibold">Location:</span>{" "}
              {company.location}
            </div>
          )}
          {company.foundingDate && (
            <div>
              <span className="font-semibold">Founded:</span>{" "}
              {company.foundingDate}
            </div>
          )}
          {company.employeeSize && (
            <div>
              <span className="font-semibold">Employees:</span>{" "}
              {company.employeeSize}
            </div>
          )}
          {company.tags && company.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {company.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Elo */}
        <div className="mt-1 text-center w-40 h-10 mx-auto flex items-center justify-center">
          {!revealed ? (
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-400 font-semibold" />
          ) : typeof company.elo !== "number" ? (
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-400 font-semibold">
              Loading...
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-semibold transition-all duration-300">
              <span className="font-semibold">Elo:</span>
              <span className="font-bold ml-1">{company.elo}</span>
              {typeof company.eloChange === "number" &&
                company.eloChange !== 0 && (
                  <span
                    className={`ml-2 ${
                      company.eloChange > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ({company.eloChange > 0 ? "+" : ""}
                    {company.eloChange})
                  </span>
                )}
            </div>
          )}
        </div>
      </div>
      {/* About */}
      <div className="mb-10 text-center">
        <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">
          About
        </div>
        <p className="text-gray-700 text-xl leading-relaxed">
          {company.description}
        </p>
      </div>
      {/* Salary */}
      {company.salary && (
        <div className="mb-10 text-center">
          <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">
            Typical Salary
          </div>
          <div className="text-xl text-gray-700">{company.salary}</div>
        </div>
      )}
      {/* Revenue Section */}
      {company.revenue && (
        <div className="mb-10 text-center">
          <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">
            Overall Revenue
          </div>
          <div className="text-xl text-gray-700">{company.revenue}</div>
        </div>
      )}
    </div>
  );
}
