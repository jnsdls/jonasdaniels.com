import type { CSSProperties } from "react";

type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: T[SubKey] };

export interface ValidFontSettings {
  fontSize: CSSProperties["fontSize"];
  fontWeight: CSSProperties["fontWeight"];
  fontFamily: CSSProperties["fontFamily"];
  lineHeight: CSSProperties["lineHeight"];
}

export type OptionalFontSettings = MakeOptional<
  ValidFontSettings,
  "fontSize" | "fontWeight" | "fontFamily" | "lineHeight"
>;
