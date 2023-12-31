"use client"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

export default function GitHubSignInButton() {
  return (
    <Button  className="mt-2 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>
        signIn("github",{
            callbackUrl: '/dashboard'
        })
    }>Log In With GitHub</Button>
  )
}
