import { ExpressV9 } from "../components/expression";
import { collabsV2 } from "../navbar/links";
import { SmallPicV3 } from "../components/why-rep";
import { ComplexFaq } from "../components/FAQ";
export default function Edge() {
  return (
    <div className="box-border w-full bg-[#f7f5f2] ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1280px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
        >
          <ExpressV9/>
          <div>
            <SmallPicV3 collabsV2={collabsV2} />
          </div>
          <ComplexFaq/>
        </div>
      </div>

    </div>
  );
}
