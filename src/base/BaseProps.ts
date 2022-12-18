import { SyntheticEventsProps } from "./SyntheticEventsProps";

export interface BaseProps extends SyntheticEventsProps<React.SyntheticEvent<Element, Event>> {
  darkMode?: boolean
}