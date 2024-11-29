import { usePathname } from "next/navigation";

export const useCurrentTab = () => {
  const pathname = usePathname();
  return pathname.split("/")[1];
};