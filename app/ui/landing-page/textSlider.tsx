type Cardprops = {
  id: number;
  body: string;
  name: string;
  role: string;
};
export default function Collection({
  body,
  name,
  role,
}: Cardprops) {
  return (
    <div
      className="flex box-border people"
      aria-hidden="false"
      role="group"
      aria-roledescription="slide"
    >
      <div className="flex flex-wrap box-border flex-row w-full">
        <div className="box-content px-6 lg:px-24  w-full flex">
          <div
            style={{ flexShrink: 1 }}
            className="flex snap-center people lg:flex-row flex-col box-border"
          >
            <div
              style={{  flexGrow: 1, flexShrink : 1}}
              className="flex flex-col box-border"
            >
              <div
                style={{ gridAutoFlow: "row", gridTemplateRows: "max-content" }}
                className="p-0 m-0  justify-stretch h-auto grid items-center text-center text-white box-border "
              >
                <div
                  style={{ overflowWrap: "anywhere", lineHeight: "150%" }}
                  className=" pb-8 p-0 m-0 font-normal text-base text-center box-border "
                >
                  {body}
                </div>
                <span className="p-0 m-0 font-medium text-center text-base">
                  <p className="font-medium text-sm text-stone-200">{name}</p>
                  <p className="text-stone-500 pt-3">{role}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
