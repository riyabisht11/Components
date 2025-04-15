import React, { useState } from "react";
import { FaLinkedin, FaCompass, FaCalendar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdGroups2, MdCloudUpload } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaLink } from "react-icons/fa6";
import LeadSourcePopup from "./LeadsSourcePopup";
import ListName from "./ListName";

const options = [
  {
    icon: <FaLinkedin />,
    name: "Basic LinkedIn Search",
    text: "Add profile from Search Page",
  },
  {
    icon: <FaCompass />,
    name: "LinkedIn Sales Navigator Search",
    text: "Add profile from Search Page",
  },
  {
    icon: <CgProfile />,
    name: "LinkedIn Recruiter Search",
    text: "Add profile from Search Page",
  },
  {
    icon: <FaCalendar />,
    name: "LinkedIn Event Members",
    text: "Add profile from Search Page",
  },
  {
    icon: <MdGroups2 />,
    name: "LinkedIn Group Members",
    text: "Add profile from Search Page",
  },
  {
    icon: <ImProfile />,
    name: "My Network",
    text: "Add profile from Search Page",
  },
  {
    icon: <MdCloudUpload />,
    name: "Upload CSV File",
    text: "Upload leads from your system",
  },
  {
    icon: <FaLink />,
    name: "Paste Profile URLs",
    text: "Manually add LinkedIn URLs",
  },
];

const AddLeadsPopup = ({ onClose, onOptionSelect }) => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchUrl, setSearchUrl] = useState("");
  const [leadCountType, setLeadCountType] = useState("max");
  const [customCount, setCustomCount] = useState("");
  const [listName, setListName] = useState("");

  const handleSelect = (name) => {
    setSelectedOption(name);
  };

  const isStep2Valid = () => {
    if (!searchUrl.trim()) return false;
    if (leadCountType === "custom" && (!customCount || customCount <= 0)) {
      return false;
    }
    return true;
  };

  const isStep3Valid = () => listName.trim().length > 0;

  const handleNext = () => {
    if (step === 1 && selectedOption) setStep(2);
    else if (step === 2 && isStep2Valid()) setStep(3);
    else if (step === 3 && isStep3Valid()) {
      onOptionSelect({
        selectedOption,
        searchUrl,
        leadCountType,
        customCount,
        listName,
      });
      onClose();
    }
  };

  const handleBack = () => {
    if (step === 1) onClose();
    else setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[60vw] h-[65vh] shadow-lg relative">
        {/* Step Indicator */}
        <div className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-4">
          <span className="uppercase">Create a list of leads below</span>
          <span className="text-gray-400 font-semibold">Step {step}/3</span>
        </div>
        <div className="flex gap-2 mb-6 w-[20%]">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 rounded-full flex-1 ${
                step >= s ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4">
              How would you like to add leads?
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {options.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.name)}
                  className={`cursor-pointer border rounded-md px-4 py-6 text-center transition flex flex-col items-center ${
                    selectedOption === item.name
                      ? "border-orange-500 text-orange-500 bg-orange-50"
                      : "hover:border-orange-400 hover:text-orange-500"
                  }`}
                >
                  <div className="mb-2 text-xl">{item.icon}</div>
                  <div className="font-medium text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.text}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && selectedOption === "Basic LinkedIn Search" && (
          <LeadSourcePopup
            searchUrl={searchUrl}
            setSearchUrl={setSearchUrl}
            leadCountType={leadCountType}
            setLeadCountType={setLeadCountType}
            customCount={customCount}
            setCustomCount={setCustomCount}
          />
        )}

        {/* Step 3 */}
        {step === 3 && (
          <ListName listName={listName} setListName={setListName} />
        )}

        {/* Buttons */}
        <div className="absolute bottom-4 right-6 flex justify-end gap-4">
          <button
            onClick={handleBack}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>
          <button
            onClick={handleNext}
            disabled={
              (step === 1 && !selectedOption) ||
              (step === 2 && !isStep2Valid()) ||
              (step === 3 && !isStep3Valid())
            }
            className={`px-4 py-2 rounded-md text-white transition ${
              (step === 1 && !selectedOption) ||
              (step === 2 && !isStep2Valid()) ||
              (step === 3 && !isStep3Valid())
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {step === 3 ? "Create" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLeadsPopup;
