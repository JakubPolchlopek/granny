type Props = {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }:Props) => {
  return (
    <input
      type="text"
      placeholder="Search courses..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        max-w-md
        px-4
        py-2
        rounded-full
        border
        border-gray-300
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
        focus:border-transparent
        transition
        placeholder-gray-400
        text-gray-900
        shadow-sm
      "
      spellCheck="false"
      autoComplete="off"
    />
  );
};

export default SearchBar;
