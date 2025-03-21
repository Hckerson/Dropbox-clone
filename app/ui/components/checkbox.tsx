import { IoMdCheckmark } from "react-icons/io";

const CheckboxWithIcon = ({id, handleId}: {id: string, handleId: (id: string)=> void}) => {
  return (
    <div className="relative inline-flex">
      <input
        type="checkbox"
        id={id}
        onChange={()=>{

        }}
        className="h-[21px] w-[24px] group-hover:block hidden z-10 peer relative appearance-none shrink-0 border-2  checked:block  rounded-sm checked:  focus:outline-none  focus:ring-blue-100  checked:border-2 disabled:border-steel-400 disabled:bg-steel-400"
      />
      <span className="text-white text-sm  opacity-0 peer-checked:opacity-100">
        <IoMdCheckmark fill="white" stroke="white" className="absolute top-1/2 left-1/2 transform text-white -translate-x-1/2 -translate-y-1/2 " />
      </span>
    </div>
  );
};

export default CheckboxWithIcon;
