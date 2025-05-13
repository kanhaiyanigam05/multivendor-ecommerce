"use client";
import { parseCookies } from "nookies";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const setAuthHeader = (token) => ({
  Authorization: token ? `Bearer ${token}` : "",
});

const DropZone = ({
  multiple = true,
  onChange = () => {},
  value = [],
  uploadUrl = `${process.env.NEXT_PUBLIC_LARAVEL_URL}/admin/media`,
  ...props
}) => {
  const [files, setFiles] = useState(value || []);
  const token = parseCookies().authToken;

  useEffect(() => {
    const areEqual = JSON.stringify(files) === JSON.stringify(value || []);
    if (!areEqual) {
      setFiles(value || []);
    }
  }, [value]);

  const uploadFiles = async (filesToUpload) => {
    const formData = new FormData();
    filesToUpload.forEach((file) => {
      formData.append("file[]", file); // Laravel expects array if multiple
    });

    try {
      const response = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          ...setAuthHeader(token),
        },
        body: formData,
      });

      const result = await response.json();
      console.log("Upload success:", result);

      // Assuming 'result.data' contains the uploaded media objects from Laravel response
      // If multiple files are uploaded, append each file's result
      if (response.ok) {
        const uploadedData = result.data || []; // Data could be an array of media objects        
        onChange(multiple ? [...files, ...uploadedData] : uploadedData[0]);
      } else {
        // Handle failure if response is not okay
        console.error("Upload failed:", result.error);
      }
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      const newFiles = multiple
        ? [...files, ...acceptedFiles]
        : [acceptedFiles[0]];
      setFiles(newFiles);
      uploadFiles(acceptedFiles); // Auto-upload with headers
    },
    [files, multiple, token]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    multiple,
    maxFiles: multiple ? undefined : 1,
    maxSize: 5 * 1024 * 1024 * 1024,
    noKeyboard: true,
  });

  const removeFile = (fileName) => {
    const updated = files.filter((file) => file.name !== fileName);
    setFiles(updated);
    onChange(updated);
  };

  return (
    <div
      className="border-2 border-dashed border-[#303030] px-5 py-8 rounded-md w-full flex flex-col items-center justify-center gap-2 cursor-pointer bg-[rgb(231 231 231 / 32%)] transition-all relative"
      onClick={open}
      {...getRootProps()}
    >
      <input {...getInputProps()} multiple={multiple} {...props} />
      {isDragActive ? (
        <h6 className="text-[#474747] font-[400]">Drop the files here ...</h6>
      ) : (
        <>
          <span className="text-[12px] text-[#303030] font-[600] add-image-button px-2 py-1 rounded-md">
            Add Image
          </span>
          <small className="text-[#474747] font-[400]">
            or drop an image to upload
          </small>
        </>
      )}

      {files.length > 0 && (
        <div className="mt-4 w-full">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm text-[#303030] border-b py-1"
            >
              <span>{file.name}</span>
              <button
                className="text-red-600 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(file.name);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropZone;
