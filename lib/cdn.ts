export function cdnImage(localPath: string) {
  // Expecting paths like "/images/filename.ext" or just "filename.ext"
  const filename = localPath.replace(/^\/?images\//, "").replace(/^\//, "");
  const baseUrl = `https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/${encodeURIComponent("Pictures and vids")}/${encodeURIComponent(filename)}`;
  return `${baseUrl}?v=1`;
}
