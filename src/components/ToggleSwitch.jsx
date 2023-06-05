import { sun, moon } from "../assets";
const ToggleSwitch = ({ handleToggle }) => {
  return (
    <div className="flex flex-col fixed left-3 top-[70%] justify-center gap-3">
      <img src={moon} className="w-[32px]" />
      <div className="toggleswitch__container">
        <label className="absolute left-0 top-0">
          <input className="toggleswitch__input" type="checkbox" onClick={handleToggle} />
          <span className="toggleswitch__slider"></span>
        </label>
      </div>
      <img src={sun} className="w-[32px]" />
    </div>
  );
};

export default ToggleSwitch;
