import { useEffect, useMemo, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function MSWrapper({
  options = [],
  selectedValues: selectedValuesProp,
  ...rest
}) {
  // STATE DECLARATIONS
  const [selectedValues, setSelectedValues] = useState([]);

  //   Update selected value from props if available
  useEffect(() => {
    if (Array.isArray(selectedValuesProp) && selectedValuesProp.length) {
      setSelectedValues(selectedValuesProp);
    }
  }, [selectedValuesProp]);

  // Add all option to Dropdown
  const optionsWillAll = useMemo(() => {
    if (!Array.isArray(options)) return;
    return [{ label: "All", value: "*" }, ...options];
  }, [options]);

  // Handle all option on select
  const handleOnSelect = (selectedList, selectedItem) => {
    if (selectedItem.value === "*") {
      setSelectedValues([...optionsWillAll]);
    } else if (selectedList.length === options.length) {
      setSelectedValues([...optionsWillAll]);
    }
  };

  // Handle all option on remove
  const handleOnRemove = (selectedList, selectedItem) => {
    if (selectedItem.value === "*") {
      setSelectedValues([]);
    } else if (selectedList.length === options.length) {
      setSelectedValues(selectedList.filter((sl) => sl.value !== "*"));
    }
  };

  const selectedValueDecorator = (v) => (v === "All" ? <></> : <>{v}, </>);

  return (
    <Multiselect
      {...rest}
      options={optionsWillAll}
      onKeyPressFn={function noRefCheck() {}}
      onSearch={function noRefCheck() {}}
      onSelect={handleOnSelect}
      onRemove={handleOnRemove}
      selectedValues={selectedValues}
      selectedValueDecorator={selectedValueDecorator}
      //   FOR COMMA SEPERATED VALUES
      customCloseIcon={<></>}
      style={{
        chips: {
          background: "none",
          color: "var(--Green-3, #2D5453)",
          padding: 0,
          margin: "0 4px 0 0",
        },
        multiselectContainer: {},
        searchBox: {},
      }}
    />
  );
}

export default MSWrapper;
