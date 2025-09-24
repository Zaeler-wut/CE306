6.1

App.tsx  แสดงรายการสินค้า ทั้งหมดในหน้าเดียว โดยใช้ <ProductCard /> เป็นตัวแทนของสินค้าแต่ละชิ้น
มีฟังก์ชัน handleAddToCart(): ใช้จัดการ event เมื่อผู้ใช้กดปุ่ม “เพิ่มลงตะกร้า” ปัจจุบันแสดงแค่ alert() แต่สามารถต่อยอดให้บันทึกลง state, context หรือส่งข้อมูลไป backend ได้ Rendering UI: มีการจัดวาง layout ด้วย Tailwind CSS เช่น: min-h-screen, bg-gray-200 สำหรับพื้นหลัง
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ทำให้ Responsive แสดงสินค้าเป็น 1, 2 หรือ 3 คอลัมน์ตามขนาดหน้าจอ
แสดง <ProductCard /> ทั้งหมด 3 ชิ้น โดยส่ง props ต่าง ๆ เช่นชื่อสินค้า รูป ราคา ฯลฯ เข้าไปแต่ละชิ้น


ProductCard รับ props ต่าง ๆ จาก App.tsx ได้แก่:
imageUrl: ลิงก์รูปสินค้า
title: ชื่อสินค้า
description: รายละเอียดสินค้า
price: ราคาสินค้า
onAddToCart: ฟังก์ชันที่เรียกเมื่อกดปุ่ม
ภายในคอมโพเนนต์: ใช้ Tailwind CSS ในการจัดการดีไซน์ เช่น: การแสดงรูปภาพ (<img>) ให้เป็นขนาดที่เหมาะสมการจัดวางข้อความให้อ่านง่ายใช้เงา(shadow-md) และพื้นหลัง (bg-white) เพื่อให้สินค้าแต่ละชิ้นดูแยกจากพื้นหลังปุ่ม "เพิ่มลงตะกร้า" ใช้คอมโพเนนต์ <Button /> ที่ถูกสร้างแยกไว้ เพื่อความสม่ำเสมอของปุ่มในทั้งระบบ


6.2
Navbar คือคอมโพเนนต์แถบเมนูด้านบนของเว็บไซต์ ที่แสดงเมนูนำทาง (Home, About, Services, Contact) โดยแบ่งการแสดงผลตามขนาดหน้าจอ
บนหน้าจอใหญ่ (desktop) แสดงลิงก์เมนูทั้งหมดเรียงในแนวนอนใช้ hidden md:flex เพื่อให้แสดงเฉพาะบน md ขึ้นไปบนหน้าจอเล็ก (mobile)
ซ่อนเมนูหลัก และแสดงปุ่ม hamburger menu แทนเมื่อคลิกปุ่มนั้นจะเรียก toggleMenu() เพื่อสลับค่าของ isOpenถ้า isOpen เป็น true จะแสดงเมนูแบบแนวตั้ง (dropdown) สไตล์ของ Navbar ใช้ Tailwind เช่น fixed, shadow-md, z-50 เพื่อให้อยู่บนสุดเสมอและมีเงา

App คอมโพเนนต์หลักของหน้าเว็บนี้ ซึ่งมีการจัดการสถานะเมนูเปิด/ปิดผ่าน useState ชื่อว่า isMenuOpen และส่ง isOpen กับ toggleMenu เข้าไปใน <Navbar />
เมื่อ isMenuOpen เป็น true จะมีผล 2 อย่าง Navbar จะแสดงเมนูบนมือถือ เนื้อหาด้านล่าง (pt-20) จะถูกเลื่อนลง (mt-40) เพื่อไม่ให้เมนูทับเนื้อหา (เฉพาะตอนที่เมนูเปิดอยู่)














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
