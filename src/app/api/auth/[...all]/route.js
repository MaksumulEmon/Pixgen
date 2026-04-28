
// import { auth } from "@/lib/auth"; 
import { auth } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);