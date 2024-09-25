import Link from "next/link"
export  function GetStarted(){
  return (
    <div>
      <Link href="/nav/plans" className="bg-white rounded-md px-2 py-3 text-black font-semibold ">
        Get Started
      </Link>
    </div>
  )
}