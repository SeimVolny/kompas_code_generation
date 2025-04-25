"use client";

import {FC, useEffect, useState} from "react";

export const Generate: FC = () => {
    const [error,setError] = useState<boolean>(false);
    const [request,setRequest] = useState<string | null>(null);
    const [data,setData] = useState<any>(null);

    const fetchCode = async (prompt: string) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/code");
            const data =await response.json();
            setData(data);
        } catch (e) {
            setError(true);
            return e;
        }

    }

    useEffect(() => {
        const data = localStorage.getItem("request") || "";
        const storedData = JSON.parse(data);

        let generationPrompt = `Создай ${storedData.Name} в КОМПАС-3D с параметрами:\n`;
        generationPrompt += `- Тип: ${storedData.Type}\n`;
        generationPrompt += storedData.Length ? `- Длина: ${storedData.Length} мм\n` : "";
        generationPrompt += storedData.Width ? `- Ширина: ${storedData.Width} мм\n` : "";
        generationPrompt += storedData.Height ? `- Высота: ${storedData.Height} мм\n` : "";
        generationPrompt += storedData.Radius1 ? `- Радиус1: ${storedData.Radius1} мм\n` : "";
        generationPrompt += storedData.Radius2 ? `- Радиус2: ${storedData.Radius2} мм\n` : "";
        generationPrompt += storedData.Category ? `- Категория: ${storedData.Category}` : "";


        if (!storedData.Name || !storedData.Type || !storedData.Category) {
            setError(true);
        } else {
            setRequest(generationPrompt);

        }
    }, []);

    useEffect(() => {
        if (request) {
            fetchCode(request);
        }
    }, [request]);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    return (
        <div className="generate">
            {!error && data && <p className="model__code">{data.message}</p>}
            {!error && !data &&
                <>
                <h1 className="model__picker__title">Происходит генерация кода</h1>
                        <div className="loader__spinner"/>
                    </>
            }
            {error
                    &&
                <h1 className="model__picker__title">Произошла ошибка генерации кода. Заполните все необходимые данные</h1>
            }

        </div>
    );
};
