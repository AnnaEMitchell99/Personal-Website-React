import { createRoot } from "react-dom/client";
import { useState } from "react";
import Header from "./Components/header";
import Body from "./Components/body";


const MainAppElement = () => {
    return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <Body />
        </div>
    </div>
    )
}

const appElement = document.getElementById("app");
const root = createRoot(appElement)

root.render(<MainAppElement />)