import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

export type BrandColor = {
  /** Color on the dark theme; omit to use the current text color. */
  dark?: string;
  /** Color on the light theme when the dark one lacks contrast on white. */
  light?: string;
};

/** Logo icon tinted with its brand color for the active theme. */
export function BrandIcon({
  icon: Icon,
  color,
  className = "",
}: {
  icon: IconType;
  color?: BrandColor;
  className?: string;
}) {
  const style = {
    ...(color?.dark && { "--brand": color.dark }),
    ...(color?.light && { "--brand-light": color.light }),
  } as CSSProperties;

  return <Icon aria-hidden="true" className={`brand-icon ${className}`} style={style} />;
}
