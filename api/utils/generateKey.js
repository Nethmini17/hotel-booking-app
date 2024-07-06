import crypto from 'crypto';

// Generate a random 32-byte key and encode it in base64
const SECRET_KEY = crypto.randomBytes(32).toString('base64');

console.log(SECRET_KEY);
