import { INavbarProps } from '@interfaces/navbar';
import { Menubar } from 'primereact/menubar';

export const Navbar = ({ items }: INavbarProps) => {
  return <Menubar model={items} />;
};
