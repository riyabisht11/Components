const tabs = ["Add Leads", "Create a Sequence", "Settings", "Working Hours"];

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-between px-2 py-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 border-b-2 ${
            activeTab === tab
              ? "border-orange-600 text-orange-600 font-semibold"
              : "border-transparent text-gray-600"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
