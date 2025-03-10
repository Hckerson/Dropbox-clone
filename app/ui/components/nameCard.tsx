import clsx from "clsx"
export default function Initials({classname, color, name, bg } : {classname : string, color : string, name : string, bg : string}){
  return(
    <div style={{backgroundColor : bg, color : color}} className={clsx("box-border  cursor-pointer flex items-center justify-center ", classname)}>
      {name}
    </div>
  )
}