import  { useState } from "react";

const BloodSearch = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleSearch = () => {
    alert(`Searching for ${bloodGroup} donors...`);
  };

  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-center text-red-500">Find Blood Donors</h2>
      <div className="flex justify-center mb-6">
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
        <button
          className="px-4 py-2 ml-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {bloodGroups.map((group) => (
          <div
            key={group}
            className="p-4 text-center bg-red-100 rounded-lg cursor-pointer hover:bg-red-200"
            onClick={() => {
              setBloodGroup(group);
              handleSearch();
            }}
          >
            <p className="text-lg font-semibold text-red-600">{group}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodSearch;
