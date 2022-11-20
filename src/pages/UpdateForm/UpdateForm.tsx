import { FC, useEffect, useState } from "react";
import s from "./Update.module.scss";
import cls from "classnames";
import { updateFormValues } from "shared/helpers/defaultValues";
import { useNavigate, useParams } from "react-router-dom";
import { Employee, useAppDispatch, useAppSelector } from "app/store/types";
import {
  createNewEmployee,
  deleteEmployee,
  updateEmployee,
} from "app/store/slices/staff/staff";
import { Button, Select } from "components";
import { RoutesPaths } from "shared/config/routeConfig";

interface UpdateFormProps {
  className?: string;
}

export const UpdateForm: FC<UpdateFormProps> = ({ className }) => {
  const employeeData = useAppSelector((state) => state.staff.items);
  const roles = useAppSelector((state) => state.staff.roles);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [values, setValues] = useState<Employee>(updateFormValues);
  const [errors, setErrors] = useState<string>("");

  const onHandleSave = (e) => {
    e.preventDefault();
    if (!values.name) {
      return setErrors("Enter your name");
    }
    if (!values.phone) {
      return setErrors("Enter your phone number");
    }
    if (!values.birthday) {
      return setErrors("Enter your birthday");
    }
    if (params.id) {
      dispatch(updateEmployee(values));
      navigate(RoutesPaths.MAIN);
    } else {
      dispatch(createNewEmployee(values));
      navigate(RoutesPaths.MAIN);
    }
  };

  const onHandleDelete = () => {
    dispatch(deleteEmployee(values));
    navigate(RoutesPaths.MAIN);
  };

  const onChangeValue = (e, input) => {
    setValues((prev) => ({ ...prev, [input]: e }));
  };

  useEffect(() => {
    if (params.id) {
      const employee = employeeData.find(
        (employee) => employee.id === Number(params.id)
      );
      setValues(employee);
    }
  }, []);

  return (
    <div
      onClick={() => setCollapsed(true)}
      className={cls(s.UpdateForm, className)}
    >
      <h1 className={s.title}>Редактировать данные сотрудника</h1>
      <p>{errors}</p>
      <form className={s.form}>
        <div className={s.formItem}>
          <label className={s.label}>Имя</label>
          <input
            value={values.name}
            onChange={(e) => onChangeValue(e.target.value, "name")}
            className={s.input}
            type={"text"}
          />
        </div>
        <div className={s.formItem}>
          <label className={s.label}>Номер телефона</label>
          <input
            value={values.phone}
            onChange={(e) => onChangeValue(e.target.value, "phone")}
            className={s.input}
            type={"text"}
          />
        </div>
        <div className={s.formItem}>
          <label className={s.label}>Дата рождения</label>
          <input
            value={values.birthday}
            onChange={(e) => onChangeValue(e.target.value, "birthday")}
            className={s.input}
            type={"text"}
          />
        </div>
        <div className={s.formItem}>
          <div>
            <label className={s.label}>В архиве</label>
            <input
              defaultChecked={values.isArchive || false}
              onChange={(e) => onChangeValue(e.target.checked, "isArchive")}
              className={s.input}
              type={"checkbox"}
            />
          </div>
          <Select
            onClick={(e) => e.stopPropagation()}
            setCollapsed={setCollapsed}
            collapsed={collapsed}
            selected={values.role}
            labels={roles}
            setValues={setValues}
            className={s.select}
          />
        </div>
        <div className={s.formItem}>
          {params.id && (
            <>
              <Button onClick={(e) => onHandleSave(e)} className={s.button}>
                Сохранить
              </Button>
              <Button onClick={onHandleDelete} className={s.button}>
                Удалить
              </Button>
            </>
          )}
          {!params.id && (
            <>
              <Button onClick={(e) => onHandleSave(e)} className={s.button}>
                Создать
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
