import clsx from "clsx";
import { useState } from "react";

export default function List() {
  const [active, setActive] = useState("all");
  return (
    <ul className="flex flex-col box-border  space-y-2 px-3">
      <li className={clsx("inline-flex space-x-2 px-3 py-[5px] rounded-[7px]  cursor-pointer hover:bg-stone-800", active === "all" ? "bg-stone-800" : "")} onClick={() => setActive("all")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
          role="presentation"
          focusable="false"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 5v6.5H12V5H5.5Zm8 2.5v9h6v-9h-6Zm-9 11V13H12v5.5H4.5Z"
            fill={clsx("", active === "all" ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
        <div>
          <p className={clsx("font-light text-sm", active === "all" ? "text-white" : "text-stone-400")}>
            All files
          </p>
        </div>
      </li>
      <li className={clsx("inline-flex space-x-2 px-3 py-[5px] rounded-[7px]  cursor-pointer hover:bg-stone-800", active === "photos" ? "bg-stone-800" : "")} onClick={() => setActive("photos")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
          role="presentation"
          focusable="false"
        >
          <path
            d="M10 11.5a1.392 1.392 0 0 0 1.5-1.5A1.392 1.392 0 0 0 10 8.5 1.393 1.393 0 0 0 8.5 10a1.393 1.393 0 0 0 1.5 1.5Z"
            fill={clsx("", active === "photos"  ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="m19.01 12.915-.01-.008V5H5v14h14v-6.075l.01-.01ZM17.5 6.5v5.015l-.091-.085a3.254 3.254 0 0 0-4.596 0l-2.171 2.17a.77.77 0 0 1-1.06 0l-.38-.38a2.25 2.25 0 0 0-2.7-.354V6.5H17.5Zm-11 11v-2.636l.58-.58a.75.75 0 0 1 1.06 0l.38.38a2.25 2.25 0 0 0 3.181 0l2.172-2.172a1.76 1.76 0 0 1 2.495.02L17.5 13.56v3.94h-11Z"
            fill={clsx("", active === "photos"  ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
        <div>
          <p className={clsx("font-light text-sm", active === "photos" ? "text-white" : "text-stone-400")}>
            Photos
          </p>
        </div>
      </li>
      <li className={clsx("inline-flex space-x-2 px-3 py-[5px] rounded-[7px]  cursor-pointer hover:bg-stone-800", active === "shares" ? "bg-stone-800" : "")} onClick={() => setActive("shares")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
          role="presentation"
          focusable="false"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15.5h5.25L9 14H4.5v-1.352a2.128 2.128 0 0 1 2.125-2.125h4.174l.736-1.473c.186-.492.26-1.043.26-1.618 0-1.063-.254-2.047-.995-2.72C10.08 4.06 9.215 4 8.75 4c-.465 0-1.33.059-2.05.713-.74.672-.995 1.656-.995 2.719 0 .587.077 1.15.271 1.65A3.628 3.628 0 0 0 3 12.646V15.5Zm7.296-8.068c0 .838-.198 1.319-.485 1.59-.299.284-.694.342-1.061.342s-.762-.058-1.061-.341c-.286-.272-.484-.753-.484-1.591 0-1.713.826-1.932 1.545-1.932.72 0 1.546.22 1.546 1.932ZM21.01 20H9.532v-2.85a3.622 3.622 0 0 1 2.967-3.559c-.193-.497-.27-1.058-.27-1.642 0-1.061.254-2.044.994-2.715.72-.654 1.583-.712 2.048-.712.464 0 1.327.058 2.047.712.74.671.994 1.654.994 2.715 0 .584-.077 1.145-.27 1.642a3.622 3.622 0 0 1 2.968 3.559V20Zm-7.859-4.968a2.122 2.122 0 0 0-2.12 2.12V18.5h8.479v-1.349a2.121 2.121 0 0 0-2.12-2.12h-4.239Zm3.182-1.5c.284-.272.48-.751.48-1.583 0-1.708-.825-1.927-1.542-1.927-.718 0-1.542.219-1.542 1.927 0 .832.196 1.31.48 1.583.298.286.694.344 1.062.344.368 0 .764-.058 1.062-.344Z"
            fill={clsx("", active === "shares"  ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
        <div>
          <p className={clsx("font-light text-sm", active === "shares" ? "text-white" : "text-stone-400")}>
            Shares
          </p>
        </div>
      </li>
      <li className={clsx("inline-flex space-x-2 px-3 py-[5px] rounded-[7px]  cursor-pointer hover:bg-stone-800", active === "signature" ? "bg-stone-800" : "")} onClick={() => setActive("signature")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
          role="presentation"
          focusable="false"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.852 8.937v7.523l-2.438 3.6-2.439-3.6V6.147c0-.59.248-1.147.678-1.552.428-.403.998-.62 1.582-.62h.353a2.267 2.267 0 0 1 1.589.623c.428.404.675.96.675 1.549v1.29h3.288v4.582h-1.5V8.937H8.852Zm-2.25-3.462a.767.767 0 0 1 .539.207l.005.005a.63.63 0 0 1 .206.46v1.29H5.475v-1.29a.63.63 0 0 1 .206-.46.808.808 0 0 1 .554-.212h.367ZM5.475 8.937V16l.939 1.385L7.352 16V8.937H5.475Zm9.618 6.613c-.213.074-.528.248-.94.549-.475.347-.997.802-1.52 1.289-.449.418-.886.848-1.284 1.24l-.188.184c-.43.423-.836.817-1.122 1.043l-.93-1.178c.209-.164.547-.49 1.002-.936l.184-.181c.398-.391.85-.836 1.316-1.27a18.965 18.965 0 0 1 1.656-1.402c.522-.381 1.111-.74 1.67-.845l.012-.002.012-.002c.34-.053.724-.025 1.054.203.331.228.476.566.535.85.109.526-.012 1.163-.142 1.673-.097.379-.22.768-.337 1.114a20.88 20.88 0 0 0 1.056-.684l.066-.045.11-.073a1.302 1.302 0 0 1 .883-.214c.328.048.553.239.69.435a1.6 1.6 0 0 1 .21.469c.02.066.045.167.064.245l.024.091a.968.968 0 0 0 .087.244.6.6 0 0 0 .206-.004l1.302-.358.398 1.447-1.381.38-.039.006c-.575.095-1.098.003-1.491-.355-.305-.278-.436-.639-.506-.88l-.045.03c-.266.178-.618.409-.974.619-.342.202-.736.414-1.072.527-.15.05-.397.12-.655.085a.912.912 0 0 1-.511-.241.895.895 0 0 1-.27-.555 1.21 1.21 0 0 1 .022-.357 3.1 3.1 0 0 1 .067-.268c.05-.176.122-.387.196-.603l.027-.08c.145-.427.306-.899.42-1.346.096-.378.137-.66.138-.843Zm4.15 2.79s.005 0 .012.005c-.01-.003-.012-.006-.012-.006Z"
            fill={clsx("", active === "signature" ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
        <div>
          <p className={clsx("font-light text-sm", active === "signature" ? "text-white" : "text-stone-400")}>
            Signatures
          </p>
        </div>
      </li>
      <li className={clsx("inline-flex space-x-2 px-3 py-[5px] rounded-[7px]  cursor-pointer hover:bg-stone-800", active === "requests" ? "bg-stone-800" : "")} onClick={() => setActive("requests")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
          role="presentation"
          focusable="false"
        >
          <path
            d="m13.22 11.22-2.72 2.72V12H9v4.5h4.5V15h-1.94l2.72-2.72-1.06-1.06Z"
            fill={clsx("", active === "requests" ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="m17.341 6.03-1.372-1.37A2.265 2.265 0 0 0 14.38 4H5.5v16H18V7.621a2.265 2.265 0 0 0-.659-1.59ZM7 18.5v-13h7V8h2.5v10.5H7Z"
            fill={clsx("", active === "requests" ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
        <div>
          <p className={clsx("font-light text-sm", active === "requests" ? "text-white" : "text-stone-400")}>
           Files requests
          </p>
        </div>
      </li>
      <li className={clsx("inline-flex space-x-2 px-3 py-[5px] rounded-[7px]  cursor-pointer hover:bg-stone-800", active === "deleted" ? "bg-stone-800" : "")} onClick={() => setActive("deleted")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="20"
          height="20"
          role="presentation"
          focusable="false"
        >
          <path
            d="M19.5 7h-4v-.75A2.25 2.25 0 0 0 13.25 4h-2.997a2.25 2.25 0 0 0-2.25 2.255V7H4v1.5h1.591l1.245 9.541A2.256 2.256 0 0 0 9.067 20h5.366a2.256 2.256 0 0 0 2.231-1.959L17.908 8.5H19.5V7Zm-9.997-.75a.75.75 0 0 1 .75-.75h2.997a.75.75 0 0 1 .75.75V7H9.505l-.002-.75Zm5.674 11.595a.75.75 0 0 1-.744.655H9.067a.75.75 0 0 1-.744-.654L7.104 8.5h9.292l-1.219 9.345Z"
            fill={clsx("", active === "deleted" ? "white" : "gray")}
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
        <div>
          <p className={clsx("font-light text-sm", active === "deleted" ? "text-white" : "text-stone-400")}>
            Deleted files
          </p>
        </div>
      </li>
    </ul>
  );
}
