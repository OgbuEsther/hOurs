import jwt from "jsonwebtoken";

export function generateToken(userId: any, role: any , name :any) {
  return jwt.sign(
    {
      userId,
      role,
      name
    },
    "i am a girl , maybe i am a boy",
    {
      expiresIn: "1h",
    },
  );
}
