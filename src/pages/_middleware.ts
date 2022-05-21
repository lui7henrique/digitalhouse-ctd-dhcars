import { NextRequest, NextResponse } from "next/server"
import { supabase } from "services/supabase"

export const middleware = async (req: NextRequest) => {
  const privateRoute = req.url.includes("/me")

  if (!privateRoute) {
    return undefined
  }

  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (privateRoute && !user) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return undefined
}
