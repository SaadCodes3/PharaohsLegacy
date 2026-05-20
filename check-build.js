#!/usr/bin/env node

/**
 * فحص سريع لملف App.jsx
 * يتحقق من:
 * - وجود جميع المكونات
 * - وجود جميع البيانات
 * - اكتمال الملف بشكل صحيح
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');

try {
  const content = fs.readFileSync(filePath, 'utf8');
  
  const checks = [
    { name: 'import React', pattern: /import.*react/i },
    { name: 'NavBar component', pattern: /function NavBar/ },
    { name: 'Hero component', pattern: /function Hero/ },
    { name: 'Stats component', pattern: /function Stats/ },
    { name: 'Section component', pattern: /function Section/ },
    { name: 'PharaohCard component', pattern: /function PharaohCard/ },
    { name: 'TempleCard component', pattern: /function TempleCard/ },
    { name: 'MuseumCard component', pattern: /function MuseumCard/ },
    { name: 'BookingForm component', pattern: /function BookingForm/ },
    { name: 'Timeline component', pattern: /function Timeline/ },
    { name: 'ContactSection component', pattern: /function ContactSection/ },
    { name: 'App export', pattern: /export default function App/ },
    { name: 'pharaohs data', pattern: /const pharaohs = \[/ },
    { name: 'temples data', pattern: /const temples = \[/ },
    { name: 'museums data', pattern: /const museums = \[/ },
    { name: 'packages data', pattern: /const packages = \[/ },
    { name: 'facts data', pattern: /const facts = \[/ },
    { name: 'Proper closing', pattern: /export default function App.*\};?\s*$/ },
  ];
  
  console.log('🔍 فحص ملف App.jsx...\n');
  
  let passCount = 0;
  let failCount = 0;
  
  checks.forEach(check => {
    if (check.pattern.test(content)) {
      console.log(`✅ ${check.name}`);
      passCount++;
    } else {
      console.log(`❌ ${check.name}`);
      failCount++;
    }
  });
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 النتائج: ${passCount} نجح، ${failCount} فشل من أصل ${checks.length}`);
  console.log('='.repeat(50) + '\n');
  
  if (failCount === 0) {
    console.log('🎉 جميع الفحوصات نجحت! الملف جاهز للاستخدام.\n');
    process.exit(0);
  } else {
    console.log('⚠️  يوجد مشاكل في الملف.\n');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ خطأ في قراءة الملف:', error.message);
  process.exit(1);
}
