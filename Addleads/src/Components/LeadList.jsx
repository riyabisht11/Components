import React from "react";
import { MdDelete } from "react-icons/md";

const LeadList = ({ leadLists, onAddNewList, onDeleteList }) => {
  return (
    <div>
      {leadLists.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <p className="mb-4 text-gray-600 text-lg">
            Add leads from LinkedIn to this campaign
          </p>
          <button
            onClick={onAddNewList}
            className="px-6 py-2 border-2 border-orange-600 text-orange-600 rounded-md hover:bg-orange-100"
          >
            Add leads
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Header after creating lead */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Lists of leads</h2>
            <button
              onClick={onAddNewList}
              className="px-4 py-2 border-2 bg-orange-500 text-white rounded-md  text-sm"
            >
              Add a new list
            </button>
          </div>

          {/* lead cards */}
          <div className="grid gap-4 w-[30vw]">
            {leadLists.map((list, idx) => (
              <div
                key={idx}
                className="border rounded-md px-6 py-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium">{list.listName}</h3>
                  <div className="text-xs text-gray-500 flex gap-4 mt-1">
                    <span>Added leads: {list.addedLeads}</span>
                    <span>Source: {list.selectedOption}</span>
                    <span>Created: {list.createdAt}</span>
                  </div>
                </div>
                <button
                  className="text-3xl text-orange-500 hover:text-red-500"
                  onClick={() => onDeleteList(idx)}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadList;
