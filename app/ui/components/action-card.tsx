
interface Card{
  first : boolean
  active : boolean
  link : string
  name : string
  children : React.ReactNode
}
export default function ActionCard({first, active, link, name, children}: Card){
  return(
    <div className="w-200px  rounded-lg box-border">
      {children}
    </div>
  )
}