import { FC } from "react";
import { Home } from "pages/HomePage/Home";
import { UpdateForm } from "pages/UpdateForm/UpdateForm";

export enum RoutesPaths {
  MAIN = "/",
  UpdateForm = "update/:id",
  CreateForm = "/create",
}

export interface RoutesTypes {
  path: RoutesPaths;
  element: FC;
}

export const routeConfig: Record<string, RoutesTypes> = {
  main: {
    path: RoutesPaths.MAIN,
    element: Home,
  },
  updateForm: {
    path: RoutesPaths.UpdateForm,
    element: UpdateForm,
  },
  createForm: {
    path: RoutesPaths.CreateForm,
    element: UpdateForm,
  },
};
