import Image from "next/image";

export default function CompanyPanel({ company, onClick, side, disabled, revealed }) {
  return (
    <div
      className={`
        flex flex-col h-full w-full md:w-1/2 bg-white
        cursor-pointer px-6 py-8 md:px-[15%] md:py-12 z-10
        transition-transform duration-150 ease-in-out
        hover:-translate-y-4
        ${disabled ? "pointer-events-none " : ""}
      `}
      onClick={disabled ? undefined : onClick}
    >
      {/* Logo and Name */}
      <div className="flex flex-col items-center w-full mb-8">
        {company.logo && (
          <Image
            width={1000}
            height={1000}
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-24 h-24 object-contain rounded-full bg-gray-50 border mb-4 mx-auto"
          />
        )}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-1 transition-colors duration-150 hover:text-blue-600 text-center">
          {company.name}
        </h2>
        <div className="text-gray-500 text-lg mb-2 text-center">{company.type}</div>
        {/* Location, Founding Date, Employee Size, Tags */}
        <div className="mb-4 text-center text-gray-600 space-y-1">
          {company.location && (
            <div>
              <span className="font-semibold">Location:</span> {company.location}
            </div>
          )}
          {company.foundingDate && (
            <div>
              <span className="font-semibold">Founded:</span> {company.foundingDate}
            </div>
          )}
          {company.employeeSize && (
            <div>
              <span className="font-semibold">Employees:</span> {company.employeeSize}
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
          ) : (
            company.elo && (
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-semibold transition-all duration-300">
                <span className="font-semibold">Elo:</span>{" "}
                <span className="font-bold ml-1">{company.elo}</span>
                {company.eloChange && (
                  <span
                    className={`ml-2 ${company.eloChange > 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    ({company.eloChange > 0 ? "+" : ""}{company.eloChange})
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
      {/* About */}
      <div className="mb-10 text-center">
        <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">About</div>
        <p className="text-gray-700 text-lg leading-relaxed">{company.description}</p>
      </div>
      {/* Salary */}
      {company.salary && (
        <div className="mb-10 text-center">
          <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">Typical Salary</div>
          <div className="text-2xl font-extrabold text-green-600">{company.salary}</div>
        </div>
      )}
      {/* Factors Section */}
      {company.factors && company.factors.length > 0 && (
        <div className="w-full text-center">
          <div className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">Key Factors</div>
          <ul className="space-y-2">
            {company.factors.map((factor, idx) => (
              <li key={idx} className="flex flex-col items-center text-gray-700 text-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="font-medium">{factor.name}:</span>
                  <span className="ml-2 font-semibold">{factor.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
