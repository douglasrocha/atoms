import * as React from "react";
import { SyntheticEventsProps } from "./SyntheticEventsProps";

export interface BaseProps extends SyntheticEventsProps<React.SyntheticEvent<Element, Event>> {
  className?: string,
  darkMode?: boolean,
  style?: React.CSSProperties
}