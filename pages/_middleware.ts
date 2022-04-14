import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //Para interceptar
  // return new Response('Hello, world!')
  //Para continuar
  return NextResponse.next();
}
