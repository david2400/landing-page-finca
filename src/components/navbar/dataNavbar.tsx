import { Navbar } from '@scenes/navbar';

export const DataNavbar = () => {
  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      url: '/#description',
    },
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      url: '/#description',
    },
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      url: '/#description',
    },
    {
      label: 'Comodidades',
      icon: 'pi pi-fw pi-file',
      url: '/#comfort',
    },
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      url: '/#description',
    },
  ];
  return <Navbar items={items}></Navbar>;
};
