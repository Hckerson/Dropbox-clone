import React, {
  useState,
  ChangeEvent,
  DragEvent,
  useEffect,
  useRef,
} from "react";
import { PiUploadSimple } from "react-icons/pi";
import { Label } from "@/components/ui/label";
import CheckboxWithIcon from "./checkbox";
import { Switch } from "@/components/ui/switch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Down, App, Share, Up } from "./vgs";
import Image from "next/image";
import clsx from "clsx";
interface FileWithSize extends File {
  size: number;
}

export default function FileUpload({
  handler,
  factor,
}: {
  handler: (response: boolean) => void;
  factor: boolean;
}) {
  const [files, setFiles] = useState<FileWithSize[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Handle drag-and-drop
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files) as FileWithSize[];
      setFiles(droppedFiles);
      uploadFiles(droppedFiles);
      handler(true);
    } else {
      handler(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files) as FileWithSize[];
      setFiles(selectedFiles);
      uploadFiles(selectedFiles);
      handler(true);
    } else {
      handler(false);
    }
    onFileSelected(e);
  };

  function onFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0]; // Optional chaining for files array
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      if (!loadEvent.target?.result || !imageRef.current) {
        console.log("na");
      } else {
        imageRef.current.src = loadEvent.target.result as string;
      }
    };
    reader.readAsDataURL(selectedFile);
  }
  // Upload files to the server
  const uploadFiles = async (files: FileWithSize[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    // try {
    //   const response = await fetch("http://localhost:5000/upload", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   console.log("Files uploaded successfully:", data);
    // } catch (error) {
    //   console.error("Error uploading files:", error);
    // }
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div
      className={clsx(
        "w-full   border-stone-600 ",
        {
          "p-8 mt-10 box-border relative  border-2 border-dashed":
            factor == false,
        },
        isDragging ? "bg-stone-800" : "bg-[#1a1918]"
      )}
    >
      {!factor ? (
        <div
          className={` relative items-center flex flex-col rounded-lg scrollbar pb-4 overflow-y-auto  text-center py-12`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => {
            handleDrop(e);
          }}
        >
          <PiUploadSimple className="size-14 text-stone-500" />
          <div className="absolute right-7 top-3 size-5">
            <Switch
              id="folder"
              onClick={() => {
                setChecked(!checked);
                const upload = document.getElementById("fileInput");
                if (upload?.hasAttribute("webkitdirectory")) {
                  upload.removeAttribute("webkitdirectory");
                } else {
                  upload?.toggleAttribute("webkitdirectory");
                  upload?.setAttribute("webkitdirectory", "true");
                }
              }}
              checked={checked}
            />
            <Label htmlFor="folder">Folder</Label>
          </div>
          <p className="text-stone-500">Drop files here to upload</p>
          <p className="text-gray-400 text-sm mt-2">or</p>
          <input
            type="file"
            multiple={true}
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="mt-2 inline-block px-3 py-1 rounded-xl bg-stone-600 text-white  cursor-pointer"
          >
            Browse {checked ? "Folder" : "Files"}
          </label>
        </div>
      ) : (
        <div className=" relative box-border ">
          <div className=" pl-8 flex justify-between">
            <div className={clsx(" space-x-3", !factor ? "hidden" : "flex")}>
              <span
                style={{ verticalAlign: "center" }}
                className="inline-flex items-center text-black space-x-2 py-1 px-2 rounded-lg bg-white"
              >
                <Share />
                <p>Share selected</p>
                <Down />
              </span>
              <span
                style={{ verticalAlign: "center" }}
                className="inline-flex items-center space-x-2 py-1 px-2 rounded-lg bg-stone-800 "
              >
                <App />
                <p>Download</p>
              </span>
              <span
                style={{ verticalAlign: "center" }}
                className="inline-flex items-center space-x-2 py-1 px-2 rounded-lg bg-stone-800 "
              >
                <DeleteOutlineIcon className="size-4" />
                <p>Delete</p>
              </span>
            </div>
            <div className="flex box-border relative font-bold">
              {files.length} Selected
            </div>
          </div>

          {files.length > 0 && (
            <div className=" w-full pt-3">
              <table className="table-auto w-full">
                <thead className="">
                  <tr className="">
                    <th className="pl-10 text-start font-normal ">
                      <span>
                        Name{" "}
                        <span className="inline-flex">
                          <Up classes="size-3" />
                        </span>
                      </span>
                    </th>
                    <th className="text-start font-normal ">Who can choose</th>
                    <th className="text-start font-normal ">Modify</th>
                  </tr>
                </thead>
                <tbody className="">
                  {files.map((file, index) => {
                    console.log(file);
                    const last = file?.lastModified;
                    const date = new Date(last);
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;
                    const day = date.getDate();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();

                    const names = file.name.split(".")[1];
                    const routes = {
                      jpg: URL.createObjectURL(file),
                      png: URL.createObjectURL(file),
                      jpeg: URL.createObjectURL(file),
                      mp4: "/images/mp4.jpg",
                      mp3: "/images/mp3.webp",
                      pdf: "/images/pdf.webp",
                      doc: "/images/doc.png",
                      docx: "/images/docx.png",
                      txt: "/images/txt.png",
                    };
                    const sources =
                      routes[names as keyof typeof routes] ||
                      "/images/unknown.jpeg";
                    return (
                      <tr
                        key={index}
                        className={clsx(
                          "h-[39px] border-white bg-[#1a1918] group hover:bg-black  w-full border-opacity-20 py-2 border-b-[1px]",
                          { "border-t-[1px]": index == 0 }
                        )}
                      >
                        <td className=" text-start text-base font-light w-[70%]">
                          <div className="flex  items-center">
                            <div className="px-2 flex items-center w-[40px]">
                              <CheckboxWithIcon id={file.name} />
                            </div>
                            <div
                              className="shrink-0 h-full max-w-[40px] px-0   max-h-[30px] flex items-center "
                              style={{ aspectRatio: 16 / 9 }}
                            >
                              <Image
                                ref={imageRef}
                                id={`decide-${index}`}
                                className="max-h-[30px] relative border-white  py-[2px]  border-opacity-20 border-[1px] "
                                alt="file preview"
                                src={sources}
                                width={750}
                                height={500}
                              ></Image>
                            </div>
                            <p className=" text-start text-nowrap text-[14px] font-light pl-3">
                              {`${index}`}
                            </p>
                          </div>
                        </td>
                        <td className=" text-start text-base font-light">
                          Only you
                        </td>
                        <td className=" text-start text-base font-light lg:block hidden text-nowrap">
                          {`${day}/${month}/${year} ${hours}:${minutes}  ${hours >= 12 ? "PM" : "AM"}`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <ul></ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
