self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // ปล่อยผ่านการโหลดข้อมูลปกติ
});
