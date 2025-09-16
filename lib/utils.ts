import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSupabasePublicUrl(bucket: string, path: string) {
  const project = "qisrodlshohwwddmzrng";
  const b = encodeURIComponent(bucket);
  // path segments may include slashes; only encode components between slashes
  const encodedPath = path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  return `https://${project}.supabase.co/storage/v1/object/public/${b}/${encodedPath}`;
}
