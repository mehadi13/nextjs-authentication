import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import SignOutButton from "@/components/SignOutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LogIn from './login/page';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            This is an sample app to deponstrate authentication of Next js
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="pb-4">The app has total four pages.</h3><hr />
          <ol className="bg-slate-400 font-semibold rounded-sm grid grid-cols-1 gap-2">
            <li><Link className="text-center hover:text-white hover:rounded-t-sm hover:bg-stone-600 pl-2 pt-4 pb-4 block" href="/">This page</Link></li>
            <li><Link className="text-center hover:text-white hover:bg-stone-600 pl-2 pt-4 pb-4 block" href="/login">LogIn page</Link></li>
            <li><Link className="text-center hover:text-white hover:bg-stone-600 pl-2 pt-4 pb-4 block" href="/register">Register page</Link></li>
            <li><Link className="text-center hover:text-white hover:rounded-b-sm hover:bg-stone-600 pl-2 pt-4 pb-4 block" href="/dashboard">Dashborad (To Visit this page, you must login first.)</Link></li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
