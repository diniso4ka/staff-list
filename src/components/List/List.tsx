import { FC, useEffect, useState } from "react";
import s from "./List.module.scss";
import cls from "classnames";
import { ListItem } from "./ListItem";
import { Employee } from "app/store/types";
import { sortByAlphabet } from "shared/helpers/sortArray";

interface ListProps {
  className?: string;
  data: Employee[];
}

export const List: FC<ListProps> = ({ className, data }) => {
  const [dataItems, setDataItems] = useState<Employee[]>(data);
  const [sorted, setSorted] = useState<boolean>(false);

  const onHandleSort = () => {
    setSorted(!sorted);
    if (!sorted) {
      setDataItems(dataItems.sort(sortByAlphabet));
    } else {
      setDataItems(dataItems.sort(sortByAlphabet).reverse());
    }
  };

  useEffect(() => {
    if (!dataItems.length) {
      setDataItems(data);
    }
  }, [data]);

  return (
    <div className={cls(s.List, className)}>
      <ul className={s.header}>
        <li className={s.headerItem}>
          Имя
          <span onClick={onHandleSort} className={s.sort}>
            sort
          </span>
        </li>
        <li className={s.headerItem}>Дожность</li>
        <li className={s.headerItem}>Номер телефона</li>
        <li className={s.headerItem}>В архиве</li>
      </ul>
      <div className={s.items}>
        {dataItems.map((employee: Employee) => (
          <ListItem
            className={s.item}
            key={employee.id}
            employeeData={employee}
          />
        ))}
      </div>
    </div>
  );
};
