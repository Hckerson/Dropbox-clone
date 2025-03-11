import React, {
  useState,
  ChangeEvent,
  DragEvent,
  useEffect,
} from "react";
import { PiUploadSimple } from "react-icons/pi";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
interface FileWithSize extends File {
  size: number;
}

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<FileWithSize[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files) as FileWithSize[];
      setFiles(selectedFiles);
      uploadFiles(selectedFiles);
    }
  };

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

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div
      className={`p-8 border-2 border-dashed border-stone-600 relative items-center flex flex-col rounded-lg text-center py-12 ${
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
        multiple
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

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Uploaded Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="text-gray-700">
                {file.name} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
