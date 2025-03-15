import React, {
  useState,
  ChangeEvent,
  DragEvent,
  useEffect,
  useRef,
} from "react";
import { PiUploadSimple } from "react-icons/pi";
import { Label } from "@/components/ui/label";
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
  handler: (response : boolean)=> void;
  factor: boolean;
}) {
  const [files, setFiles] = useState<FileWithSize[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Handle file selection
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

  // Handle drag-and-drop
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  function onFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0]; // Optional chaining for files array
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      if (!loadEvent.target?.result || !imageRef.current) return;
      setFiles(prev => [...prev, selectedFile]);
      imageRef.current.src = loadEvent.target.result as string;
    };

    reader.readAsDataURL(selectedFile);
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files) as FileWithSize[];
      setFiles(droppedFiles);
      uploadFiles(droppedFiles);
    }
  };

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

  useEffect(() => {}, [checked]);

  return (
    <div
      className={clsx("w-full h-full  border-stone-600", {
        "p-8 mt-10 box-border relative  border-2 border-dashed":
          factor == false,
      })}
    >
      {!factor ? (
        <div
          className={` relative items-center flex flex-col rounded-lg scrollbar overflow-y-auto max-h-[350px] text-center py-12 ${
            isDragging ? "bg-stone-800" : "bg-[#1a1918]"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
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
          <div className="flex justify-between">
            <div className="flex space-x-3">
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
            <div className=" w-full">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-start font-normal ">
                      Name{" "}
                      <span className="inline-flex">
                        <Up classes="size-3" />
                      </span>
                    </th>
                    <th className="text-start font-normal ">Who can choose</th>
                    <th className="text-start font-normal ">Modify</th>
                  </tr>
                </thead>
                <tbody className="">
                  {files.map((file, index) => {
                    return (
                      <tr
                        key={index}
                        className={clsx("max-h-[30px] border-white border-opacity-20 border-b-[1px]")}
                      >
                        <td className="w-3/5 text-start flex items-center space-x-3">
                          {" "}
                          <div
                            className="shrink-0 h-full w-[50px] max-h-[30px] flex items-center "
                            style={{ aspectRatio: 16 / 9 }}
                          >
                            <Image
                              ref={imageRef}
                              id={`decide-${index}`}
                              className="max-h-[30px] relative"
                              alt="file preview"
                              src={URL.createObjectURL(file)}
                              width={750}
                              height={500}
                            ></Image>
                          </div>
                          <p className=" text-start text-nowrap text-[14px] font-light">{file.name}</p>
                        </td>
                        <td className=" text-start text-base font-light">Only you</td>
                        <td className=" text-start text-base font-light text-nowrap">
                          {/* {(file.size / 1024).toFixed(2)} KB */}
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
