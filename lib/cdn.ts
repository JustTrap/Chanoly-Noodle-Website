export function cdnImage(localPath: string) {
  // Expecting paths like "/images/filename.ext"
  const filename = localPath.replace(/^\/?images\//, "").replace(/^\//, "");
  return `https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/${encodeURIComponent("Pictures and vids")}/${encodeURIComponent(filename)}`;
}
