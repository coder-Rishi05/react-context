import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [photo, setPhoto] = useState(null);
  const [number, setNumber] = useState(3);

  const [data, setData] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        `https://api.github.com/users?per_page=${number}`,
      );
      const jsonData = await data.json();
      setData(jsonData);
      console.log("hello");
      // setPhoto(jsonData[0].avatar_url);
    };
    api();
  }, [number]);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="w-full h-full py-4 bg-zinc-900 flex  items-center justify-center flex-col gap-10">
      <h1 className="text-3xl  font-mono font-bold text-zinc-200">
        Github users
      </h1>
      <input
        type="number"
        placeholder="Enter a number of users"
        value={number}
        onChange={handleChange}
        className="rounded placeholder:text-white font-bold text-white"
      />
      <div className="flex  items-center flex-wrap justify-center gap-10  ">
        {data.map((data, index) => (
          <div key={index} className="profileCard w-60  rounded-xl border-2">
            <img
              className="w-full object-cover object-center"
              src={data.avatar_url}
              alt=""
            />
          </div>
        ))}
      </div>
      <button
        className="px-3 py-2 bg-green-400 rounded-full text-white font-bold cursor-pointer "
        onClick={() => api()}
      >
        Get data
      </button>
    </div>
  );
};

export default UserProfile;
