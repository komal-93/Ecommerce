"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { addProduct } from "../../_action/product";
import { useFormState, useFormStatus } from "react-dom";
import { Product } from "@prisma/client";


export default function ProductForm({product}:{product?:Product | null}){
    const [error, action ] = useFormState(addProduct, {})
    const [priceInCents, setPriceInCents] = useState<number | undefined>(product?.priceInCents)
    return<form action={action}className="space-y-8">
        <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name"  defaultValue={product?.name}required/>
            {error.name && <div className="text-destructive" >{error.name}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="priceInCents">Price in cents</Label>
            <Input type="number" name="priceInCents" id="priceInCents"  defaultValue={product?.priceInCents} onChange={(e)=>setPriceInCents(Number(e.target.value) || undefined)} required/>
            <div className="text-muted-foreground">{formatCurrency((priceInCents || 0)/100)}</div>
            {error.priceInCents && <div className="text-destructive" >{error.priceInCents}</div>}
            </div>
            <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea  id="description" name="description" defaultValue={product?.description} required/>
            {error.description && <div className="text-destructive" >{error.description}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <Input type="file"  id="file" name="file" required={product == null}/>
            {error.file && <div className="text-destructive" >{error.file}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" name="image" required={product == null}/>
            {error.image && <div className="text-destructive" >{error.image}</div>}
        </div>
        <SubmitButton/>
        

    </form>
}

function SubmitButton(){
    const {pending} = useFormStatus();
    return <Button type="submit" disabled={pending}>{pending? "Saving...": "Save"}</Button>
}


