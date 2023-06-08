import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
  },
  reducers: {
    addExpense: (currentSlice, action) => {
      //On définis une action addExpense
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      }); //On a override le price de l'objet action.payload
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
    },
  },
});

const { addExpense, setIncome } = expenseSlice.actions; //On récupère l'action addExpense
export { addExpense, setIncome }; //On exporte l'action addExpense pour pouvoir l'utiliser
