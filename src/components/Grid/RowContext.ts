import { createContext } from 'react';

export interface RowContextState {
  gutters?: [number, number];
  columns: number;
}

const RowContext = createContext<RowContextState>({
  columns: 24
});

export default RowContext;