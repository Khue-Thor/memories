import React, { useState } from "react";
import { logo } from "../assets";
import { Search } from "react-bootstrap-icons";
import { XLg } from "react-bootstrap-icons";
const Header = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [enteredWord, setEnteredWord] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setEnteredWord(searchWord);
    const newFilter = data.filter((value) => {
      return value.openSeaMetadata.collectionName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setEnteredWord([]);
  };

  return (
    <div className="border-b-[1px] border-white ml-5 mr-5 pb-5 pt-5 header flex gap-10">
      <img src={logo} alt="logo" className="xl:min-w-[250px] hover:cursor-pointer" />
      <div className="relative flex items-end">
        <div className="relative z-20">
          <input
            type="text"
            placeholder={placeholder}
            className="w-[300px] h-25px] p-2 pl-10 rounded-full text-black"
            onChange={handleFilter}
            value={enteredWord}
          />
          <div className="absolute left-3 top-3">
            {enteredWord.length == 0 ? (
              <Search className="text-black w-5 h-5" />
            ) : (
              <XLg className="text-black w-5 h-5 cursor-pointer" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="scroll bg-white text-black z-10 absolute left-[-25px] top-[-10px] pt-[60px] pb-[20px] pr-[20px] w-[500px] rounded-3xl pl-[25px] flex flex-col gap-1">
            <span className="font-bold pl-[20px] text-gray-400 text-sm">COLLECTIONS</span>
            {filteredData.slice(0, 6).map((value, key) => {
              return (
                <div
                  key={key}
                  className="flex justify-between hover:bg-purple-100 pt-1 pb-1 pr-3 pl-3 rounded-xl cursor-pointer"
                >
                  <div className=" p-1 flex gap-3">
                    <img src={value.openSeaMetadata.imageUrl} className="w-9 h-9 rounded-xl" />
                    <div className="flex flex-col">
                      <span>{value.openSeaMetadata.collectionName}</span>
                      <span className="text-gray-400 text-xs">{value.totalSupply} items</span>
                    </div>
                  </div>
                  <span>{value.openSeaMetadata.floorPrice} ETH</span>
                </div>
              );
            })}
            <span className="font-bold pl-[20px] text-gray-400 text-sm">ACCOUNTS</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
