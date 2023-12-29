"use client"
import { Button } from "./ui/button"
import { signOut } from "next-auth/react"

export default function SignOutButton() {
  return (
    <Button onClick={()=>
        signOut({
            callbackUrl: `${window.location.origin}/login`
        })
    }>Sign Out</Button>
  )
}
