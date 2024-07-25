export const fetchUser = async (): Promise<{ data: number }> => {
  const response = await fetch("https://randomuser.me/api", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

const userService = {
  fetchUser,
};

export default userService;
