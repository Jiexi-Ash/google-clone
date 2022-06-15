import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function User({ setClass }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div
        className={`h-10 w-10 rounded-full relative bg-gray-200 cursor-pointer  ${setClass}`}
      >
        <Image
          src={session.user.image}
          alt="user-image"
          onClick={signOut}
          layout="fill"
          className="h-10 w-10 rounded-full p1"
        />
      </div>
    );
  }

  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${setClass}`}
        onClick={signIn}
      >
        Sign In
      </button>
    </>
  );
}

export default User;
