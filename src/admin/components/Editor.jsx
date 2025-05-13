"use client";
import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ label = null, labelClass = null, value, onChange, ...props }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editorInstance = editorRef.current;

    if (editorInstance) {
      ClassicEditor.create(editorInstance, {
        // CKEditor configuration
      })
        .then((editor) => {
          console.log("Editor initialized successfully:", editor);
        })
        .catch((error) => {
          console.error("Error initializing editor:", error);
        });

      // Optional: Cleanup function
      return () => {
        editorInstance
          .destroy()
          .then(() => {
            console.log("Editor destroyed");
          })
          .catch((error) => {
            console.error("Error destroying editor:", error);
          });
      };
    }
  }, []);
  return (
    <div className="flex max-w-[100%] w-[100%] flex-col gap-1">
      {label && <label className={`text-[13px] text-[#303030] font-500 ${labelClass}`}>{label}</label>}
      <div className="relative flex items-center border-2 border-transparent focus-within:border-blue-800 p-1 rounded-lg">
        <CKEditor
          editor={ClassicEditor}
          config={
            {
              // CKEditor config if needed
            }
          }
          data={value}
          onChange={(event, editor) => {
            const newData = editor.getData();
            onChange(newData);
          }}
          {...props}
        />
      </div>
    </div>
  );
};

export default Editor;
