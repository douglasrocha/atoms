import * as React from "react";
import { SyntheticEventsProps } from "./SyntheticEventsProps";

export interface BaseProps extends SyntheticEventsProps<React.SyntheticEvent<Element, Event>> {
  darkMode?: boolean,
  style?: React.CSSProperties
}