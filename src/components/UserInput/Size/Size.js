import React, { useState } from "react";
import { SizeContainer, SizeSelector, SizeInput } from "./styles/Size";
import { InputLabel } from "../styles/UserInput";

export function Size(props) {
  const [value, setValue] = useState(1000);

  const handleChange = (e) => {
    props.function(e);
    setValue(e.target.value);
  };

  const handleSelect = (e) => {
    e.target.focus();
    e.target.select();
  };

  return (
    <SizeContainer>
      <InputLabel>{props.label}</InputLabel>
      <SizeSelector>
        <SizeInput
          onChange={handleChange}
          onClick={handleSelect}
          placeholder={value}
          value={value}
        />
        <p>X</p>
        <SizeInput
          onChange={handleChange}
          onClick={handleSelect}
          value={value}
          placeholder={value}
        />
      </SizeSelector>
    </SizeContainer>
  );
}

export default Size;
