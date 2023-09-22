import { useState, useEffect, Suspense } from 'react';
import { Home } from '@components/home';
import AOS from 'aos';
import { ProgressSpinner } from 'primereact/progressspinner';

const Progress = () => {
  return (
    <div className="card flex justify-content-center">
      <ProgressSpinner />
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
