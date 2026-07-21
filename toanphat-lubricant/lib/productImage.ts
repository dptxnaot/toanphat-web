export function getProductImage(brandKey: string): string {
  const map: Record<string, string> = {
    sgp: "sg.png",
    apo: "apo.png",
    singtec: "singtec.png",
    tp: "tp.png",
    caltex: "caltex.png",
    other: "other.svg",
  };
  return `/brands/${map[brandKey] ?? "other.svg"}`;
}

/** Trả về ảnh xô 18L nếu có, null nếu không */
export function getProductXoImage(brandKey: string): string | null {
  const map: Record<string, string> = {
    sgp: "sg-xo.png",
    singtec: "singtec-xo.png",
  };
  return map[brandKey] ? `/brands/${map[brandKey]}` : null;
}
