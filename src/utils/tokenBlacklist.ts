// In-memory token blacklist
const blacklistedTokens = new Set<string>();

export const addToBlacklist = (token: string) => {
  blacklistedTokens.add(token);
};

export const isBlacklisted = (token: string) => {
  return blacklistedTokens.has(token);
};

// Optional: Clean up old tokens periodically
setInterval(() => {
  // Clear blacklist every 24 hours
  blacklistedTokens.clear();
}, 24 * 60 * 60 * 1000); 