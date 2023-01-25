import * as React from 'react';
import { BaseProps } from './BaseProps';

export interface ParentBaseProps extends BaseProps {
  children: JSX.Element
}
