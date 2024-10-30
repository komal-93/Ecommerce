"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {  useTransition } from "react"
import { deleteProduct, toggleProductAvailability } from "../../_action/product"
import { useRouter } from "next/navigation"

export function ProductActivateAction({id, isAvailableForPurchase }:{id:string, isAvailableForPurchase:boolean}){

    const [isPending, startTransition] = useTransition()
    const router = useRouter();
    return <DropdownMenuItem 
    disabled = {isPending}
    onClick={()=>{
        startTransition(async ()=>{
            console.log("click")
           await toggleProductAvailability(id, !isAvailableForPurchase)
           router.refresh()
        })
    }} >{isAvailableForPurchase? "DeActivate": "Activate"}
    </DropdownMenuItem>
}

export function DeleteDropdownItem({id, disabled }:{id:string, disabled:boolean}){

    const [isPending, startTransition] = useTransition()
    const router = useRouter();
    return <DropdownMenuItem
    className="focus:bg-destructive focus:text-destructive-foreground text-destructive" 
    disabled = {disabled||isPending}
    onClick={()=>{
        startTransition(async ()=>{
            console.log("click")
           await deleteProduct(id)
           router.refresh()
        })
    }} >Delete
    </DropdownMenuItem>
}