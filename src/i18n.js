import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // ใช้สำหรับโหลดไฟล์การแปล

i18n
  .use(HttpBackend) // ใช้ HttpBackend เพื่อโหลดไฟล์การแปลจากไฟล์ภายนอก
  .use(initReactI18next) // ส่ง i18n ลงใน react-i18next
  .init({
    lng: 'th', // ตั้งค่าภาษาเริ่มต้น
    fallbackLng: 'th', // หากไม่มีไฟล์แปลที่ตรงกัน จะใช้ภาษา fallback
    interpolation: {
      escapeValue: false // ไม่ต้อง escape เพราะ React ป้องกัน XSS แล้ว
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // ระบุ path ของไฟล์การแปล
    },
  });

export default i18n;
