import {
  isSameYear,
  getMonth,
  differenceInYears,
  differenceInMonths,
} from "date-fns";

export async function getEligibleAnnualLeaves(
  startDate: Date,
  attendancePercent: Number = 80,
  today: Date = new Date()
): Promise<Number> {
  return new Promise((resolve, reject) => {
    const isHireThisYear = isSameYear(startDate, today);

    if (isHireThisYear || attendancePercent < 80) {
      const workingMonths = differenceInMonths(today, startDate);

      if (workingMonths < 3) {
        resolve(0);
      }

      const startMonthNumber = getMonth(startDate);

      if (startMonthNumber < 6) resolve(10);
      if (startMonthNumber > 8) resolve(0);

      if (startMonthNumber === 6) resolve(4);
      if (startMonthNumber === 7) resolve(3);
      if (startMonthNumber === 8) resolve(2);
    } else {
      const workingYears = differenceInYears(today, startDate);

      if (workingYears === 0) resolve(11);
      if (workingYears === 1) resolve(12);
      if (workingYears === 2) resolve(14);
      if (workingYears === 3) resolve(16);
      if (workingYears === 4) resolve(18);
      if (workingYears > 4) resolve(20);
    }
  });
}
