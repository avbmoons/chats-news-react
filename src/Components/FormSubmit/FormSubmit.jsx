import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "@emotion/react";
import "./FormSubmit.css";

export function FormSubmit({ onSubmit }) {
  const theme = useTheme();
  const ref = useRef(null);
  const focus = () => {
    ref.current.focus();
  };
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    focus();
    setValue("");
    onSubmit(value);
  };
  return (
    <form className="Form-submit" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="your text here..."
        variant="outlined"
        className="Submit-input"
        inputRef={ref}
        value={value}
        onChange={handleChange}
        focuced={"true"}
      />
      <Button
        variant="contained"
        className="Submit-btn"
        type="submit"
        style={{ backgroundColor: theme.palette.primary.main, height: "52px" }}
      >
        Send&nbsp;&#9658;
      </Button>
    </form>
  );
}
