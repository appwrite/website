import { APPWRITE_COL_INIT_ID, APPWRITE_DB_INIT_ID } from '$env/static/private';
import { appwriteInitServer } from '$lib/appwrite/init.server';

export async function POST({ request }) {
  const data = await request.json()

  await appwriteInitServer.databases.updateDocument(
    APPWRITE_DB_INIT_ID,
    APPWRITE_COL_INIT_ID,
    data.ticketId,
    {
      name: data.name,
      tribe: data.tribe,
      show_contributions: data.showGitHub
    }
  );

  return new Response(
    JSON.stringify({
      data: null
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );

}