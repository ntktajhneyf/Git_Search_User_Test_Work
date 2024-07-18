import { ChangeEvent, FunctionComponent } from "react";

interface Props {
  value: string;
  onChange: (s: string) => void;
}

const TextInput: FunctionComponent<Props> = ({ value, onChange }) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <input type="text" value={value} onChange={handleOnChange} />;
};

export default TextInput;
