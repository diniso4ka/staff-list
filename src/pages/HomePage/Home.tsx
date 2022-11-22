import { FC, useEffect, useState } from "react";
import s from "./Home.module.scss";
import cls from "classnames";
import { Button, List } from "components";
import { useAppSelector } from "app/store/types";
import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "shared/config/routeConfig";
import { sortArray } from "shared/helpers/sortArray";

interface HomeProps {
  className?: string;
}

export const Home: FC<HomeProps> = ({ className }) => {
  const staffData = useAppSelector((state) => state.staff.items);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const onHandleCreate = () => {
    navigate(RoutesPaths.CreateForm);
  };

  useEffect(() => {
    setData(() => [...sortArray(staffData)]);
  }, []);
  useEffect(() => {
    console.log("rerender");
  }, [data]);

  return (
    <div className={cls(s.Home, className)}>
      <div className={s.header}>
        <h1>Список сотрудников</h1>
        <Button onClick={onHandleCreate}>Создать</Button>
      </div>
      <List className={s.list} data={data} />
    </div>
  );
};
