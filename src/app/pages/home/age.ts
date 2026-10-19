/** My date of birth: 15 May 1998 (months are 0-based in JavaScript Date). */
export const BIRTH_DATE = new Date(1998, 4, 15);

/** Age in full years on the given day. */
export function ageOn(today: Date, birthDate: Date = BIRTH_DATE): number {
  const age = today.getFullYear() - birthDate.getFullYear();
  const hadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  return hadBirthdayThisYear ? age : age - 1;
}
