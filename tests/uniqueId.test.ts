// tests/uniqueId.test.ts
import { describe, it, expect } from 'vitest';
import { uniqueId } from '../src/index';

describe('uniqueId', () => {
  it('should generate unique IDs with default prefix', () => {
    expect(uniqueId()).toBe('lui-1');
    expect(uniqueId()).toBe('lui-2');
  });

  it('should generate unique IDs with custom prefixes', () => {
    expect(uniqueId('test-')).toBe('test-1');
    expect(uniqueId('test-')).toBe('test-2');
    expect(uniqueId('another-')).toBe('another-1');
  });

  it('should maintain separate counters for different prefixes', () => {
    expect(uniqueId('foo-')).toBe('foo-1');
    expect(uniqueId('bar-')).toBe('bar-1');
    expect(uniqueId('foo-')).toBe('foo-2');
  });

  it('should generate unique IDs with an empty string prefix', () => {
    expect(uniqueId('')).toBe('1');
    expect(uniqueId('')).toBe('2');
  });
});
