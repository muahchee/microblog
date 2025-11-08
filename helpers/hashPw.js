import bcrypt from "bcryptjs";

export async function hashPw(pw) {
  const hashedPw = await bcrypt.hash(pw, 10);
  return hashedPw;
}