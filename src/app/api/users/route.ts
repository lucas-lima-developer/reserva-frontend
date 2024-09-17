import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        const res = await fetch('http://localhost:8000/api/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return NextResponse.json({ message: errorData.message || 'Registration failed' }, { status: res.status });
        }

        return NextResponse.json({ message: 'User registered successfully!' });
    } catch (error) {
        return NextResponse.json({ message: 'Registration failed.' }, { status: 500 });
    }
}