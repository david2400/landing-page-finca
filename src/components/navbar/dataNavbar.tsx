import { Navbar } from '@scenes/navbar';

export const DataNavbar = () => {
  const items = [
    {
      label: 'Descripcion',
      icon: 'pi pi-fw pi-file',
      url: '/#description',
    },
    {
      label: 'Comodidades',
      icon: 'pi pi-fw pi-file',
      url: '/#comfort',
    },
    {
      label: 'Reserva',
      icon: 'pi pi-fw pi-file',
      url: '/#contact',
    },
  ];
  return <Navbar items={items}></Navbar>;
};
