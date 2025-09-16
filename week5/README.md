5.1  Counter เป็นคอมโพเนนต์แบบฟังก์ชันที่ใช้ React และ useState ในการเก็บค่าตัวนับ ซึ่งเริ่มต้นที่ 0 โดยมีตัวแปร count เก็บค่าปัจจุบัน พร้อมฟังก์ชัน setCount สำหรับเปลี่ยนค่า ภายในมีฟังก์ชันเพิ่มค่า (increment) ที่เพิ่ม count ทีละ 1, ฟังก์ชันลดค่า (decrement) ที่ลด count ทีละ 1 และฟังก์ชันรีเซ็ต (reset) ที่ตั้ง count กลับเป็น 0

ในส่วนของ UI จะแสดงหัวข้อ “Counter Exercise” ตามด้วยตัวเลขที่นับอยู่ตรงกลาง และมีปุ่ม 3 ปุ่มเรียงกัน คือปุ่มเพิ่ม ปุ่มลด และปุ่มรีเซ็ต พอกดปุ่มแต่ละปุ่มก็จะเรียกใช้ฟังก์ชันที่เกี่ยวข้องเพื่อเปลี่ยนค่า count และทำให้ตัวเลขบนหน้าจอเปลี่ยนตามแบบเรียลไทม์ ตัวนี้เป็นอินเทอร์เฟสง่าย ๆ ที่ให้ผู้ใช้โต้ตอบกับตัวนับได้ทันทีผ่านการกดปุ่ม.


5.2  ประกาศ interface ชื่อ FormData เพื่อกำหนดโครงสร้างข้อมูลฟอร์ม มีแค่สองค่า คือ name กับ email ซึ่งเป็น string ทั้งคู่

ในคอมโพเนนต์ UserForm ใช้ useState สร้าง state สามตัว คือ name กับ email ที่เริ่มต้นเป็นข้อความว่าง ๆ เพื่อเก็บข้อมูลที่ผู้ใช้พิมพ์เข้ามา และ submitFormData ที่เริ่มเป็น undefined ไว้เก็บข้อมูลตอนกดปุ่ม Submit เท่านั้น

ช่อง input ทั้งสองผูกกับ state เหล่านี้แบบสองทาง คือเมื่อพิมพ์ข้อมูล ข้อมูลจะถูกอัพเดตเข้า state ผ่าน onChange และค่าที่อยู่ใน state ก็จะแสดงทันทีในช่องกรอก

เมื่อกดปุ่ม Submit ฟังก์ชันจะทำงาน แจ้งเตือนข้อมูลที่กรอกผ่าน alert และเก็บข้อมูลลงใน submitFormData ส่วนปุ่ม Clear จะล้างค่า name กับ email เป็นว่าง และเคลียร์ submitFormData กลับเป็น undefined ทำให้ข้อมูลทั้งหมดหายไป

ส่วน UI จะแสดงหัวข้อ “User Form Exercise - Solution” ตามด้วยป้ายแสดงชื่อและอีเมลที่พิมพ์เข้ามา ช่อง input พร้อม placeholder แนะนำการกรอกข้อมูล และปุ่ม Submit กับ Clear ที่จัดเรียงในบรรทัดเดียวกัน กดแล้วทำงานทันทีโดยไม่ต้องรีเฟรชหน้า

สุดท้ายมีบล็อกแสดงข้อมูลที่ผู้ใช้ส่งล่าสุด ถ้ายังไม่เคยส่งจะขึ้นว่า “ยังไม่ได้กรอก” แต่ถ้าส่งแล้วก็จะแสดงชื่อและอีเมลตามข้อมูลใน submitFormData























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


