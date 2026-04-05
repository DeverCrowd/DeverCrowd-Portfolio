const jwt = require("jsonwebtoken");
const redis = require("../config/redis");

const generateJWT = async (payload) => {
  const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  return token;
}; 

const blacklistJWT = async (token) => {
  try {
    const expiresIn = 60 * 60;
    await redis.set(`blacklist:${token}`, "1", {
      EX: expiresIn,
    });
  } catch {}
};
module.exports = {
  generateJWT,
  blacklistJWT,
};
