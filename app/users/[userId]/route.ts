import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = await params;
  const user = users.find((u) => u.id === parseInt(userId));
  return Response.json(user);
}
