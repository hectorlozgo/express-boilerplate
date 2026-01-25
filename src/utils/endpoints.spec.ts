import { ENDPOINTS } from '@/utils/endpoints'

describe('should show auth url endpoints', () => {
  test('auth endpoints', () => {
    const auth = ENDPOINTS.AUTH
    expect(auth.login).toBe('/api/auth/login')
    expect(auth.logout).toBe('/api/auth/logout')
    expect(auth.signup).toBe('/api/auth/signup')
    expect(auth.refresh).toBe('/api/auth/refresh-token')
    expect(auth.me).toBe('/api/auth/me')
  })
})
