import { createElement } from "react";
import type { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
  size?: number | string;
}

export default function Icon({ icon, className, size }: IconProps) {
  return createElement(icon as never, { className, size });
}