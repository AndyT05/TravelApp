import { Client, TablesDB, Account, Storage } from "appwrite";

export const appwriteConfig = {
  endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  apikey: import.meta.env.VITE_APPWRITE_API_KEY,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  userTableId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  tripTableId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
};

export const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId);

export const database = new TablesDB(client);
export const account = new Account(client);
export const storage = new Storage(client);
