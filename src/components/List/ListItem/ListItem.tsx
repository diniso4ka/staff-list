import { FC } from "react";

import s from "./ListItem.module.scss";
import cls from "classnames";

import { Employee } from "app/store/types";
import { Link } from "react-router-dom";

import trueIcon from "shared/assets/images/true.png";
import falseIcon from "shared/assets/images/false.png";

interface ListItemProps {
  className?: string;
  employeeData: Employee;
}

export const ListItem: FC<ListItemProps> = ({ className, employeeData }) => {
  return (
    <Link
      to={`update/${employeeData.id}`}
      className={cls(s.ListItem, className)}
    >
      <label className={s.label}>{employeeData.name}</label>
      <label className={s.label}>{employeeData.role}</label>
      <label className={s.label}>{employeeData.phone}</label>
      <div>
        <label className={s.label}>
          {employeeData.isArchive ? (
            <img className={s.icon} src={trueIcon} />
          ) : (
            <img className={s.icon} src={falseIcon} />
          )}
        </label>
      </div>
    </Link>
  );
};
