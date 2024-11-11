

export default function Plans() {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <div className="w-full box-border">
            <div style={{width : 'fit-content'}} id="plans" className="grid gap-y-14 md:gap-y-0 box-border px-6 md:px-10 xl:px-0  ">
              <div className="py-4 px-14 grid gap-y-6 ">
                <div className="flex flex-col w-full box-border gap-y-4">
                  <legend>For professionals</legend>
                  <h2>Essentials</h2>
                  <span> / month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
