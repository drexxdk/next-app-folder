type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul className="flex gap-1 flex-wrap">
      {users.map((user: User) => (
        <li key={user.id} className="bg-white text-black">
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
