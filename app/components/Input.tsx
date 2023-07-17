import { BiSearchAlt } from "react-icons/bi";

interface InputProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setCity }: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        placeholder="Search City"
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        onKeyDown={handleSearch}
        onChange={handleInputChange}
      />
      <div className="ml-[-25px] text-white cursor-pointer">
        <BiSearchAlt />
      </div>
    </form>
  );
};

export default Input;
