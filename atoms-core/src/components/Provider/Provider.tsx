import * as React from 'react';

export interface ProviderProps {
  theme?: string,
  children?: React.ReactElement;
}

export const Provider = (props: ProviderProps): React.ReactElement => {
  const themeToImport = props.theme ?? '/atoms-style-wireframe';
  require(themeToImport);
  return (
    <>
      { props.children }
    </>
  );
}