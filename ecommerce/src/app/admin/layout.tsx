import  { Nav,NavLink } from "@/components/Nav";
import { ReactNode } from "react";

export const dynamic = 'force-dynamic'

export default function Adminlayout({children,
 } : Readonly<{
    children: ReactNode}>) {
  return <>
  <Nav>
    <NavLink href="/admin">Dashboard</NavLink>
    <NavLink href="/admin/products">Product</NavLink>
    <NavLink href="/admin/customers">Customers</NavLink>
    <NavLink href="/admin/sales">Sales</NavLink>
  </Nav>
  <div className='container my-6'>{children}</div>
  </>
}

