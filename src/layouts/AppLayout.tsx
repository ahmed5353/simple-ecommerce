import { Outlet } from 'react-router-dom';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default function AppLayout() {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className="max-w-screen-xl mx-auto my-16 flex-grow min-h-screen ">
        {/* <div className="mb-5">the navs here</div> */}
        <Outlet /> {/* Renders the child route component */}
      </main>{' '}
      <Footer />
    </div>
  );
}
