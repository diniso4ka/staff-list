import { FC, useEffect, useState } from "react";
import s from "./Select.module.scss";
import cls from "classnames";

interface SelectProps {
  className?: string;
  setCollapsed: (status: boolean) => void;
  collapsed: boolean;
  onClick: (e: MouseEvent) => void;
  selected?: string;
  labels: string[];
  setValues: (employee) => void;
}

export const Select: FC<SelectProps> = ({
  className,
  setCollapsed,
  collapsed,
  onClick,
  selected,
  labels,
  setValues,
}) => {
  const [selectedRole, setSelectedRole] = useState<string>(selected);
  const onHandleClick = (e) => {
    onClick(e);
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setSelectedRole(selected);
  }, [selected]);

  const onHandleSelect = (e) => {
    setSelectedRole(e.target.innerHTML);
    setValues((prev) => ({ ...prev, role: e.target.innerHTML }));
  };
  return (
    <div onClick={onHandleClick} className={cls(s.Select, className)}>
      <span className={s.selectedType}>{selectedRole}</span>
      <div className={cls(s.items, { [s.collapsed]: collapsed })}>
        {labels
          .filter((role) => role !== selectedRole)
          .map((role) => (
            <label onClick={onHandleSelect} className={s.item}>
              {role}
            </label>
          ))}
      </div>
    </div>
  );
};
