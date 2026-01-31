import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const auth = req.headers.get("authorization");

    if (!auth) {
        return new NextResponse("Authentication required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    const base64 = auth.split(" ")[1];
    const [user, pass] = Buffer.from(base64, "base64")
        .toString()
        .split(":");

    if (
        user !== process.env.ADMIN_USERNAME ||
        pass !== process.env.ADMIN_PASSWORD
    ) {
        return new NextResponse("Unauthorized", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
