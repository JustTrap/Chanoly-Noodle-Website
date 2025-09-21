export function cdnImage(localPath: string) {
  // Expecting paths like "/images/filename.ext" or just "filename.ext"
  const filename = localPath.replace(/^\/?images\//, "").replace(/^\//, "");
  
  // Special handling for gallery-1.jpg - try different variations
  if (filename === "gallery-1.jpg") {
    // Try with capital JPG extension
    const altFilename = filename.replace('.jpg', '.JPG');
    return `https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/${encodeURIComponent("Pictures and vids")}/${encodeURIComponent(altFilename)}?v=4`;
  }
  
  const baseUrl = `https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/${encodeURIComponent("Pictures and vids")}/${encodeURIComponent(filename)}`;
  return `${baseUrl}?v=3`;
}
