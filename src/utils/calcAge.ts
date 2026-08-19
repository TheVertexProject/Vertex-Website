export function calculateCreatorAge(): number {
  const birthDate = new Date('2013-06-25');
  const currentDate = new Date();
  const age = Math.floor((currentDate.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  return age;
}

export function getCreatorAgeDetails(): {
  years: number;
  daysAlive: number;
  nextBirthdayDays: number;
  birthDateString: string;
} {
  const birthDate = new Date('2013-06-25');
  const now = new Date();
  const diffMs = now.getTime() - birthDate.getTime();
  const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
  const daysAlive = Math.floor(diffMs / (24 * 60 * 60 * 1000));

  const currentYear = now.getFullYear();
  let nextBday = new Date(currentYear, 5, 25); // month 5 = June
  if (now.getTime() > nextBday.getTime()) {
    nextBday = new Date(currentYear + 1, 5, 25);
  }
  const nextBirthdayDays = Math.ceil((nextBday.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));

  return {
    years,
    daysAlive,
    nextBirthdayDays,
    birthDateString: 'June 25, 2013'
  };
}
