"use client";

import { useRef, useState } from "react";
import { Camera, Upload, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UploadProof() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    if (!selectedFile.type.startsWith("image/")) return;
    setFile(selectedFile);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-6">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) handleFile(e.target.files[0]);
        }}
      />

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onClick={openFilePicker}
        className="border-2 border-dashed border-purple-300 rounded-2xl 
                           p-8 text-center hover:bg-purple-50 transition 
                            text-center cursor-pointer bg-muted/30 backdrop-blur-md"
      >
        {!file ? (
          <>
            <Upload className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Drag & drop image here
            </p>
            <p className="text-xs mt-1 text-muted-foreground/70">
              or click to upload / take photo
            </p>

            <div className="flex justify-center gap-3 mt-4">
              <Button variant="secondary" size="sm">
                Upload
              </Button>

              <Button variant="outline" size="sm">
                <Camera className="w-4 h-4 mr-1" />
                Take Photo
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-3">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="rounded-xl max-h-48 mx-auto object-cover"
            />

            <div className="flex justify-center gap-3">
              <Button size="sm" onClick={openFilePicker}>
                Change
              </Button>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => setFile(null)}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
