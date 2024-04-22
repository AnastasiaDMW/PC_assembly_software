import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../modules/scss/home.scss'

export default function Home({userAuthorize}) {

    let navigate = useNavigate();

    return (
        <>
            <button onClick={() => {
                if (userAuthorize)
                    navigate("/profile");
                else
                    navigate("/auth/login");
            }}>Профиль</button><br/><br/>
            <button onClick={() => {}}>Главная страница</button><br/><br/>
            <button onClick={() => {}}>Конфигуратор</button><br/><br/>
            <button onClick={() => {}}>Сборки</button><br/><br/>
        </>
    );

}