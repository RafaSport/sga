import { getServerSession } from "next-auth"
import { authOptions } from "@/shared/lib/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(authOptions)

  // 🔒 Se não estiver logado → manda pro login
  if (!session) {
    redirect("/login")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2">
        Bem-vindo ao sistema de gestão de abrigos.
      </p>
    </div>
  )
}