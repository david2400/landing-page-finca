import { Navbar } from '@scenes/navbar';

export const DataNavbar = () => {
  const items = [
    {
      label: 'Descripcion',
      icon: 'pi pi-fw pi-file',
      url: '/#description',
    },
    {
      label: 'Piscina',
      icon: 'pi pi-fw pi-file',
      url: '/#pool',
    },
    {
      label: 'Comodidades',
      icon: 'pi pi-fw pi-file',
      url: '/#comfort',
    },
    {
      label: 'Contactenos',
      icon: 'pi pi-fw pi-file',
      url: '/#contact',
    },
  ];
  return <Navbar items={items}></Navbar>;
};
