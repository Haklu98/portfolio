import { ageOn } from './age';

describe('ageOn', () => {
  const birth = new Date(1998, 4, 15); // 15 May 1998

  it('should not count the birthday before it has happened this year', () => {
    expect(ageOn(new Date(2026, 4, 14), birth)).toBe(27);
  });

  it('should count the birthday on the day itself', () => {
    expect(ageOn(new Date(2026, 4, 15), birth)).toBe(28);
  });

  it('should count the birthday after it has happened this year', () => {
    expect(ageOn(new Date(2026, 9, 19), birth)).toBe(28);
    expect(ageOn(new Date(2027, 0, 1), birth)).toBe(28);
  });
});
