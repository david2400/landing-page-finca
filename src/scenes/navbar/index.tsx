import { INavbarProps } from '@interfaces/navbar';
import { Menubar } from 'primereact/menubar';

export const Navbar = ({ items }: INavbarProps) => {
  const start = (
    <img alt="logo" src="/img/logo/logo.png" className="w-28 mr-2"></img>
  );

  return (
    <Menubar
      end={start}
      model={items}
      className="fixed w-full h-20 z-50 bg-white border-gray-50 opacity-90 rounded-none"
    />
  );
};
