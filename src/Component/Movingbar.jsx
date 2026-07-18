import React from "react";

const Movingbar = () => {
  return (
    <div className="flex bg-[#29241f] text-[#d2cabc] justify-between p-2">
      <div className="flex"> <span className="bg-[#E89A6C] w-2 h-2 m-[auto] mr-1.5 rounded-[50%]"></span> Free pickup within 5 km · Pay maker directly</div>
      <div className="flex gap-9.5">
        <a href="" className="text-[#d2cabc]">Track Order</a>
        <a href="" className="text-[#d2cabc]">Help</a>
        <select id="language" name="language">
            <option value="English">English</option>
        </select>
      </div>
    </div>
  );
};

export default Movingbar;
