import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

export default async function Home() {

    const cookieStore = await cookies();
    console.log(cookieStore.get("better-auth.session_token"));

    const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
            Cookie: cookieStore.toString(),
        },
        cache: "no-store",
    });

    console.log(await res.json());

    return (
        <div>
            <Button variant="outline">Click Here</Button>
        </div>
    );
}