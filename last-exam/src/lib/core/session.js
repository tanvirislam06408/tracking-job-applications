import { authClient } from "@/lib/auth-client"

export const getUserSession = async() => {
    const { data: session } = await authClient.getSession()
    return session.user || null
} 