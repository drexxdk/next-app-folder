interface User {
  id: number;
  name: string;
}

export const user: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST() {}
