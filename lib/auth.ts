// Simple auth context for demo purposes
// In production, replace with proper authentication (NextAuth, Supabase, etc.)

export const ADMIN_CREDENTIALS = {
  email: "admin@intelligentmachines.ai",
  password: "admin123",
}

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password
}
