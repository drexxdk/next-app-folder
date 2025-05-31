interface User {
  id: number;
  name: string;
}

export const users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" }
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const user = (await request.json()) as { name: string };
  const newUser: User = {
    id: users.length + 1,
    name: user.name
  };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 201
  });
}

export async function PUT(request: Request) {
  const user = (await request.json()) as User;

  const userToModify = users.find((u) => u.id === user.id);
  if (userToModify) {
    userToModify.name = user.name;
    return new Response(null, { status: 200 });
  }
  return new Response(null, { status: 404 });
}
