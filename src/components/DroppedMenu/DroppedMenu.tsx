import { FC, useState } from "react";
import s from "./DroppedMenu.module.scss";
import cls from "classnames";

interface DroppedMenuProps {
  className?: string;
  onClick: () => void;
  labels: string[];
}

export const DroppedMenu: FC<DroppedMenuProps> = ({
  className,
  labels,
  onClick,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={cls(s.DroppedMenu, className, {
        [s.collapsed]: collapsed,
      })}
    >
      <div className={s.items}>
        {labels.map((label) => (
          <label>{label}</label>
        ))}
      </div>
    </div>
  );
};
