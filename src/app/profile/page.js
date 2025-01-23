'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const page = async () => {
  const { getUser } = getKindeServerSession();

  // Resolve the Promise to get user data
  const user = await getUser();

  // Debugging: Check resolved user data
//   console.log("Resolved User data:", user);

  return (
    <div>
      <h1 className="text-center text-red-600">
        {user?.given_name ? `Hello, ${user.given_name}` : "User not logged in"}
      </h1>
    </div>
  );
};

export default page;
