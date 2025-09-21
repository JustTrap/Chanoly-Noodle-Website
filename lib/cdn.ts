export function cdnImage(localPath: string) {
  // Expecting paths like "/images/filename.ext" or just "filename.ext"
  const filename = localPath.replace(/^\/?images\//, "").replace(/^\//, "");
  
  // Special handling for gallery-1.jpg - it has a leading space in Supabase
  if (filename === "gallery-1.jpg") {
    // The actual filename in Supabase has a leading space
    const altFilename = ` ${filename}`;
    return `https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/${encodeURIComponent("Pictures and vids")}/${encodeURIComponent(altFilename)}?v=5`;
  }
  
  const baseUrl = `https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/${encodeURIComponent("Pictures and vids")}/${encodeURIComponent(filename)}`;
  return `${baseUrl}?v=3`;
}
