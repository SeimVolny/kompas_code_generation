"use client";

import { FC, useEffect, useState } from "react";

export const Generate: FC = () => {
    const [request, setRequest] = useState<any>(null);

    useEffect(() => {
        const data = localStorage.getItem("request") || "";
        const storedData = JSON.parse(data);

        console.log(storedData);
    }, []);

    return (
        <div className="generate">
            <h1 className="model__picker__title">Происходит генерация кода</h1>
            <div className="loader__spinner" />
        </div>
    );
};
