import Link from "next/link";

import { cn } from "@/lib/utils";

interface CustomLinkProps {
  href: string;
  scroll?: boolean;
  prefetch?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const CustomLink = ({
  className,
  href,
  children,
  onClick,
//   eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...props
}: CustomLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(className, "cursor-pointer")}
  >
    {children}
  </Link>
);