import {
    parseISO,
    formatISO,
    format,
    startOfTomorrow,
    startOfYesterday,
    addYears,
    subYears,
    differenceInCalendarYears,
  } from 'date-fns'
  import { getEligibleAnnualLeaves } from './leave'
  
  describe('Eligible Annual Leaves', () => {
    // January
  
    test('Started working in January, current month is January and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-01-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in January, current month is February and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-01-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in January, current month is March and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-03-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in January, current month is April and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-04-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is May and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-05-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is June and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-06-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in January, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-01-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    // February
  
    test('Started working in February, current month is February and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-02-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in February, current month is March and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-03-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in February, current month is April and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-04-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in February, current month is May and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-05-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is June and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-06-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in February, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-02-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // March
  
    test('Started working in March, current month is March and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-03-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in March, current month is April and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-04-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in March, current month is May and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-05-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in March, current month is June and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-06-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in March, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in March, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in March, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in March, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in March, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in March, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in March, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in March, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-03-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // April
  
    test('Started working in April, current month is April and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-04-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in April, current month is May and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-05-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in April, current month is June and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-06-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in April, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in April, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in April, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in April, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in April, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in April, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in April, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in April, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in April, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-04-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // May
  
    test('Started working in May, current month is May and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-05-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in May, current month is June and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-06-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in May, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in May, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in May, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in May, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in May, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // May
  
    test('Started working in May, current month is May and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-05-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in May, current month is June and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-06-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in May, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in May, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in May, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in May, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in May, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in May, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-05-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // June
  
    test('Started working in June, current month is June and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(new Date(), 'yyyy-06-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in June, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in June, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in June, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in June, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in June, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in June, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        10
      )
    })
  
    test('Started working in June, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in June, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in June, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in June, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-06-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // July
  
    test('Started working in July, current month is July and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(new Date(), 'yyyy-07-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in July, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in July, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in July, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        4
      )
    })
  
    test('Started working in July, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        4
      )
    })
  
    test('Started working in July, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        4
      )
    })
  
    test('Started working in July, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in July, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in July, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in July, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in July, current month is May next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-05-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in July, current month is June next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-07-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-06-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // August
  
    test('Started working in August, current month is August and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(new Date(), 'yyyy-08-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in August, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in August, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in August, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        3
      )
    })
  
    test('Started working in August, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        3
      )
    })
  
    test('Started working in August, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in August, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in August, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in August, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in August, current month is May next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-05-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in August, current month is June next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-06-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in August, current month is July next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-08-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-07-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // September
  
    test('Started working in September, current month is September and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(new Date(), 'yyyy-09-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in September, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in September, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in September, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        2
      )
    })
  
    test('Started working in September, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in September, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in September, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in September, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in September, current month is May next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-05-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in September, current month is June next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-06-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in September, current month is July next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-07-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in September, current month is August next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-09-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-08-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // October
  
    test('Started working in October, current month is October and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(new Date(), 'yyyy-10-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in October, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in October, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in October, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is May next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-05-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is June next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-06-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is July next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-07-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is August next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-08-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in October, current month is September next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-10-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-09-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // November
  
    test('Started working in November, current month is November and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(new Date(), 'yyyy-11-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in November, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in November, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is May next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-05-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is June next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-06-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is July next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-07-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is August next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-08-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is September next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-09-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in November, current month is October next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-11-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-10-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // December
  
    test('Started working in December, current month is December and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(new Date(), 'yyyy-12-01'))
      expect(await getEligibleAnnualLeaves(startingDate, 0, today)).toBe(
        0
      )
    })
  
    test('Started working in December, current month is January next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-01-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is February next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-02-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is March next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-03-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is April next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-04-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is May next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-05-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is June next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-06-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is July next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-07-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is August next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-08-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is September next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-09-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is October next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-10-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working in December, current month is November next year and less than a year', async () => {
      let startingDate = parseISO(format(new Date(), 'yyyy-12-01'))
      let today = parseISO(format(addYears(new Date(), 1), 'yyyy-11-01'))
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    // Number of worked years
  
    test('Started working less than 1 year ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 1)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(11)
    })
  
    test('Started working more than 1 year ago', async () => {
      let startingDate = subYears(new Date(), 1)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(12)
    })
  
    test('Started working less than 2 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 2)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(12)
    })
  
    test('Started working more than 2 years ago', async () => {
      let startingDate = subYears(new Date(), 2)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(14)
    })
  
    test('Started working less than 3 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 3)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(14)
    })
  
    test('Started working more than 3 years ago', async () => {
      let startingDate = subYears(new Date(), 3)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(16)
    })
  
    test('Started working less than 4 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 4)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(16)
    })
  
    test('Started working more than 4 years ago', async () => {
      let startingDate = subYears(new Date(), 4)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(18)
    })
  
    test('Started working less than 5 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 5)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(18)
    })
  
    test('Started working more than 5 years ago', async () => {
      let startingDate = subYears(new Date(), 5)
      let today = new Date()
      let workingCalendarYears = differenceInCalendarYears(
        today,
        new Date(startingDate)
      )
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(20)
    })
  
    test('Started working less than 10 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 10)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(20)
    })
  
    test('Started working more than 10 years ago', async () => {
      let startingDate = subYears(new Date(), 10)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(20)
    })
  
    test('Started working less than 20 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 20)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(20)
    })
  
    test('Started working more than 20 years ago', async () => {
      let startingDate = subYears(new Date(), 20)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(20)
    })
  
    test('Started working less than 30 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 30)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 80, today)
      ).toBe(20)
    })
  
    // Attendance last year less than 80%
  
    test('Started working less than 1 year ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 1)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working more than 1 year ago', async () => {
      let startingDate = subYears(new Date(), 1)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working less than 2 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 2)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working more than 2 years ago', async () => {
      let startingDate = subYears(new Date(), 2)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working less than 3 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 3)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working more than 3 years ago', async () => {
      let startingDate = subYears(new Date(), 3)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working less than 4 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 4)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working more than 4 years ago', async () => {
      let startingDate = subYears(new Date(), 4)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working less than 5 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 5)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working more than 5 years ago', async () => {
      let startingDate = subYears(new Date(), 5)
      let today = new Date()
      let workingCalendarYears = differenceInCalendarYears(
        today,
        new Date(startingDate)
      )
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working less than 10 years ago', async () => {
      let startingDate = subYears(startOfTomorrow(), 10)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  
    test('Started working more than 10 years ago', async () => {
      let startingDate = subYears(new Date(), 10)
      let today = new Date()
      expect(
        await getEligibleAnnualLeaves(startingDate, 75, today)
      ).toBe(10)
    })
  })
  