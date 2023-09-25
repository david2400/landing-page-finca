import { ReactNode } from 'react';

export interface IModalProps {
  header?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: ReactNode;
}
