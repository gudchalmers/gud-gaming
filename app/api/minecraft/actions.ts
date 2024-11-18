"use server";

interface MojangResponse {
  id: string;
  name: string;
}

export async function register(prevState, formData: FormData) {
  const username = formData.get("username").toString().toLowerCase();

  if (!username) {
    return { message: "Username is required", loading: false};
  }

  const response = await fetch(
    `https://api.mojang.com/users/profiles/minecraft/${username}`,
  );

  if (response.status === 404 || !response.ok) {
    return { message: "Username not found", loading: false };
  }

  const uuid = ((await response.json()) as MojangResponse).id;

  if (!uuid) {
    return { message: "UUID not found", loading: false };
  }

  return { message: "Saved", loading: false };
}
