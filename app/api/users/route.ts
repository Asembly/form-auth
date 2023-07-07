import { NextResponse } from "next/server"


export async function GET(res: Response) {
  const access_token = res.headers.get('authorization')
  console.log(access_token)

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': access_token
    },
  }


  const result = await fetch("http://localhost:5000/users", { ...options, cache: 'no-store' }).then(
    res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('User not auth')
    }
  ).catch((error) => console.log(error))

  return NextResponse.json(result)
}
