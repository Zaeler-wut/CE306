// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from "react";
// import Greeting from "./components/Greeting";
// import WelcomeBanner from "./components/WelcomeBanner";

// function App() {
//     return (
//         <div>
//             <Greeting name="ผู้ใช้งาน TypeScript" messageCount={5}/>
//             <Greeting name="นักพัฒนา Vite"/>

//             <WelcomeBanner title="ยินดีต้อนรับสู่โลกของ TypeScript!">
//                 <p>เนื้อหานี้ส่งผ่าน children prop</p>
//             </WelcomeBanner>
//         </div>
//     );
// }

// export default App;

import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import type { UserData } from "./components/UserProfileCard";

const App: React.FC = () => {
  const users: UserData[] = [
    {
      id: "user1",
      name: "Sami Hupia",
      email: "sami.h@example.com",
      online: true,
      avatarUrl:
        "https://cdn.pixabay.com/photo/2016/03/26/23/07/person-1281777_1280.jpg",
      skills: [
        { skillName: "React", level: "Advanced" },
        { skillName: "TypeScript", level: "Intermediate" },
        { skillName: "CSS", level: "Advanced" },
      ],
    },
    {
      id: "user2",
      name: "Vangoe Mos",
      email: "vangoe.M@example.com",
      online: true,
      avatarUrl:
        "https://cdn.pixabay.com/photo/2017/11/18/05/02/yoga-2959226_1280.jpg",
      skills: [
        { skillName: "Project Management", level: "Advanced" },
        { skillName: "Construction", level: "Beginner" },
      ],
    },
    {
      id: "user3",
      name: "chaisit madee",
      email: "chaisit.m@example.com",
      online: false,
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: [
        { skillName: "Vue.js" },
        { skillName: "Node.js", level: "Intermediate" },
      ],
    },
  ];

  const handleViewDetails = (userId: string) => {
    alert(`Viewing details for user ID: ${userId}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#d4dde6ff",
        height: "100vh",
        width: "100vw",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: "0 0 32px", color: "#333" }}>User Profile Cards</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "nowrap",
          maxWidth: 1100,
          width: "100%",
        }}
      >
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            user={user}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
