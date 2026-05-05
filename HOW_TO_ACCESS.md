# 🎯 كيفية الوصول والاستخدام

## الوصول المباشر

### عبر المتصفح:
```
http://localhost:3000
```

## كيفية التشغيل من المشروع

### 1. في Terminal / Command Prompt:

```bash
# الذهاب إلى مجلد المشروع
cd /Users/khalidalshehri/Desktop/project/ME/Demo/demo

# بدء خادم التطوير
npm start
```

### 2. سيفتح المتصفح تلقائياً على صفحة التسجيل

### 3. عند إجراء تعديلات:
- الصفحة سيتم تحديثها تلقائياً
- **إذا لم تري التغييرات**: اضغط `Ctrl+Shift+R` (Windows/Linux) أو `Cmd+Shift+R` (Mac)

## التغييرات الحالية

✅ **الخطوط العربية**: Almarai, Cairo, Tajawal
✅ **الألوان**: نظام أزرق احترافي
✅ **الفورم**: من اليمين (RTL)
✅ **التصميم**: فخم وأنيق وحديث

## الملفات الرئيسية

- `src/components/Login.tsx` - مكون الصفحة
- `src/styles/Login.css` - الأنماط والألوان
- `src/components/Logo.tsx` - شعار الموقع

## حل المشاكل

### إذا لم يفتح المتصفح تلقائياً:
```bash
# اذهب للمشروع أولاً
cd /Users/khalidalshehri/Desktop/project/ME/Demo/demo

# ثم بدء الخادم مجدداً
npm start
```

### إذا قال "Port 3000 already in use":
```bash
# قتل العملية الأخرى على المنفذ
# على Mac/Linux:
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# ثم شغل npm start مجدداً
npm start
```

---

الموقع جاهز الآن! 🎉
