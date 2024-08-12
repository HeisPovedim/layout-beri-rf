import { useState, useEffect } from "react";

import style from "./ModalWindow.module.scss";

interface IModalWindowProps {
  isOpen: boolean;
  isClose: () => void;
  children: React.ReactNode;
}

const ModalWindow: React.FC<IModalWindowProps> = ({
  isOpen,
  isClose,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className={style["modalWindow"]}>
          <div className={style["modalWindow__content"]}>
            <button
              className={style["modalWindow--close"]}
              type="button"
              onClick={() => isClose()}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWindow;
