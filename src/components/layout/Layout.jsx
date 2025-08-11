import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-64 mt-16 p-3 md:p-6 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;