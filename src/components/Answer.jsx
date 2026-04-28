import { useState } from 'react';

function Answer({ isCorrect, countryName, imageUrl, onNext }) {
    return (
        <div style={styles.wrapper}>
            <div style={{
                ...styles.card,
                // เปลี่ยนสีพื้นหลังตามสถานะ
                backgroundColor: isCorrect ? '#1a1a1a' : '#2d1a1a'
            }}>

                {/* ส่วนที่ 1: รูปภาพ - แสดงเฉพาะเมื่อตอบถูกและเปลี่ยนตาม imageUrl ที่ส่งมา */}
                {isCorrect && (
                    <div style={styles.imageContainer}>
                        <img
                            src={imageUrl}
                            alt={countryName}
                            style={styles.bgImage}
                        />
                        <div style={styles.gradientOverlay}></div>
                    </div>
                )}

                {/* ส่วนที่ 2: เนื้อหา */}
                <div style={styles.content}>

                    {/* Badge แสดงสถานะ */}
                    <div style={{
                        ...styles.statusBadge,
                        backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: isCorrect ? '#4ade80' : '#f87171',
                        border: `1px solid ${isCorrect ? '#4ade80' : '#f87171'}`
                    }}>
                        {isCorrect ? '✓ DISCOVERY SUCCESS' : '✕ EXPLORATION FAILED'}
                    </div>

                    <div style={styles.textGroup}>
                        {isCorrect ? (
                            /* กรณีตอบถูก: แสดงชื่อประเทศตามที่ส่งมาใน Props */
                            <>
                                <span style={styles.subTitle}>DESTINATION REVEALED</span>
                                <h1 style={styles.mainTitle}>{countryName}</h1>
                                <div style={styles.decorativeLine}></div>
                            </>
                        ) : (
                            /* กรณีตอบผิด: ซ่อนทุกอย่างเหลือแค่ประโยคบอกว่าผิด */
                            <h1 style={{ ...styles.mainTitle, fontSize: '38px', textTransform: 'none' }}>
                                อุ๊ย! คำตอบยังไม่ถูกต้องนะ
                            </h1>
                        )}
                    </div>

                    <div style={styles.descriptionBox}>
                        <p style={styles.description}>
                            {isCorrect
                                // ใช้ Template Literal เพื่อนำชื่อประเทศมาใส่ในคำบรรยายโดยอัตโนมัติ
                                ? `สัมผัสประสบการณ์การเดินทางที่น่าทึ่งใน ${countryName} ดื่มด่ำกับวัฒนธรรมที่สวยงามระดับโลก`
                                : "ไม่ต้องเสียใจไป! ลองรวบรวมสมาธิแล้วไปลุยใหม่ในข้อถัดไปกันครับ"
                            }
                        </p>
                    </div>

                    <button
                        className="next-button"
                        style={styles.nextButton}
                        onClick={onNext}
                    >
                        {isCorrect ? 'CONTINUE JOURNEY' : 'TRY AGAIN'}
                    </button>
                </div>
            </div>

            <style>
                {`
                @keyframes zoomIn { 0% { transform: scale(1); } 100% { transform: scale(1.12); } }
                @keyframes slideUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
                .next-button { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; }
                .next-button:hover { 
                    background-color: #f0f0f0 !important; 
                    transform: scale(1.05) translateY(-2px);
                    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2) !important;
                }
                `}
            </style>
        </div>
    );
}

const styles = {
    wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#000000', zIndex: 9999, overflow: 'hidden' },
    card: { width: '90%', maxWidth: '450px', height: '650px', position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.8)', animation: 'slideUp 0.8s ease', transition: 'background-color 0.5s ease' },
    imageContainer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 },
    bgImage: { width: '100%', height: '100%', objectFit: 'cover', animation: 'zoomIn 12s infinite alternate ease-in-out' },
    gradientOverlay: { position: 'absolute', bottom: 0, width: '100%', height: '85%', background: 'linear-gradient(to top, rgba(0,0,0,1) 15%, rgba(0,0,0,0.4) 60%, transparent 100%)' },
    content: { position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '45px', color: 'white', fontFamily: "'Prompt', sans-serif" },
    statusBadge: { alignSelf: 'flex-start', padding: '6px 16px', borderRadius: '100px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '20px', backdropFilter: 'blur(8px)' },
    subTitle: { fontSize: '12px', letterSpacing: '5px', color: '#bbb', display: 'block', marginBottom: '5px' },
    mainTitle: { fontSize: '46px', fontWeight: '900', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', lineHeight: 1.1 },
    decorativeLine: { width: '50px', height: '4px', backgroundColor: '#fff', marginTop: '15px', marginBottom: '20px' },
    descriptionBox: { marginBottom: '35px' },
    description: { fontSize: '14px', lineHeight: '1.7', color: '#ddd', margin: 0 },
    nextButton: { background: 'white', color: 'black', border: 'none', padding: '18px 30px', borderRadius: '100px', fontWeight: '900', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer' }
};

export default Answer;