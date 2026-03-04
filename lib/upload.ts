import { supabase } from "@/lib/supbase";

export const uploadFile = async (file: File) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("medicare-uploads") 
    .upload(fileName, file);

  if (error) {
    console.error("Upload error:", error.message);
    throw new Error("File upload failed");
  }

  const { data } = supabase.storage
    .from("medication-uploads")
    .getPublicUrl(fileName);

  return data.publicUrl;
};