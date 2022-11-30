import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

export default function Alert() {
    const { alert } = useContext(AlertContext);
  return alert !== null && (
    <p className="flex flex-items-start mb-4 space-x-2">
        {/* {alert.type === 'error' && (

        )} */}

        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.message}</strong>
        </p>
    </p>
  )
}
