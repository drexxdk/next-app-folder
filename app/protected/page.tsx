import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Protected() {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log(authObj, userObj);
  return (
    <div>
      <h1>Protected</h1>
    </div>
  );
}
