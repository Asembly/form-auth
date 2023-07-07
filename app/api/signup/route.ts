import { NextResponse } from "next/server";

export async function POST(res) {

  const data = await res.json()
  console.log(data)

  const token = await fetch("http://localhost:5000/auth/registration",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
    }).catch((error) => console.log(error))

  return NextResponse.json({ message: token })
}
