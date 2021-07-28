import React from "react";
import Left from "../containers/Home/Left";
import Right from "../containers/Home/Right";

export default function Home() {
    return (
        <div className="main-content">
            <Left />
            <Right />
            {/* <RightMobile /> */}
        </div>
    );
}