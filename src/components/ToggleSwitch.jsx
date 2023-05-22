import { sun, moon } from "../assets";
const ToggleSwitch = ({ handleToggle }) => {
  return (
    <div className="flex flex-col fixed left-3 top-[600px] justify-center gap-3">
      <img src={sun} className="w-[32px]" />
      <div className="toggleswitch__container">
        <label className="toggleswitch">
          <input className="toggleswitch__input" type="checkbox" onClick={handleToggle} />
          <span className="toggleswitch__slider"></span>
        </label>
      </div>

      <img src={moon} className="w-[32px]" />
    </div>
  );
};

export default ToggleSwitch;
