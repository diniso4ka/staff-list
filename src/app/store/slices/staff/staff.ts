import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../types";
import { EmployeeMock } from "shared/mocks/employees";
import { idGenerator } from "../../../../shared/helpers/idGenerator";

interface InitialStateType {
  items: Employee[];
  roles: string[];
}

const initialState: InitialStateType = {
  items: EmployeeMock,
  roles: ["cook", "waiter", "driver"],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    createNewEmployee(state, action) {
      const newEmployee = action.payload;
      const id = idGenerator(state.items);
      state.items = [...state.items, { ...newEmployee, id: id }];
    },
    updateEmployee(state, action) {
      const updatedEmployee = action.payload;
      state.items = state.items.map((employee: Employee) => {
        if (employee.id === updatedEmployee.id) {
          return { ...updatedEmployee };
        } else {
          return employee;
        }
      });
    },
    deleteEmployee(state, action) {
      const deletedEmployee = action.payload;
      state.items = state.items.filter(
        (employee: Employee) => deletedEmployee.id !== employee.id
      );
    },
  },
});

export const { createNewEmployee, updateEmployee, deleteEmployee } =
  staffSlice.actions;
export default staffSlice.reducer;
