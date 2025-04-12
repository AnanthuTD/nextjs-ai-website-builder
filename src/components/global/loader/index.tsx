'use client';

import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

type LoaderProps = {
  state: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  children?: React.ReactNode;
};

const Loader = ({ state, className, size = "md", color, children }: LoaderProps) => {
  return state ? (
    <div className={cn("flex items-center justify-center", className)}>
      <Spinner size={size} color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;