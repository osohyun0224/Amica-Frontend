import dayjs from "dayjs";
import { categorys } from "./data.js";

const expenseList = [];

let id = 1;

function createRandomExpense() {
  const rangeStartDate = dayjs([2023, 4]);
  const rangeEndDate = dayjs([2023, 8]);
  const duration = rangeEndDate - rangeStartDate;
  const date = rangeStartDate.add(Math.floor(Math.random() * duration), "ms");
  const category = categorys[Math.floor(Math.random() * categorys.length)];
  const price = Math.floor(Math.random() * 160) * 100 + 2000;
  const orderId = Math.random() * 10 < 3 ? 1000000 : null;

  expenseList.push({
    id: id++,
    name: `${id - 1}-${category.title}`,
    category: category.id,
    price,
    date: date.format(),
    orderId: orderId,
    customData: false,
  });
  date.year();
  date.month();
}

for (let i = 0; i < 120; i++) {
  createRandomExpense();
}

export function GetExpenseMonthlyList() {
  return expenseList.reduce((result, item) => {
    const date = dayjs(item.date);
    const year = date.year();
    const month = date.month() + 1;

    const findResult = result.find(
      (item) => item.year === year && item.month === month,
    );

    if (!findResult) {
      result.push({
        year,
        month,
      });
    }

    return result;
  }, []);
}

export function GetExpenseMonthly(year, month) {
  const list = expenseList.filter((item) => {
    const date = dayjs(item.date);
    return date.year() === year && date.month() + 1 === month;
  });

  return JSON.parse(
    JSON.stringify({
      year,
      month,
      list,
    }),
  );
}
