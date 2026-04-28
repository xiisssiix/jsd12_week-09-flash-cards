import React from 'react'
import ReactDOM from 'react-dom/client'
import Answer from './components/Answer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Answer
            isCorrect={true}
            countryName="Peru" // ลองเปลี่ยนเป็นประเทศอื่นในกลุ่มของคุณ
            imageUrl="/src/assets/images/category/south-america/ecuador.jpg" // เปลี่ยน Path รูปให้ตรงกัน
            onNext={() => console.log("ไปข้อถัดไป!")}
        />
    </React.StrictMode>
)