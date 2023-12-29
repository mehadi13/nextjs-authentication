import SignOutButton from '@/components/SignOutButton'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../utils/auth'

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    if(!session){
        return redirect("/login")
    }
  
    return (
        <div className="p-10">
        <SignOutButton />
        </div>
  )
}
