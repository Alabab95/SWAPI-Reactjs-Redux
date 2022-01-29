import React, { useEffect } from "react";
import Select, { components } from "react-select";
import { useDispatch } from "react-redux";
import { addStarshipToFleet } from "../redux/actions/fleetActions";

//import { colourOptions } from "./docs/data";
export const colourOptions = [];

// NOTE: callback methods are passed into Select from the App props
// They are set to pass message to the console log
const Option = ({ children, innerProps, ...props }) => {
  const { selectOption, data } = props;
  const dispatch = useDispatch();

  const onMouseDown = {
    label: () => selectOption(data),
  };
  const handleAdd = () => {
    console.log(data);
    dispatch(addStarshipToFleet(data.object));
  };

  const { onClick, ...newInnerProps } = innerProps;
  return (
    <components.Option {...props} innerProps={newInnerProps}>
      <span onClick={onMouseDown.label}>{children}</span>
      {!!props.isFocused && (
        <div>
          <button onClick={handleAdd}>+</button>
        </div>
      )}
    </components.Option>
  );
};

const CustomSelect = ({ options }) => {
  const styles = {
    option: (css) => ({
      ...css,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "2.5rem", // adding extra height to accomodate buttons
      span: { cursor: "pointer" },
      button: { cursor: "pointer" },
    }),
  };
  useEffect(() => {
    options.map((option) => {
      colourOptions.push({
        value: option.name,
        label: option.name,
        object: option,
      });
    });
  }, [options]);
  return (
    <Select
      styles={styles}
      components={{ Option }}
      closeMenuOnSelect={false}
      options={colourOptions}
      // custom props
    />
  );
};

export default CustomSelect;
