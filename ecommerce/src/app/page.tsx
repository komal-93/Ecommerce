import Image from "next/image";
import AdminDashboard from "./admin/page";
import Adminlayout from "./admin/layout";
import Adminloading from "./admin/loading";

export default function Home() {
  return <>
  <Adminlayout children={undefined}/>
  <AdminDashboard/>
  </>
}
