import { useState } from "react";
import Tabs from "./Components/Tabs";
import AddLeadsPopup from "./Components/AddLeadsPopup";
import LeadList from "./Components/LeadList"; // ✅ your existing component

function Home() {
  const [activeTab, setActiveTab] = useState("Add Leads");
  const [showAddLeads, setShowAddLeads] = useState(false);
  const [leadLists, setLeadLists] = useState([]);

  const handleCreateList = (newList) => {
    const createdAt = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const finalList = {
      ...newList,
      addedLeads:
        newList.leadCountType === "max" ? "1000" : newList.customCount || "—",
      createdAt,
    };

    setLeadLists((prev) => [...prev, finalList]);
    setShowAddLeads(false);
  };
  const handleDeleteList = (index) => {
    const updatedLists = [...leadLists];
    updatedLists.splice(index, 1); // remove the list by index
    setLeadLists(updatedLists);
  };

  return (
    <div className="flex-1 bg-gray-50 px-10 py-6">
      {/* Tabs */}
      <div className="border-b border-gray-300">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Add Leads" && (
          <LeadList
            leadLists={leadLists}
            onAddNewList={() => setShowAddLeads(true)}
            onDeleteList={handleDeleteList}
          />
        )}

        {activeTab === "Create a Sequence" && (
          <div className="text-center text-gray-500 mt-10">
            Create a sequence content goes here.
          </div>
        )}

        {activeTab === "Settings" && (
          <div className="text-center text-gray-500 mt-10">
            Settings tab content here.
          </div>
        )}

        {activeTab === "Working Hours" && (
          <div className="text-center text-gray-500 mt-10">
            Working hours tab content here.
          </div>
        )}
      </div>

      {/* AddLeadsPopup */}
      {showAddLeads && (
        <AddLeadsPopup
          onClose={() => setShowAddLeads(false)}
          onOptionSelect={handleCreateList}
        />
      )}
    </div>
  );
}

export default Home;
