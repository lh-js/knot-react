import { createContext } from 'react';

export interface RowContextState {
  gutters?: [number, number];
}

const RowContext = createContext<RowContextState>({});

export default RowContext;