import { isClient, useSafeLayoutEffect } from "@jnsdls/utils";
import calculateSize from "calculate-size";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ReactTextSwitchProps, SmurtKeys, ValidFontSettings } from "./types";

export const ReactTextSwitch: React.FC<ReactTextSwitchProps> = ({
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  word,
}) => {
  const [realWord, setRealWord] = useState("");
  const mainElRef = useRef<HTMLSpanElement>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const smurtKeys: SmurtKeys = useMemo(() => ({}), [word]);

  //force re-rendering on window resize
  const [, setWindowSize] = useState(0);
  useEffect(() => {
    if (!isClient()) {
      return;
    }
    const listener = (e: any) => {
      if (e.currentTarget.innerWidth) {
        //setting this state will force a re-render even though we don't read the state anywhere
        setWindowSize(e.currentTarget?.innerWidth);
      }
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  const getWidthForIndex = useCallback(
    (items: string[], currIdx: number) => {
      if (currIdx < 0) {
        return 0;
      }

      let settings: ValidFontSettings = {
        fontSize: "1rem",
        lineHeight: 1,
        fontFamily: "sans-serif",
        fontWeight: 400,
      };
      if (mainElRef.current && typeof window !== "undefined") {
        const {
          fontFamily,
          fontSize,
          fontWeight,
          lineHeight,
        } = getComputedStyle(mainElRef.current);
        settings = {
          fontFamily,
          fontSize,
          fontWeight: fontWeight as ValidFontSettings["fontWeight"],
          lineHeight,
        };
      }
      settings.fontSize = fontSize || settings.fontSize;
      settings.fontFamily = fontFamily || settings.fontFamily;
      settings.lineHeight = lineHeight || settings.lineHeight;
      settings.fontWeight = fontWeight || settings.fontWeight;

      const slicedItems = items.slice(0, currIdx);
      const str = slicedItems.join("");

      const endSize = calculateSize(STRING_APPENDIX, {
        font: settings.fontFamily,
        fontSize: settings.fontSize ? settings.fontSize.toString() : undefined,
        fontWeight: settings.fontWeight
          ? settings.fontWeight.toString()
          : undefined,
      }).width;

      return (
        calculateSize(str + STRING_APPENDIX, {
          font: settings.fontFamily,
          fontSize: settings.fontSize
            ? settings.fontSize.toString()
            : undefined,
          fontWeight: settings.fontWeight
            ? settings.fontWeight.toString()
            : undefined,
        }).width - endSize
      );
    },
    [fontFamily, fontSize, fontWeight, lineHeight]
  );

  const getSmurtKey = useCallback(
    (k: string) => {
      const keys = smurtKeys;
      k = k.toLowerCase();
      if (keys[k]) {
        keys[k] = keys[k] + 1;
      } else {
        keys[k] = 1;
      }
      return `${k}_${keys[k]}`;
    },
    [smurtKeys]
  );

  const letters = realWord.split("");

  useSafeLayoutEffect(() => {
    setRealWord(word);
  }, [word]);

  return (
    <span
      ref={mainElRef}
      style={{ position: "relative", fontSize, fontWeight }}
    >
      {typeof window !== "undefined" ? (
        <AnimatePresence>
          {letters.map((letter, idx) => (
            <motion.span
              style={{
                display: "inline",
                position: "absolute",
                left: getWidthForIndex(letters, idx),
              }}
              key={getSmurtKey(letter)}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: idx * 0.05 },
              }}
              exit={{
                opacity: 0,
                y: -30,
                transition: { delay: idx * 0.01 },
              }}
              layout
            >
              {letter}
            </motion.span>
          ))}
        </AnimatePresence>
      ) : null}
      <span
        style={
          realWord
            ? { opacity: 0, pointerEvents: "none", visibility: "hidden" }
            : undefined
        }
      >
        {word}
      </span>
    </span>
  );
};

const STRING_APPENDIX = `@`;
