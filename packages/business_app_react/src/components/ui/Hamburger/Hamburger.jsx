import PropTypes from "prop-types";

const Hamburger = ({ variant, isDisabled, children }) => {
  const buttonTheme = () => {
    switch (variant) {
      case "success":
        return "bg-green-600 hover:bg-green-700";
      case "danger":
        return "bg-red-600 hover:bg-red-700";
      case "warning":
        return "bg- hover:bg-red-700";
      default:
        break;
    }
  };
  // const disabledUi = () => {
  //   if (isDisabled){
  //     return
  //   }
  // }
  return (
    <button
      disabled={isDisabled}
      className={
        buttonTheme() +
        " py-2 px-4 my-2 mx-2 rounded disabled:opacity-60 disabled:cursor-not-allowed"
      }
    >
      {children}
    </button>
  );
};

Hamburger.defaultProps = {
  variant: "success",
  isDisabled: false,
};

Hamburger.propTypes = {
  variant: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Hamburger;
