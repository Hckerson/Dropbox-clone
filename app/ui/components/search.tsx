import { MdSearch } from "react-icons/md";
export function SearchBar() {
  return (
    <div className="w-full flex rounded-lg space-x-1 border-opacity-25 border-2 hover:border-white hover:border-[1px] hover:border-opacity-65 border-stone-500">
      <span className="inline-flex items-center justify-center pl-3">
        <MdSearch className="size-5 text-stone-600" />
      </span>
      <input
        type="text" 
        className=" w-full bg-[#1a1918] outline-none rounded-lg p-2 placeholder:text-stone-500"
        placeholder="Search"
      />
    </div>
  );
}
