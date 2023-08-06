export function GetExpenseMonthlyList() {
  return [
    {
      year: 2023,
      month: 6,
    },
    {
      year: 2023,
      month: 7,
    },
    {
      year: 2023,
      month: 8,
    },
  ];
}

export function GetExpenseMonthly(year, month) {
  if (month == 6) {
    return {
      year: 2023,
      month: 6,
      list: [
        {
          id: 10,
          date: 1,
          value: 2700,
          category: 2,
        },
        {
          id: 9,
          date: 6,
          value: 1300,
          category: 2,
        },
        {
          id: 16,
          date: 7,
          value: 2200,
          category: 4,
        },
        {
          id: 3,
          date: 8,
          value: 1200,
          category: 3,
        },
        {
          id: 21,
          date: 11,
          value: 247400,
          category: 3,
        },
        {
          id: 1,
          date: 13,
          value: 26400,
          category: 3,
        },
        {
          id: 20,
          date: 14,
          value: 1600,
          category: 2,
        },
        {
          id: 4,
          date: 15,
          value: 3700,
          category: 4,
        },
        {
          id: 8,
          date: 18,
          value: 5200,
          category: 0,
        },
        {
          id: 5,
          date: 19,
          value: 4900,
          category: 2,
        },
        {
          id: 15,
          date: 19,
          value: 11200,
          category: 0,
        },
        {
          id: 13,
          date: 20,
          value: 2200,
          category: 4,
        },
        {
          id: 14,
          date: 20,
          value: 3800,
          category: 2,
        },
        {
          id: 17,
          date: 21,
          value: 178500,
          category: 3,
        },
        {
          id: 18,
          date: 22,
          value: 1300,
          category: 4,
        },
        {
          id: 19,
          date: 22,
          value: 5400,
          category: 0,
        },
        {
          id: 23,
          date: 22,
          value: 2700,
          category: 1,
        },
        {
          id: 25,
          date: 22,
          value: 4900,
          category: 2,
        },
        {
          id: 24,
          date: 23,
          value: 4200,
          category: 1,
        },
        {
          id: 7,
          date: 24,
          value: 1300,
          category: 1,
        },
        {
          id: 12,
          date: 24,
          value: 5000,
          category: 3,
        },
        {
          id: 0,
          date: 26,
          value: 14900,
          category: 3,
        },
        {
          id: 2,
          date: 27,
          value: 5700,
          category: 2,
        },
        {
          id: 22,
          date: 28,
          value: 21800,
          category: 0,
        },
        {
          id: 6,
          date: 30,
          value: 12600,
          category: 1,
        },
        {
          id: 11,
          date: 30,
          value: 5300,
          category: 1,
        },
      ],
    };
  } else if (month == 7) {
    return {
      year: 2023,
      month: 7,
      list: [
        {
          id: 16,
          date: 1,
          value: 120300,
          category: 1,
        },
        {
          id: 20,
          date: 1,
          value: 5700,
          category: 4,
        },
        {
          id: 9,
          date: 2,
          value: 4900,
          category: 2,
        },
        {
          id: 23,
          date: 2,
          value: 2100,
          category: 4,
        },
        {
          id: 11,
          date: 3,
          value: 5300,
          category: 3,
        },
        {
          id: 17,
          date: 3,
          value: 5700,
          category: 3,
        },
        {
          id: 19,
          date: 3,
          value: 2900,
          category: 4,
        },
        {
          id: 26,
          date: 5,
          value: 2600,
          category: 3,
        },
        {
          id: 4,
          date: 8,
          value: 4300,
          category: 0,
        },
        {
          id: 6,
          date: 8,
          value: 1200,
          category: 0,
        },
        {
          id: 8,
          date: 12,
          value: 20000,
          category: 3,
        },
        {
          id: 25,
          date: 12,
          value: 1700,
          category: 1,
        },
        {
          id: 15,
          date: 14,
          value: 3000,
          category: 4,
        },
        {
          id: 18,
          date: 14,
          value: 3800,
          category: 0,
        },
        {
          id: 24,
          date: 14,
          value: 1000,
          category: 1,
        },
        {
          id: 1,
          date: 15,
          value: 2200,
          category: 1,
        },
        {
          id: 5,
          date: 16,
          value: 5400,
          category: 4,
        },
        {
          id: 3,
          date: 20,
          value: 9900,
          category: 4,
        },
        {
          id: 10,
          date: 21,
          value: 1900,
          category: 2,
        },
        {
          id: 2,
          date: 24,
          value: 5600,
          category: 4,
        },
        {
          id: 0,
          date: 25,
          value: 1300,
          category: 4,
        },
        {
          id: 21,
          date: 25,
          value: 1200,
          category: 3,
        },
        {
          id: 13,
          date: 28,
          value: 3400,
          category: 0,
        },
        {
          id: 7,
          date: 29,
          value: 1000,
          category: 1,
        },
        {
          id: 12,
          date: 29,
          value: 1700,
          category: 3,
        },
        {
          id: 22,
          date: 29,
          value: 3500,
          category: 0,
        },
        {
          id: 14,
          date: 30,
          value: 162100,
          category: 0,
        },
      ],
    };
  } else {
    return {
      year: 2023,
      month: 8,
      list: [
        {
          id: 11,
          date: 1,
          value: 3800,
          category: 1,
        },
        {
          id: 20,
          date: 1,
          value: 2600,
          category: 4,
        },
        {
          id: 13,
          date: 2,
          value: 1700,
          category: 3,
        },
        {
          id: 0,
          date: 4,
          value: 3300,
          category: 0,
        },
        {
          id: 17,
          date: 4,
          value: 2800,
          category: 3,
        },
        {
          id: 1,
          date: 5,
          value: 3200,
          category: 3,
        },
        {
          id: 6,
          date: 6,
          value: 19200,
          category: 2,
        },
        {
          id: 9,
          date: 7,
          value: 3800,
          category: 1,
        },
        {
          id: 25,
          date: 7,
          value: 4100,
          category: 2,
        },
        {
          id: 12,
          date: 13,
          value: 133100,
          category: 0,
        },
        {
          id: 14,
          date: 13,
          value: 1200,
          category: 3,
        },
        {
          id: 31,
          date: 13,
          value: 12400,
          category: 3,
        },
        {
          id: 32,
          date: 13,
          value: 2400,
          category: 1,
        },
        {
          id: 33,
          date: 13,
          value: 1300,
          category: 0,
        },
        {
          id: 22,
          date: 14,
          value: 2800,
          category: 4,
        },
        {
          id: 10,
          date: 15,
          value: 201500,
          category: 4,
        },
        {
          id: 23,
          date: 15,
          value: 18700,
          category: 3,
        },
        {
          id: 3,
          date: 17,
          value: 2400,
          category: 3,
        },
        {
          id: 15,
          date: 17,
          value: 5400,
          category: 2,
        },
        {
          id: 21,
          date: 18,
          value: 3300,
          category: 3,
        },
        {
          id: 16,
          date: 19,
          value: 193700,
          category: 4,
        },
        {
          id: 24,
          date: 20,
          value: 3400,
          category: 3,
        },
        {
          id: 18,
          date: 21,
          value: 1600,
          category: 1,
        },
        {
          id: 27,
          date: 21,
          value: 2100,
          category: 1,
        },
        {
          id: 2,
          date: 24,
          value: 2900,
          category: 3,
        },
        {
          id: 5,
          date: 24,
          value: 1500,
          category: 1,
        },
        {
          id: 8,
          date: 24,
          value: 1400,
          category: 4,
        },
        {
          id: 4,
          date: 27,
          value: 5800,
          category: 4,
        },
        {
          id: 19,
          date: 27,
          value: 155700,
          category: 1,
        },
        {
          id: 7,
          date: 28,
          value: 1300,
          category: 1,
        },
        {
          id: 26,
          date: 28,
          value: 2700,
          category: 4,
        },
      ],
    };
  }
}
