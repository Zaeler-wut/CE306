import { useState } from 'react';
import Button from './components/Button'
import ProductCard from './components/ProductCard'


import Navbar from './components/Navbar';

// Workshop 6.1 *******************************************************************

function App() {
  const handleAddToCart = () => {
    alert("เพิ่มลงตะกร้าแล้ว!");
  };

  return (
    <main className="min-h-screen w-full bg-gray-200 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          รายการสินค้าของเรา
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <ProductCard
            imageUrl="https://media.studio7thailand.com/201801/iPhone_17_Pro_Cosmic_Orange_PDP_Image_Position_1_Cosmic_Orange_Color__TH-EN.jpg"
            title="IPhone 17 ProMax"
            description="ชิป A19 Pro แรงสุด กล้อง 48MP x3 จอ 6.9 OLED 120Hz ดีไซน์ไทเทเนียม ถ่ายวิดีโอ 8K แบตอึดสุด"
            price={43900}
            onAddToCart={handleAddToCart}
          />
          <ProductCard
            imageUrl="https://media.studio7thailand.com/201891/iPhone_Air_Sky_Blue_PDP_Image_Position_1_Sky_Blue_Color__TH-TH.jpg"
            title="IPhone Air"
            description="บางเบาที่สุด จอ 6.6 OLED 120Hz ชิป A19 Pro กล้อง 48MP ดีไซน์ใหม่ล้ำ พกพาง่ายสุดๆ"
            price={39900}
            onAddToCart={handleAddToCart}
          />
          <ProductCard
            imageUrl="https://media.studio7thailand.com/201841/iPhone_17_Lavender_PDP_Image_Position_1_Lavender_Color__TH-TH.jpg"
            title="IPhone 17"
            description="หน้าจอ OLED ขนาด 6.3″ พร้อม ProMotion 120Hz และ Always On Display"
            price={29900}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </main>
  );
}


// Workshop 6.2 *************************************************************************

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} />

//       <div
//         className={`pt-20 max-w-4xl mx-auto px-4 transition-all duration-300 ${
//           isMenuOpen ? "mt-40" : ""
//         }`}
//       >
//         <h1 className="text-2xl font-bold mb-4">เนื้อหาหลักของหน้าเว็บ</h1>
//         <p>
//           นี้คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
//         </p>
//       </div>
//     </div>
//   );
// };



// Button *****************************

// function App() {
//   const handleButtonClick = (type: string) => {
//     alert(`${type} button clicked!`);
//   };

//   return (
//     <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-4'>
//       <h1 className='text-3xl font-bold text-gray-700 mb-6'>Button Component Test</h1>

//       <div>
//         If you see this box styled, Tailwind base setup is likely working.
//       </div>
      
//       <div className='space-x-2'>
//         <Button variant="primary" size="sm" onClick={() => handleButtonClick('Primary SM')}>
//           Primary SM
//         </Button>
//         <Button variant="primary" size="md" onClick={() => handleButtonClick('Primary MD')}>
//           Primary MD
//         </Button>
//         <Button variant="primary" size="lg" onClick={() => handleButtonClick('Primary LG')}>
//           Primary LG
//         </Button>
//       </div>
//     </div>

//   )
// }

export default App;