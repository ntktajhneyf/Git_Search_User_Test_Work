import { ChangeEvent, FunctionComponent } from "react";

interface Props {
  value: string;
  onChange: (newText: string) => void;
}

const SearchInput: FunctionComponent<Props> = ({ value, onChange }) => {
  //   const value = props.value;
  //   const onChange = props.onChange;

  //   const { value, onChange } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default SearchInput;
