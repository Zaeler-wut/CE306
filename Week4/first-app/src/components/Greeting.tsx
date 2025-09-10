import React from "react";

interface GreetingProps {
    name: string;
    messageCount?: number;
}

const Greeting = (props: GreetingProps) => {
    return (
        <div>
            <h1>สวัสดี, {props.name}!</h1>
            {props.messageCount && <p>คุณมี {props.messageCount} ข้อความใหม่</p>}
        </div>
    );
};

export default Greeting;