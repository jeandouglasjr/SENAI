import { describe, test, expect } from 'vitest';
import { User } from './hooks.js';

describe('User Hook Tests', () => {
  const testEmail = 'test@test.com';
  const newTestMail = 'test2@test.com';

  test('should update user email', () => {
    const user = new User(testEmail);
    user.updateEmail(newTestMail);
    expect(user.email).toBe(newTestMail);
  });
});
