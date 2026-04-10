src/
├── api/                        <-- الفولدر الجديد
│   ├── axiosConfig.js          # إعدادات Axios والـ Token
│   ├── authApi.js              # دوال المصادقة (تسجيل الدخول/الاشتراك)
│   ├── contentApi.js           # دوال المحتوى (الأفلام/المسلسلات)
│   ├── categoriesApi.js        # دوال التصنيفات
│   ├── usersApi.js             # دوال إدارة المستخدمين والملف الشخصي
│   ├── reviewsApi.js           # دوال المراجعات والتقييمات
│   ├── favoritesApi.js         # دوال المفضلة
│   └── dashboardApi.js         # إحصائيات لوحة التحكم
│
├── assets/                 
│       └── Logo.png       
│
├── components/              
│   ├── Admin/
│   │   └── AdminHeader.jsx  
│   └── User/
│       ├── Header1.jsx   
│       ├── Header2.jsx      
│       └── Footer.jsx                   
│
├── pages/                   
│   ├── Admin/
│   │   ├── AdminDashboard.jsx   
│   │   ├── AddUpdateContent.jsx   
│   │   ├── ManageCategories.jsx
│   │   ├── ManageContent.jsx    
│   │   ├── ManageReviews.jsx   
│   │   └── ManageUsers.jsx      
│   │
│   ├── Auth/
│   │   ├── Login.jsx            
│   │   └── Register.jsx         
│   │
│   └── User/
│       ├── Home.jsx            
│       ├── Details.jsx     
│       ├── Favorites.jsx     
│       └── UserProfile.jsx    
│
├── layouts/              
│   ├── AdminLayout.jsx   
│   ├── UserLayout.jsx    
│   └── AuthLayout.jsx     
│
├── App.jsx                  
└── main.jsx