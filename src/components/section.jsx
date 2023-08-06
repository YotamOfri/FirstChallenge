import PropTypes from "prop-types";
// Supportive Function To WhiteSide.jsx
export function Section({ color, icon, title, number }) {
  return (
    <div
      className={`bg-${color} text-${color} rounded-md  w-full bg-opacity-5 flex justify-between items-center px-2 h-14`}
    >
      <div className="flex gap-2">
        <img src={icon} alt="" />
        <p>{title}</p>
      </div>
      <div className="flex gap-1">
        <p className="text-Neutral-Darkgrayblue">{number}</p>
        <span className=" text-Neutral-Darkgrayblue text-opacity-30">/</span>
        <p className=" text-Neutral-Darkgrayblue text-opacity-30">100</p>
      </div>
    </div>
  );
}
Section.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
};
