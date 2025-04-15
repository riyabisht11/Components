export default function LeadSourcePopup({
  searchUrl,
  setSearchUrl,
  leadCountType,
  setLeadCountType,
  customCount,
  setCustomCount,
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Basic LinkedIn Search</h2>
      <p className="text-sm text-gray-600">
        Filter profiles in the{" "}
        <a
          href="https://www.linkedin.com/search/results/people/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          LinkedIn search
        </a>{" "}
        and paste the URL below:
      </p>
      <input
        type="text"
        placeholder="https://www.linkedin.com/search/..."
        value={searchUrl}
        onChange={(e) => setSearchUrl(e.target.value)}
        className="w-[30vw] border border-gray-300 rounded-md px-4 py-2"
      />

      <div>
        <h1 className="text-sm font-medium text-gray-700">
          How many users would you like to add to this campaign?{" "}
          <span className="text-xs text-gray-400">(max: 1000)</span>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="userCount"
            checked={leadCountType === "max"}
            onChange={() => setLeadCountType("max")}
            className="
                appearance-none 
                  w-5 h-5 
                border-2 border-orange-500 
                rounded-full 
            checked:bg-orange-500 
          checked:border-orange-500
          focus:outline-none 
            transition duration-200"
          />
          Add maximum users
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="userCount"
            checked={leadCountType === "custom"}
            onChange={() => setLeadCountType("custom")}
            className="
                appearance-none 
                  w-5 h-5 
                border-2 border-orange-500 
                rounded-full 
            checked:bg-orange-500 
          checked:border-orange-500
          focus:outline-none 
            transition duration-200"
          />
          Custom
          <input
            type="number"
            min="0" // prevents typing below 0
            value={customCount}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0) setCustomCount(value); // Only allow 0 or greater
            }}
            className="border px-2 py-1 rounded w-20 ml-2"
            placeholder="1000"
            disabled={leadCountType !== "custom"}
          />
        </label>
      </div>
    </div>
  );
}
