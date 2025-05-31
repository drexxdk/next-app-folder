import { revalidatePath } from "next/cache";
import SubmitButton from "../components/submit-button";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const res = await fetch("https://683b2bf143bb370a8674eda9.mockapi.io/users");
  const users = await res.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://683b2bf143bb370a8674eda9.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      }
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newUser = await res.json();
    revalidatePath("/mock-users");
    console.log("newUser", newUser);
  }

  return (
    <div>
      <form action={addUser}>
        <input
          type="text"
          name="name"
          required
          className="border border-gray-500 bg-white text-black"
        />
        <SubmitButton text="Add user" />
      </form>
      <ul className="flex gap-1 flex-wrap">
        {users.map((user: MockUser) => (
          <li key={user.id} className="bg-white text-black">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
