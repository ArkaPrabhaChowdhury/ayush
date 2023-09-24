import Sidebar from "../(components)/Sidebar";
import Navbar from "../(components)/Navbar";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div class="p-4 sm:ml-64">
        <p>Opportunities</p>
      </div>
    </div>
  );
};

export default page;
