import { GrFormUpload } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { RiFolderAddLine } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";
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

export function Upload({ color }: { color: string }) {
  return <GrFormUpload fill={color} />;
}

export function Create({ color }: { color: string }) {
  return <IoMdAdd />;
}

export function Folder({ color }: { color: string }) {
  return <RiFolderAddLine />;
}

export function App({ color }: { color: string }) {
  return <RiDownloadLine />;
}

export function Transfer({ color }: { color: string }) {
  return <BiTransfer />;
}

export function Share({ color }: { color: string }) {
  return <IoShareOutline />;
}
