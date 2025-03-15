import { GrFormUpload } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import {
  RiDownloadLine,
  RiFolderAddLine,
} from "react-icons/ri";
import { ImBin } from "react-icons/im";
import { IoShareOutline } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { FaAngleDown, FaArrowUp } from "react-icons/fa6";
import clsx from "clsx";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { LuChartPie } from "react-icons/lu";
import { BiTransfer } from "react-icons/bi";
export function Box({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      className="dig-UIIcon dig-UIIcon--small _donut-space-visualizer-children_a19pf_139"
      width="16"
      height="16"
      role="presentation"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4h.75c5.215 0 7.75 2.535 7.75 7.75s-2.535 7.75-7.75 7.75c-3.668 0-6.06-1.326-7.109-3.943l-.25-.616L11 11.306V4ZM6.316 15.595C7.239 17.232 8.986 18 11.75 18c4.323 0 6.25-1.927 6.25-6.25 0-4.064-1.704-6.01-5.5-6.229v6.673l-6.184 3.4Z"
        fill={color}
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M9.5 5.724c-2.746.619-4 2.544-4 6.026 0 .296.011.58.03.854l-1.43.786a13.42 13.42 0 0 1-.1-1.64c0-4.396 1.81-6.881 5.5-7.554v1.529Z"
        fill={color}
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  );
}

export function Sign() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className=""
      width="24"
      height="24"
      role="presentation"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.852 8.937v7.523l-2.438 3.6-2.439-3.6V6.147c0-.59.248-1.147.678-1.552.428-.403.998-.62 1.582-.62h.353a2.267 2.267 0 0 1 1.589.623c.428.404.675.96.675 1.549v1.29h3.288v4.582h-1.5V8.937H8.852Zm-2.25-3.462a.767.767 0 0 1 .539.207l.005.005a.63.63 0 0 1 .206.46v1.29H5.475v-1.29a.63.63 0 0 1 .206-.46.808.808 0 0 1 .554-.212h.367ZM5.475 8.937V16l.939 1.385L7.352 16V8.937H5.475Zm9.618 6.613c-.213.074-.528.248-.94.549-.475.347-.997.802-1.52 1.289-.449.418-.886.848-1.284 1.24l-.188.184c-.43.423-.836.817-1.122 1.043l-.93-1.178c.209-.164.547-.49 1.002-.936l.184-.181c.398-.391.85-.836 1.316-1.27a18.965 18.965 0 0 1 1.656-1.402c.522-.381 1.111-.74 1.67-.845l.012-.002.012-.002c.34-.053.724-.025 1.054.203.331.228.476.566.535.85.109.526-.012 1.163-.142 1.673-.097.379-.22.768-.337 1.114a20.88 20.88 0 0 0 1.056-.684l.066-.045.11-.073a1.302 1.302 0 0 1 .883-.214c.328.048.553.239.69.435a1.6 1.6 0 0 1 .21.469c.02.066.045.167.064.245l.024.091a.968.968 0 0 0 .087.244.6.6 0 0 0 .206-.004l1.302-.358.398 1.447-1.381.38-.039.006c-.575.095-1.098.003-1.491-.355-.305-.278-.436-.639-.506-.88l-.045.03c-.266.178-.618.409-.974.619-.342.202-.736.414-1.072.527-.15.05-.397.12-.655.085a.912.912 0 0 1-.511-.241.895.895 0 0 1-.27-.555 1.21 1.21 0 0 1 .022-.357 3.1 3.1 0 0 1 .067-.268c.05-.176.122-.387.196-.603l.027-.08c.145-.427.306-.899.42-1.346.096-.378.137-.66.138-.843Zm4.15 2.79s.005 0 .012.005c-.01-.003-.012-.006-.012-.006Z"
        fill="currentColor"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  );
}

export function Review() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="dig-UIIcon dig-UIIcon--standard _donut-space-visualizer-children_a19pf_139"
      width="24"
      height="24"
      role="presentation"
      focusable="false"
    >
      <path
        d="M4.95 15.058V8.91L12 3.975v6.099l-2.705 1.918L12 13.894v6.131l-7.05-4.967Zm7.05 0V8.91l7.05-4.935v6.099l-2.705 1.918 2.705 1.902v6.131L12 15.058Z"
        fill="currentColor"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  );
}

export function Bin() {
  return <ImBin className="size-4" />;
}

export function Upload() {
  return <GrFormUpload color="black" className="size-4" />;
}

export function Down() {
  return <FaAngleDown className="size-4" />;
}

export function Up({classes }:{classes : string}) {
  return <FaArrowUp  className={clsx("FaArrowUp ", classes)} />;
}

export function Create() {
  return <IoMdAdd className="size-4" />;
}

export function Folder() {
  return <RiFolderAddLine className="size-4" />;
}

export function Pie() {
  return <LuChartPie className="size-4" />;
}

export function Pic() {
  return <AiOutlinePicture className="size-4" />;
}

export function Pdf() {
  return <FaFilePdf className="size-4" />;
}

export function App() {
  return <RiDownloadLine className="size-4" />;
}

export function Tele() {
  return <MdOutlineOndemandVideo className="size-4" />;
}

export function Transfer() {
  return <BiTransfer className="size-4" />;
}

export function Share() {
  return <IoShareOutline className="size-4" />;
}
