export function cdnImage(localPath: string) {
  // Expecting paths like "/images/filename.ext" or just "filename.ext"
  const filename = localPath.replace(/^\/?images\//, "").replace(/^\//, "");
  const baseUrl = `https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/${encodeURIComponent("Pictures and vids")}/${encodeURIComponent(filename)}`;
  // Use different cache-busting for gallery-1.jpg specifically
  const cacheVersion = filename === "gallery-1.jpg" ? "v=2" : "v=1";
  return `${baseUrl}?${cacheVersion}`;
}
