import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
import { users } from '$lib/db/schema';

export const load: PageServerLoad = async () => {
  const allUsers = await db.select().from(users);

  return {
    users: allUsers ?? [],
  };
};
