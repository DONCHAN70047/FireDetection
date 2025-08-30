import React, { useEffect, useState } from "react";

const Records = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/records`) 
      .then((res) => res.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching records:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Records</h1>
      {records.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
            No data is available at the moment. To use our software, please connect the hardware sensor components. Once connected, the software will function smoothly and all features will work properly.......💁‍♂️😊  <br />
            For any quarey you contact me with us our Hack2Skill group.....✉️😊😊      
        </p>
        
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {records.map((record, index) => (
            <div
              key={index}
              className="bg-black shadow-md rounded-2xl p-4 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{record.title}</h2>
              <p className="text-gray-600">{record.description}</p>
              <span className="text-sm text-gray-400">
                {new Date(record.created_at).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Records;
