import { CSSProperties } from "react";

export type SmurtKeys = Record<string, number>;

export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: T[SubKey] };

export interface ValidFontSettings {
  fontSize: CSSProperties["fontSize"];
  fontWeight: CSSProperties["fontWeight"];
  fontFamily: CSSProperties["fontFamily"];
  lineHeight: CSSProperties["lineHeight"];
}

export interface ReactTextSwitchProps
  extends MakeOptional<
    ValidFontSettings,
    "fontSize" | "fontWeight" | "fontFamily" | "lineHeight"
  > {
  word: string;
}

export interface ReactTextCycleProps
  extends MakeOptional<
    ValidFontSettings,
    "fontSize" | "fontWeight" | "fontFamily" | "lineHeight"
  > {
  words: string[];
  interval?: number;
}
