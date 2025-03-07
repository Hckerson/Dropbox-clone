import { SearchBar } from "../ui/components/search";
import { Upload } from "../ui/components/vgs";
import { Row } from "../ui/components/rowed_items";
import ActionCard from "../ui/components/action-card";
export default function page() {
  return (
    <div className="text-white w-full h-full px-10 py-3 flex-col space-y-4 bg-[#1a1918]  flex">
      <section className="w-full box-border flex space-x-2 items-center">
        <SearchBar />
        <div className=" shadow-lg flex items-center gap-x-1 max-h-min py-[6px] px-2 bg-stone-700 rounded-md">
          <div className="shrink-0">
            <span className="">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M21 17.5h-2v-2h-1.5v2h-2V19h2v2H19v-2h2v-1.5ZM9.25 13h5.5a2.746 2.746 0 0 1 2.12 1h1.75a4.25 4.25 0 0 0-3.72-2.489A4.818 4.818 0 0 0 15.5 9c0-2.287-1.036-3.694-2.864-3.952A4.25 4.25 0 0 0 12 5a4.707 4.707 0 0 0-.636.048C9.536 5.306 8.5 6.713 8.5 9a4.822 4.822 0 0 0 .6 2.508A4.25 4.25 0 0 0 5 15.75V19h9v-1.5H6.5v-1.75A2.753 2.753 0 0 1 9.25 13Zm2.572-1.504h-.031c-.882-.05-1.719-.45-1.719-2.494s.838-2.446 1.719-2.494h.031c.06-.008.119-.008.178-.008s.118 0 .178.004h.031c.882.05 1.719.45 1.719 2.494s-.838 2.446-1.719 2.494h-.031c-.06.008-.119.008-.178.008s-.118 0-.178-.004Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <p className="text-sm text-white min-w-max ">Invite members</p>
          </div>
        </div>
        <Row />
      </section>
      <section className="w-full box-border flex space-x-2 items-center">
        <ActionCard first={true} active={true} link="" name="upload">
          <Upload color=""/>
        </ActionCard>
      </section>
    </div>
  );
}
