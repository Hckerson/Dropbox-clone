export default function Ring({children, color}: {children: React.ReactNode, color : string}) {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900">
          <div style={{backgroundColor : color}} className="flex items-center justify-center w-6 h-6 rounded-full ">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
