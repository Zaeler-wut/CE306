**SkillTag.tsx

โค้ดไฟล์นี้เป็น component ที่รับค่ามาสองอย่างคือ skillName กับ level แล้วนำไปแสดงผลเป็นแท็กของทักษะ

ข้างบนสุดของไฟล์จะมีการนิยาม type Skill ซึ่งใช้กำหนดโครงสร้างของทักษะ โดยระบุว่า skillName เป็น string และ level เป็นค่าที่เลือกได้ระหว่าง 'Beginner', 'Intermediate', หรือ 'Advanced'

จากนั้นสร้างตัวแปร levelColors ที่เก็บค่าสีไว้ตามระดับ level
แต่ละ level จะมีค่าสีเฉพาะของมัน แล้วเวลาใช้งานใน component จะอิงจากตรงนี้

ในตัว component SkillTag จะเช็คว่า level มีค่าหรือไม่ ถ้ามีก็ใช้สีพื้นหลังจาก levelColors ถ้าไม่มีให้ใช้สีเทา

นอกจากนี้ยังตั้งค่า fontStyle ให้เป็น italic ถ้ามี level ถ้าไม่มีจะใช้ normal
สุดท้าย component นี้จะ return ออกมาเป็น <span> ที่แสดงชื่อทักษะ แล้วตามด้วย (ระดับ) ถ้ามี level แนบมาด้วย

***UserProfileCard.tsx

component นี้ใช้สำหรับแสดงโปรไฟล์ของผู้ใช้หนึ่งคน รับ props เข้ามาสองอย่างคือ user และ onViewDetails

type UserData ถูกนิยามไว้ด้านบน ระบุว่าแต่ละ user ต้องมี id, name, email, online, avatarUrl และ array ของ skills

ใน component จะมีการจัด layout ด้วย div หลักที่ครอบทั้งหมด แล้วแบ่งออกเป็น 3 ส่วน:

ส่วนแสดงโปรไฟล์ผู้ใช้ด้านบน

มีรูปภาพ (avatarUrl)

ชื่อ (name)

อีเมล (email)

สถานะ (online) ถ้าเป็น true จะแสดงว่า "Online" ถ้าเป็น false จะแสดงว่า "Offline" ส่วนแสดงทักษะ

วนลูป user.skills ด้วย .map() แล้วส่งแต่ละทักษะไปยัง SkillTag เพื่อแสดงแท็กของทักษะนั้น ๆ

ปุ่ม View Details

เมื่อกดปุ่ม จะเรียกฟังก์ชัน onViewDetails พร้อมส่ง user.id กลับออกไป

ทั้งหมดนี้ทำให้ component นี้ทำหน้าที่แสดงข้อมูลผู้ใช้ได้ครบจาก props ที่ส่งเข้ามา



**App.tsx

ไฟล์นี้เป็นตัวหลักของแอป ทำหน้าที่สร้างข้อมูลและเรียกใช้ UserProfileCard

ข้างใน component จะมีการกำหนด array ของผู้ใช้ขึ้นมา 3 คน เก็บไว้ในตัวแปร users
แต่ละคนมีข้อมูลตามที่ type UserData กำหนด เช่น id, name, email, avatarUrl, online และ skills

จากนั้นมีฟังก์ชัน handleViewDetails ซึ่งแค่ alert ID ของ user ออกมาเมื่อมีการกดปุ่มดูรายละเอียด

ในส่วนของ JSX มีการจัด layout หน้าจอ แล้วใช้ .map() วน users เพื่อ render UserProfileCard แต่ละใบ โดยส่ง props user และ onViewDetails เข้าไปให้ทุกใบ













# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
