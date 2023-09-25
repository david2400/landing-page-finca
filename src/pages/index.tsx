import { useState, useEffect, Suspense } from 'react';
import { BarLoader } from 'react-spinners';
import { Home } from '@components/home';
import AOS from 'aos';

const Progress = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <BarLoader color="#f6c400" height={4} />
    </div>
  );
};

const index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1000,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Progress></Progress>}>
      {loading ? <Progress></Progress> : <Home></Home>}
    </Suspense>
  );
};

export default index;
