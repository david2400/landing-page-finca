import { Navbar } from '@components/navbar';

export const Layout = ({ children }: any) => {
  return (
    <div className='w-full'>
      <Navbar></Navbar>
      {children}
      {/* <Footers></Footers> */}
    </div>
  );
};
