/**
 * ==========================================================================
 * ROSTO RESTAURANT (مطعم روستو - تشيكن آند مور)
 * VVVIP High-Performance Digital Menu & WhatsApp Ordering Platform
 * Designed & Developed by Mohamed Emad (+201020766525)
 * ==========================================================================
 */

// Deployment URL for QR Code & Sharing
const GITHUB_PAGES_URL = "https://mohamedemad7299.github.io/rosto-menu/";

// Primary Hotlines & Ordering WhatsApp Numbers
const RESTAURANT_HOTLINES = ["01200001100", "01011231231", "01111555674"];
const PRIMARY_WHATSAPP = "01011231231";
const SECONDARY_WHATSAPP = "01111555674";
const COMPLAINTS_HOTLINE = "01068061595";

// Developer Portfolio & Contact Info
const DEVELOPER_INFO = {
  name: "Mohamed Emad",
  phone: "+201020766525",
  whatsapp: "201020766525",
  facebook: "https://www.facebook.com/mohamedemad199912",
  instagram: "https://www.instagram.com/ma7amed_3emad/",
  linkedin: "https://www.linkedin.com/feed/foryou/",
  github: "https://github.com/MohamedEmad7299"
};

// Bilingual Translations Dictionary
const I18N = {
  ar: {
    brandName: "روستو",
    brandSubtitle: "تشيكن آند مور",
    brandTagline: "مطعم روستو • فراخ شواية وبروستد • شاورما سوري • مشويات فحم • بيتزا ومناقيش",
    navMenu: "المنيو",
    navBranches: "الفروع والطلب",
    navQR: "رمز QR",
    navCall: "اتصل بنا",
    navCart: "طلبك",
    heroBadge: "أشهى فراخ بروستد، شاورما سوري، مشويات فحم، بيتزا وكايزر في القاهرة والجيزة 👑",
    heroTitle: "مطعم روستو",
    heroSubtitle: "روستو تشيكن آند مور... الاسم الأقوى والأعرق للمأكولات السورية الفاخرة! نقدم لكم أشهى شاورما سوري، بروستد مقلي مقرمش، فراخ شواية، مشويات على الفحم، بيتزا إيطالية، ومناقيش شامية طازجة تخرج من الفرن مباشرة.",
    hotlineLabel: "الخط الساخن والطلب السريع:",
    complaintsLabel: "للشكاوى والمقترحات:",
    ctaMenu: "تصفح المنيو",
    ctaBranches: "فروعنا والتوصيل",
    ctaFlyer: "عرض البروشور الأصلي (9 صفحات)",
    searchPlaceholder: "ابحث في الشاورما، البروستد، المشويات، الكايزر، البيتزا، المناقيش...",
    tabAll: "الكل",
    tabBoxes: "عروض وبوكسات التوفير",
    tabShawerma: "شاورما روستو",
    tabJalapeno: "شاورما الهلابينو",
    tabFateh: "فتات روستو",
    tabCiser: "كايزر كورنر وبرجر",
    tabSandwiches: "السندوتشات والوجبات",
    tabCrunchy: "كرانشي تشيز كورنر",
    tabBroasted: "فراخ وبروستد وستربس",
    tabGrills: "مشويات الفحم والحواوشي",
    tabPizza: "بيتزا روستو الإيطالية",
    tabManakesh: "المناقيش والفطائر",
    tabPastas: "المكرونات والباستا",
    tabAppetizers: "المقبلات والشوربات والسلطات",
    tabKidsDrinks: "الأطفال والصوصات والمشروبات",
    tabBreakfast: "الفطار والحلويات",
    single: "سنجل",
    double: "دبل",
    small: "صغير (S)",
    medium: "وسط (M)",
    large: "كبير (L)",
    sandwich: "ساندوتش",
    meal: "وجبة كاملة",
    halfKg: "نصف كيلو",
    oneKg: "كيلو كامل",
    pieces3: "3 قطع",
    pieces5: "5 قطع",
    pieces6: "6 قطع",
    pieces10: "10 قطع",
    pieces20: "20 قطعة",
    chicken: "فراخ",
    meat: "لحمة",
    mix: "مكس",
    original: "أورجينال",
    cheetos: "شيتوس",
    egp: "ج.م",
    addToOrder: "أضف للطلب",
    tagSpicy: "سبايسي 🌶️",
    tagPopular: "الأكثر طلباً ⭐",
    tagSpecial: "سبيشال روستو 👑",
    tagCharcoal: "مشوي فحم 🔥",
    tagNew: "جديد ⚡",
    branchesSectionTitle: "فروع روستو وخدمة التوصيل السريع",
    branchesSectionSubtitle: "نصلك أينما كنت في 6 أكتوبر، الشيخ زايد، المهندسين، فيصل، والمقطم ساخناً وطازجاً بأعلى معايير الجودة",
    orderModalTitle: "سلة الطلب السريع عبر واتساب",
    emptyCartTitle: "سلتك فارغة حتى الآن",
    emptyCartDesc: "تصفح القائمة واختر أشهى وجبات وسندوتشات روستو!",
    orderTypeLabel: "طريقة الاستلام:",
    orderTypeDelivery: "توصيل للمنزل / دليفري 🛵",
    orderTypePickup: "استلام من المطعم (تيك أواي) 🛍️",
    orderTypeDineIn: "تناول داخل الصالة (ترابيزة) 🍽️",
    customerName: "الاسم الكريم:",
    customerPhone: "رقم الموبايل للتواصل:",
    customerBranch: "اختر فرع روستو الأقرب لك:",
    customerAddressOrTable: "العنوان بالتفصيل أو رقم الطاولة:",
    customerNotes: "ملاحظات إضافية (عادي / سبايسي / صوص إضافي / بدون مخلل...):",
    placeholderName: "مثال: محمد علي",
    placeholderPhone: "مثال: 01011231231",
    placeholderAddress: "مثال: 6 أكتوبر - الحي المتميز - عمارة 12 - شقة 4",
    placeholderTable: "مثال: طاولة رقم 4 - صالة العائلات",
    placeholderNotes: "مثال: البروستد سبايسي / تومية زيادة / الشاورما بدون مخلل",
    totalPrice: "الإجمالي:",
    sendWhatsAppBtn: "إرسال الطلب عبر واتساب 💬",
    floatOrderCta: "عرض الطلب وإتمام الشراء 💬",
    qrModalTitle: "امسح رمز QR لفتح المنيو",
    qrModalDesc: "وجّه كاميرا هاتفك المحمول إلى الرمز لفتح منيو روستو الإلكتروني في أي وقت ومشاركته مع عائلتك وأصدقائك!",
    tableNumLabel: "حدد رقم الطاولة (اختياري لخدمة الصالة):",
    tableNone: "المنيو العام بدون طاولة",
    tableNumPrefix: "طاولة رقم",
    downloadQR: "تحميل صورة QR",
    copyLink: "نسخ رابط المنيو",
    copiedAlert: "تم نسخ رابط منيو روستو بنجاح!",
    flyerModalTitle: "منيو وبروشور روستو الأصلي المطبوع (9 صفحات)",
    flyerTabAll: "جميع الصفحات (9 صفحات)",
    flyerTabShawerma: "الشاورما والفتات والبوكسات",
    flyerTabChicken: "الفراخ والمشويات",
    flyerTabBurgers: "البرجر والسندوتشات والكرانشي",
    flyerTabPizza: "البيتزا والمناقيش والباستا",
    flyerTabBranches: "الفروع وأرقام التواصل",
    footerAbout: "مطعم روستو (Rosto Chicken & More) - الوجهة الأولى والاسم الأكبر للمأكولات السورية الأصلية في مصر. أشهى شاورما سوري، بروستد مقلي مقرمش، فراخ شواية، مشويات فحم، بيتزا ومناقيش بأعلى معايير الجودة.",
    footerBrandTitle: "روستو <span>تشيكن آند مور</span> 👑",
    footerCopyright: "&copy; 2026 مطعم روستو (Rosto Chicken & More) - جميع الحقوق محفوظة",
    devCreditBy: "تصميم وتطوير:",
    selectBranchTitle: "اختر الفرع الأقرب لتوصيل طلبك",
    searchBranchPlaceholder: "ابحث باسم الفرع أو المنطقة...",
    noBranchesFound: "لا توجد فروع تطابق بحثك",
    featuredBranchBadge: "الفرع الرئيسي",
    itemsCountSuffix: "أصناف",
    clearCart: "تفريغ السلة",
    serviceNotice: "⭐ يضاف 12% خدمة داخل الصالة - جميع الأسعار شاملة ضريبة القيمة المضافة."
  },
  en: {
    brandName: "Rosto",
    brandSubtitle: "Chicken & More",
    brandTagline: "Rosto Restaurant • Broasted & Rotisserie • Syrian Shawarma • Charcoal Grills • Pizza & Manakesh",
    navMenu: "Menu",
    navBranches: "Branches & Order",
    navQR: "QR Code",
    navCall: "Call Us",
    navCart: "Order",
    heroBadge: "The Best Broasted Chicken, Shawarma, Charcoal Grills & Pizza in Cairo & Giza 👑",
    heroTitle: "Rosto Restaurant",
    heroSubtitle: "Rosto Chicken & More... The most prestigious name in authentic Syrian casual dining! Enjoy mouthwatering Syrian shawarma, ultra-crispy broasted chicken, charcoal-grilled meats, authentic Italian pizzas, and fresh oven-baked manakesh.",
    hotlineLabel: "Express Ordering Hotline:",
    complaintsLabel: "Complaints & Suggestions:",
    ctaMenu: "Explore Menu",
    ctaBranches: "Branches & Delivery",
    ctaFlyer: "View Original Flyer (9 Pages)",
    searchPlaceholder: "Search shawarma, broasted, grills, burgers, pizza, manakesh...",
    tabAll: "All",
    tabBoxes: "Value Boxes & Offers",
    tabShawerma: "Rosto Shawarma",
    tabJalapeno: "Jalapeno Shawarma",
    tabFateh: "Rosto Fateh Bowls",
    tabCiser: "Ciser Corner & Burgers",
    tabSandwiches: "Sandwiches & Quick Meals",
    tabCrunchy: "Crunchy Cheese Bowls",
    tabBroasted: "Chicken, Broasted & Strips",
    tabGrills: "Charcoal Grills & Hawawshi",
    tabPizza: "Rosto Italian Pizza",
    tabManakesh: "Syrian Manakesh & Pies",
    tabPastas: "Pastas & Macarons",
    tabAppetizers: "Appetizers, Soups & Salads",
    tabKidsDrinks: "Kids, Sauces & Drinks",
    tabBreakfast: "Breakfast & Sweet Pies",
    single: "Single",
    double: "Double",
    small: "Small (S)",
    medium: "Medium (M)",
    large: "Large (L)",
    sandwich: "Sandwich",
    meal: "Full Meal",
    halfKg: "1/2 KG",
    oneKg: "1 KG",
    pieces3: "3 Pcs",
    pieces5: "5 Pcs",
    pieces6: "6 Pcs",
    pieces10: "10 Pcs",
    pieces20: "20 Pcs",
    chicken: "Chicken",
    meat: "Meat",
    mix: "Mix",
    original: "Original",
    cheetos: "Cheetos",
    egp: "EGP",
    addToOrder: "Add to Cart",
    tagSpicy: "Spicy 🌶️",
    tagPopular: "Most Popular ⭐",
    tagSpecial: "Rosto Special 👑",
    tagCharcoal: "Charcoal Grill 🔥",
    tagNew: "New ⚡",
    branchesSectionTitle: "Our Branches & Fast Delivery Service",
    branchesSectionSubtitle: "Delivering piping hot and fresh all across 6th of October, Sheikh Zayed, Mohandessin, Faisal, and Mokattam",
    orderModalTitle: "Express WhatsApp Order Cart",
    emptyCartTitle: "Your cart is empty",
    emptyCartDesc: "Explore our menu and pick your favorite Rosto dishes!",
    orderTypeLabel: "Order Type:",
    orderTypeDelivery: "Home Delivery 🛵",
    orderTypePickup: "Takeaway Pickup 🛍️",
    orderTypeDineIn: "Dine-in (Table) 🍽️",
    customerName: "Your Full Name:",
    customerPhone: "Contact Phone Number:",
    customerBranch: "Select Nearest Rosto Branch:",
    customerAddressOrTable: "Detailed Address or Table Number:",
    customerNotes: "Special Instructions (Spicy / Mild / Extra Dip / No Pickles...):",
    placeholderName: "e.g. Mohamed Ali",
    placeholderPhone: "e.g. 01011231231",
    placeholderAddress: "e.g. 6th of October - Distinctive District - Bldg 12 - Apt 4",
    placeholderTable: "e.g. Table 4 - Family Hall",
    placeholderNotes: "e.g. Broasted spicy / extra garlic dip / shawarma without pickles",
    totalPrice: "Total:",
    sendWhatsAppBtn: "Send Order via WhatsApp 💬",
    floatOrderCta: "Review Order & Checkout 💬",
    qrModalTitle: "Scan QR Code for Digital Menu",
    qrModalDesc: "Point your phone camera at the QR code to open Rosto's digital menu instantly and share it with family and friends!",
    tableNumLabel: "Select Table Number (Optional for Dine-in):",
    tableNone: "General Menu (No Table)",
    tableNumPrefix: "Table #",
    downloadQR: "Download QR Image",
    copyLink: "Copy Menu Link",
    copiedAlert: "Menu link copied to clipboard successfully!",
    flyerModalTitle: "Rosto Original Printed Brochure (9 Pages)",
    flyerTabAll: "All Pages (9 Pages)",
    flyerTabShawerma: "Shawarma, Fateh & Boxes",
    flyerTabChicken: "Chicken & Grills",
    flyerTabBurgers: "Burgers, Sandwiches & Crunchy",
    flyerTabPizza: "Pizza, Manakesh & Pasta",
    flyerTabBranches: "Branches & Contact Info",
    footerAbout: "Rosto Restaurant (Chicken & More) - The premier authority on authentic Syrian casual dining in Egypt. Renowned for Syrian shawarma, golden broasted chicken, charcoal grills, Italian pizza, and fresh oven-baked manakesh.",
    footerBrandTitle: "Rosto <span>Chicken & More</span> 👑",
    footerCopyright: "&copy; 2026 Rosto Restaurant (Chicken & More) - All Rights Reserved",
    devCreditBy: "Designed & Developed by:",
    selectBranchTitle: "Select Branch to Route Your Order",
    searchBranchPlaceholder: "Search branch name or neighborhood...",
    noBranchesFound: "No branches match your search",
    featuredBranchBadge: "Main Branch",
    itemsCountSuffix: "items",
    clearCart: "Clear Cart",
    serviceNotice: "⭐ 12% Dine-in service charge applies - All prices are VAT inclusive."
  }
};

// Original Printed Flyer Pages (9 Pages)
const FLYER_PAGES = [
  { id: 1, src: "./assets/images/1.jpg", cat: "pizza", titleAr: "بيتزا روستو الإيطالية والمناقيش والفطائر وحشوة الأطراف", titleEn: "Rosto Italian Pizza, Syrian Manakesh & Stuffed Crust" },
  { id: 2, src: "./assets/images/2.jpg", cat: "burgers", titleAr: "كايزر كورنر، السندوتشات والوجبات، رايز اند كريسبي والأسماك", titleEn: "Ciser Corner, Sandwiches & Meals, Rice & Fish Fillet" },
  { id: 3, src: "./assets/images/3.jpg", cat: "shawerma", titleAr: "شاورما روستو، شاورما الهلابينو الحارة، وفتات الأرز", titleEn: "Rosto Shawarma, Jalapeno Shawarma & Rice Fateh Bowls" },
  { id: 4, src: "./assets/images/4.jpg", cat: "burgers", titleAr: "كرانشي تشيز كورنر والأصناف الجديدة بالجبنة الذائبة", titleEn: "Crunchy Cheese Bowls & New Cheesy Specialties" },
  { id: 5, src: "./assets/images/5.jpg", cat: "shawerma", titleAr: "عروض وبوكسات التوفير العملاقة وسندوتشات الفطار", titleEn: "Super Value Boxes & Breakfast Sandwiches" },
  { id: 6, src: "./assets/images/6.jpg", cat: "chicken", titleAr: "فراخ شواية، فراخ البروستد المقرمشة، وستربس كورنر", titleEn: "Rotisserie Chicken, Crispy Broasted Chicken & Strips" },
  { id: 7, src: "./assets/images/7.jpg", cat: "chicken", titleAr: "مشويات الفحم، مشويات اللحوم والدجاج، والحواوشي والعرايس", titleEn: "Charcoal Grills, Kebab, Kofta, Shish & Hawawshi" },
  { id: 8, src: "./assets/images/8.jpg", cat: "pizza", titleAr: "وجبات الأطفال، الصوصات، المكرونات، والمقبلات والشوربات", titleEn: "Kids Meals, Sauces, Pastas, Appetizers & Soups" },
  { id: 9, src: "./assets/images/9.jpg", cat: "branches", titleAr: "غلاف روستو، الفروع، وأرقام التوصيل والخط الساخن 01200001100", titleEn: "Cover, Branches, Contact Info & Hotline 01200001100" }
];

// Branches Directory & WhatsApp Routing
const BRANCHES_DATA = [
  {
    id: "october_hosary",
    nameAr: "فرع 6 أكتوبر - الحصري (مول علي الدين)",
    nameEn: "6th of October - Al-Hosary (Ali El-Deen Mall)",
    addressAr: "ميدان الحصري - مول علي الدين - مدينة 6 أكتوبر",
    addressEn: "Al-Hosary Square, Ali El-Deen Mall, 6th of October City",
    phone: "01200001100",
    whatsapp: "01011231231",
    hoursAr: "يومياً من 10:00 صباحاً حتى 03:30 فجراً",
    hoursEn: "Daily 10:00 AM - 03:30 AM",
    mapsUrl: "https://maps.google.com/?q=Rosto+Ali+El+Deen+Mall+6th+October",
    isMain: true
  },
  {
    id: "october_royal",
    nameAr: "فرع 6 أكتوبر - رويال مول (بناء روستو)",
    nameEn: "6th of October - Royal Mall (Rosto Building)",
    addressAr: "خلف مكتبة الحصري - رويال مول - بناء روستو - الحي الثامن",
    addressEn: "Behind Al-Hosary Library, Royal Mall, Rosto Building, 8th District",
    phone: "01011231231",
    whatsapp: "01011231231",
    hoursAr: "يومياً من 10:00 صباحاً حتى 03:30 فجراً",
    hoursEn: "Daily 10:00 AM - 03:30 AM",
    mapsUrl: "https://maps.google.com/?q=Rosto+Royal+Mall+6th+October",
    isMain: false
  },
  {
    id: "zayed_rawdet",
    nameAr: "فرع الشيخ زايد (مول روضة زايد)",
    nameEn: "Sheikh Zayed Branch (Rawdet Zayed Mall)",
    addressAr: "مول روضة زايد - الحي الثاني عشر - مدينة الشيخ زايد",
    addressEn: "Rawdet Zayed Mall, 12th District, Sheikh Zayed City",
    phone: "01200001100",
    whatsapp: "01011231231",
    hoursAr: "يومياً من 10:00 صباحاً حتى 03:00 فجراً",
    hoursEn: "Daily 10:00 AM - 03:00 AM",
    mapsUrl: "https://maps.google.com/?q=Rosto+Rawdet+Zayed+Mall",
    isMain: false
  },
  {
    id: "mohandessin_souria",
    nameAr: "فرع المهندسين (شارع سوريا)",
    nameEn: "Mohandessin Branch (Souria Street)",
    addressAr: "5 شارع سوريا - متفرع من شارع شهاب - المهندسين",
    addressEn: "5 Souria Street, Off Shehab St., Mohandessin",
    phone: "01111555674",
    whatsapp: "01111555674",
    hoursAr: "يومياً من 10:00 صباحاً حتى 04:00 فجراً",
    hoursEn: "Daily 10:00 AM - 04:00 AM",
    mapsUrl: "https://maps.google.com/?q=Rosto+5+Souria+Street+Mohandessin",
    isMain: false
  },
  {
    id: "mohandessin_tersana",
    nameAr: "فرع المهندسين (سور نادي الترسانة)",
    nameEn: "Mohandessin Branch (Tersana Club Wall)",
    addressAr: "سور نادي الترسانة الرياضي - ميت عقبة - المهندسين",
    addressEn: "Tersana Sports Club Wall, Meet Okba, Mohandessin",
    phone: "01111555674",
    whatsapp: "01111555674",
    hoursAr: "يومياً من 10:00 صباحاً حتى 03:30 فجراً",
    hoursEn: "Daily 10:00 AM - 03:30 AM",
    mapsUrl: "https://maps.google.com/?q=Rosto+Tersana+Club+Mohandessin",
    isMain: false
  },
  {
    id: "mokattam_nafoura",
    nameAr: "فرع المقطم (ميدان النافورة)",
    nameEn: "Mokattam Branch (Al-Nafoura Square)",
    addressAr: "ميدان النافورة - شارع 9 الرئيسي - المقطم",
    addressEn: "Al-Nafoura Square, Main 9th Street, Mokattam",
    phone: "01200001100",
    whatsapp: "01111555674",
    hoursAr: "يومياً من 10:00 صباحاً حتى 03:00 فجراً",
    hoursEn: "Daily 10:00 AM - 03:00 AM",
    mapsUrl: "https://maps.google.com/?q=Rosto+Mokattam+Nafoura",
    isMain: false
  },
  {
    id: "faisal_matbaa",
    nameAr: "فرع فيصل (محطة المطبعة)",
    nameEn: "Faisal Branch (El-Matbaa Station)",
    addressAr: "شارع فيصل العمومي - محطة المطبعة - الجيزة",
    addressEn: "Main Faisal Street, El-Matbaa Station, Giza",
    phone: "01200001100",
    whatsapp: "01111555674",
    hoursAr: "يومياً من 10:00 صباحاً حتى 04:00 فجراً",
    hoursEn: "Daily 10:00 AM - 04:00 AM",
    mapsUrl: "https://maps.google.com/?q=Rosto+Faisal+Matbaa",
    isMain: false
  }
];

// Full Menu Database
const MENU_ITEMS = [
  {
    "id": "box_meat_kufta",
    "category": "boxes",
    "nameAr": "بوكس كفتة لحمة (جديد)",
    "nameEn": "Meat Kufta Box (New)",
    "descAr": "4 ساندوتش كفتة لحم + بطاطس + عيش محمص + تومية + طحينة",
    "descEn": "4 Meat Kufta Sandwiches + Fries + Toasted Bread + Garlic Dip + Tahini",
    "badge": "new",
    "price": 245
  },
  {
    "id": "box_chicken_kufta",
    "category": "boxes",
    "nameAr": "بوكس كفتة فراخ (جديد)",
    "nameEn": "Chicken Kufta Box (New)",
    "descAr": "4 ساندوتش كفتة فراخ + بطاطس + عيش محمص + تومية + سبايسي",
    "descEn": "4 Chicken Kufta Sandwiches + Fries + Toasted Bread + Garlic Dip + Spicy Sauce",
    "badge": "new",
    "price": 185
  },
  {
    "id": "box_brens",
    "category": "boxes",
    "nameAr": "بوكس البرنس الملكي (جديد)",
    "nameEn": "El Brens Royal Box (New)",
    "descAr": "ساندوتش كفتة فراخ + ساندوتش كفتة لحمة + رغيف حواوشي + بطاطس + عيش محمص + تومية + طحينة + تكساس صوص",
    "descEn": "Chicken Kufta Sandwich + Meat Kufta Sandwich + Hawawshi Loaf + Fries + Toasted Bread + Garlic Dip + Tahini + Texas Sauce",
    "badge": "special",
    "price": 260
  },
  {
    "id": "box_mix_kufta",
    "category": "boxes",
    "nameAr": "بوكس مكس كفتة (جديد)",
    "nameEn": "Mix Kufta Box (New)",
    "descAr": "2 ساندوتش كفتة فراخ + 2 ساندوتش كفتة لحمة + بطاطس + عيش محمص + تومية + طحينة",
    "descEn": "2 Chicken Kufta Sandwiches + 2 Meat Kufta Sandwiches + Fries + Toasted Bread + Garlic Dip + Tahini",
    "badge": "popular",
    "price": 215
  },
  {
    "id": "box_caiser_4",
    "category": "boxes",
    "nameAr": "بوكس 4 الكايزر",
    "nameEn": "4 Kaiser Shawarma Box",
    "descAr": "4 ساندوتش كايزر شاورما مع البطاطس المقرمشة والتومية والمخلل",
    "descEn": "4 Kaiser shawarma sandwiches with crispy fries, garlic dip and pickles",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "شاورما فراخ",
        "labelEn": "Chicken",
        "price": 130
      },
      {
        "key": "mix",
        "labelAr": "شاورما مكس",
        "labelEn": "Mix",
        "price": 150
      },
      {
        "key": "meat",
        "labelAr": "شاورما لحمة",
        "labelEn": "Meat",
        "price": 170
      }
    ]
  },
  {
    "id": "box_caiser_6",
    "category": "boxes",
    "nameAr": "بوكس 6 الكايزر",
    "nameEn": "6 Kaiser Shawarma Box",
    "descAr": "6 ساندوتش كايزر شاورما مع البطاطس المقرمشة والتومية والمخلل",
    "descEn": "6 Kaiser shawarma sandwiches with crispy fries, garlic dip and pickles",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "شاورما فراخ",
        "labelEn": "Chicken",
        "price": 200
      },
      {
        "key": "mix",
        "labelAr": "شاورما مكس",
        "labelEn": "Mix",
        "price": 225
      },
      {
        "key": "meat",
        "labelAr": "شاورما لحمة",
        "labelEn": "Meat",
        "price": 255
      }
    ]
  },
  {
    "id": "box_brosty",
    "category": "boxes",
    "nameAr": "بوكس بروستي العائلي",
    "nameEn": "Brosty Family Box",
    "descAr": "6 قطع وراك مقلية بروستد مع بطاطس وعيش محمص وتومية وصوص سبايسي وصوص البروستد المميز",
    "descEn": "6 Crispy Fried Chicken Thighs + Fries + Toasted Bread + Garlic Dip + Spicy Sauce + Signature Broasted Sauce",
    "badge": "special",
    "price": 320
  },
  {
    "id": "box_hero",
    "category": "boxes",
    "nameAr": "بوكس الهيرو",
    "nameEn": "Hero Box",
    "descAr": "ساندوتش شاورما عربي (6 قطع) + 2 قطع ستربس وبطاطس وعيش محمص مع التومية والصوص الحار",
    "descEn": "Arabic Shawarma Sandwich (6 pcs) + 2 Strips + Fries + Toasted Bread + Garlic Dip + Hot Sauce",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "شاورما فراخ",
        "labelEn": "Chicken",
        "price": 215
      },
      {
        "key": "meat",
        "labelAr": "شاورما لحمة",
        "labelEn": "Meat",
        "price": 225
      }
    ]
  },
  {
    "id": "box_bbq",
    "category": "boxes",
    "nameAr": "بوكس الباربكيو المشكل",
    "nameEn": "BBQ Mixed Grill Box",
    "descAr": "2 سيخ شيش طاووق + 2 سيخ كفتة لحم + 2 سيخ كفتة فراخ + قطعة تركي + ارز + بطاطس + محمرة + تومية + طحينة + صوص باربكيو",
    "descEn": "2 Shish Tawook + 2 Meat Kufta + 2 Chicken Kufta + Turkey cut + Rice + Fries + Mohammara + Garlic Dip + Tahini + BBQ Sauce",
    "badge": "charcoal",
    "price": 365
  },
  {
    "id": "box_king",
    "category": "boxes",
    "nameAr": "بوكس الكينج",
    "nameEn": "King Shawarma & Strips Box",
    "descAr": "2 ساندوتش شاورما عربي (12 قطعة) مع 4 قطع ستربس وبطاطس وعيش محمص مع التومية والمايونيز وصوص الديناميت",
    "descEn": "2 Arabic Shawarma (12 pcs) + 4 Chicken Strips + Fries + Toasted Bread + Garlic Dip + Mayo + Dynamite Sauce",
    "badge": "special",
    "options": [
      {
        "key": "chicken",
        "labelAr": "شاورما فراخ",
        "labelEn": "Chicken",
        "price": 320
      },
      {
        "key": "meat",
        "labelAr": "شاورما لحمة",
        "labelEn": "Meat",
        "price": 335
      }
    ]
  },
  {
    "id": "box_barkeh",
    "category": "boxes",
    "nameAr": "بوكس البركة العملاق (30 قطعة)",
    "nameEn": "Barkeh Giant Shawarma Box (30 pcs)",
    "descAr": "ساندوتش شاورما عربي عملاق مقطع (30 قطعة) مع بطاطس وعيش محمص ومحمرة مع التومية والصوص الحار",
    "descEn": "Giant Arabic Shawarma cut into 30 pieces + Fries + Toasted Bread + Mohammara + Garlic Dip + Hot Sauce",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "شاورما فراخ",
        "labelEn": "Chicken",
        "price": 475
      },
      {
        "key": "mix",
        "labelAr": "شاورما مكس",
        "labelEn": "Mix",
        "price": 490
      },
      {
        "key": "meat",
        "labelAr": "شاورما لحمة",
        "labelEn": "Meat",
        "price": 500
      }
    ]
  },
  {
    "id": "box_turkey",
    "category": "boxes",
    "nameAr": "بوكس التركي الفاخر",
    "nameEn": "Turkey Luxury Box",
    "descAr": "5 قطع وراك مخلية مشوية على الفحم مع ارز وبطاطس وعيش محمص وصوص الباربكيو والتومية والصوص السبايسي",
    "descEn": "5 Charcoal Grilled Boneless Thighs + Rice + Fries + Toasted Bread + BBQ Sauce + Garlic Dip + Spicy Sauce",
    "badge": "charcoal",
    "price": 395
  },
  {
    "id": "shw_caiser",
    "category": "shawerma",
    "nameAr": "ساندوتش شاورما كايزر",
    "nameEn": "Kaiser Shawarma Sandwich",
    "descAr": "شاورما روستو بتتبيلتها السورية في خبز كايزر طازج مع الثومية والمخلل",
    "descEn": "Syrian seasoned shawarma in fresh Kaiser bun with garlic dip & pickles",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 35
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 45
      }
    ]
  },
  {
    "id": "shw_caiser_xl",
    "category": "shawerma",
    "nameAr": "ساندوتش شاورما كايزر اكس لارج",
    "nameEn": "XL Kaiser Shawarma Sandwich",
    "descAr": "حجم كبير إضافي من شاورما روستو في خبز كايزر كبير",
    "descEn": "Extra large Kaiser shawarma sandwich packed with Syrian meat/chicken",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 63
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 78
      }
    ]
  },
  {
    "id": "shw_lebanese",
    "category": "shawerma",
    "nameAr": "ساندوتش شاورما عيش لبناني",
    "nameEn": "Lebanese Bread Shawarma",
    "descAr": "شاورما في الخبز اللبناني الرقيق مع كريم الثوم والمخلل اللذيذ",
    "descEn": "Authentic shawarma rolled in thin Lebanese flatbread with garlic cream",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 47
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 62
      }
    ]
  },
  {
    "id": "shw_saj_xl",
    "category": "shawerma",
    "nameAr": "ساندوتش شاورما صاج اكس لارج",
    "nameEn": "XL Saj Shawarma Sandwich",
    "descAr": "شاورما روستو في خبز الصاج السوري المقرمش على الجريل بحجم XL",
    "descEn": "Large Syrian saj shawarma toasted crispy on the grill with garlic dip",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 90
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 105
      }
    ]
  },
  {
    "id": "shw_french",
    "category": "shawerma",
    "nameAr": "ساندوتش شاورما فرنساوي",
    "nameEn": "French Baguette Shawarma",
    "descAr": "شاورما روستو في الخبز الفرنسي المقرمش مع صوص التومية والمخلل",
    "descEn": "Syrian shawarma in crispy French baguette bread with garlic dip",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 100
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 115
      }
    ]
  },
  {
    "id": "shw_extra_mozz",
    "category": "shawerma",
    "nameAr": "ساندوتش شاورما اكسترا موزريلا",
    "nameEn": "Extra Mozzarella Shawarma",
    "descAr": "ساندوتش شاورما غني بالجبنة الموزاريلا السايحة على الجريل",
    "descEn": "Shawarma sandwich loaded with melted mozzarella cheese",
    "badge": "special",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 105
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 115
      }
    ]
  },
  {
    "id": "shw_french_extra",
    "category": "shawerma",
    "nameAr": "ساندوتش شاورما فرنساوي اكسترا",
    "nameEn": "Extra French Baguette Shawarma",
    "descAr": "خبز فرنساوي محمص ومحشو شاورما مضاعفة مع صوصات روستو الغنية",
    "descEn": "Extra filled French baguette shawarma with rich signature sauces",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 115
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 125
      }
    ]
  },
  {
    "id": "shw_box_arabic_6",
    "category": "shawerma",
    "nameAr": "بوكس شاورما عربي (6 قطع)",
    "nameEn": "Arabic Shawarma Box (6 pcs)",
    "descAr": "رول شاورما مقطع 6 قطع مع بطاطس مقلية وثومية ومخلل روستو السوري",
    "descEn": "Arabic shawarma sliced into 6 pieces served with fries, garlic dip & pickles",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 140
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 160
      }
    ]
  },
  {
    "id": "shw_box_arabic_12",
    "category": "shawerma",
    "nameAr": "بوكس شاورما عربي دبل (12 قطعة)",
    "nameEn": "Double Arabic Shawarma Box (12 pcs)",
    "descAr": "2 رول شاورما مقطع 12 قطعة مع بطاطس وفيرة، تومية، مخلل، وصوص حار",
    "descEn": "2 Arabic shawarma rolls sliced into 12 pieces with fries, garlic dip & pickles",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 225
      },
      {
        "key": "mix",
        "labelAr": "مكس",
        "labelEn": "Mix",
        "price": 255
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 265
      }
    ]
  },
  {
    "id": "shw_box_french",
    "category": "shawerma",
    "nameAr": "بوكس عربي فرنساوي",
    "nameEn": "French Arabic Shawarma Box",
    "descAr": "شاورما فرنساوي مقطعة مع البطاطس والتومية والمخلل المقرمش",
    "descEn": "Sliced French shawarma served with fries, garlic dip and pickles",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 150
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 160
      }
    ]
  },
  {
    "id": "shw_maria",
    "category": "shawerma",
    "nameAr": "ماريا شاورما (بوراك)",
    "nameEn": "Maria Shawarma (Burak)",
    "descAr": "رغيفين خبز رقيق محشوة شاورما روستو ومحمصة على الفحم والجريل",
    "descEn": "Toasted double flatbread stuffed with shawarma & spices",
    "badge": "special",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 130
      },
      {
        "key": "mix",
        "labelAr": "مكس",
        "labelEn": "Mix",
        "price": 145
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 155
      }
    ]
  },
  {
    "id": "shw_maria_extra",
    "category": "shawerma",
    "nameAr": "ماريا شاورما اكسترا موزريلا",
    "nameEn": "Extra Mozzarella Maria Shawarma",
    "descAr": "ماريا شاورما محشوة بالجبنة الموزاريلا السايحة مع خلطة روستو",
    "descEn": "Maria shawarma stuffed with rich melted mozzarella and spices",
    "badge": "special",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 160
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 175
      }
    ]
  },
  {
    "id": "shw_meal_slices",
    "category": "shawerma",
    "nameAr": "وجبة شاورما شرائح",
    "nameEn": "Sliced Shawarma Meal",
    "descAr": "شرائح شاورما ساخنة تقدم مع أرز بسمتي، بطاطس، تومية، عيش ومخلل",
    "descEn": "Platter of sliced shawarma with basmati rice, fries, garlic dip & bread",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 180
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 210
      }
    ]
  },
  {
    "id": "shw_half_kg",
    "category": "shawerma",
    "nameAr": "نصف كيلو شاورما شرائح (مع ارز)",
    "nameEn": "1/2 KG Shawarma with Rice",
    "descAr": "نصف كيلو صافي من شرائح الشاورما السورية مع أرز وتومية وعيش ومخلل",
    "descEn": "500g net sliced shawarma served with basmati rice, garlic dip and bread",
    "badge": "popular",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 320
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 390
      }
    ]
  },
  {
    "id": "shw_one_kg",
    "category": "shawerma",
    "nameAr": "كيلو شاورما شرائح عائلي (مع ارز)",
    "nameEn": "1 KG Family Shawarma with Rice",
    "descAr": "كيلو كامل صافي من شاورما روستو السورية مع سرفيس أرز وتومية ومخلل",
    "descEn": "1kg net sliced shawarma with a large platter of rice, dips and bread",
    "badge": "special",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 600
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 720
      }
    ]
  },
  {
    "id": "jal_shw_xl",
    "category": "jalapeno_shawerma",
    "nameAr": "ساندوتش شاورما اكس لارج هالبينو",
    "nameEn": "XL Jalapeno Shawarma Sandwich",
    "descAr": "شاورما صاج اكس لارج مع قطع فلفل الهالبينو المكسيكي الحار وصوص سبايسي",
    "descEn": "XL Saj shawarma loaded with spicy pickled jalapenos & hot sauce",
    "badge": "spicy",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 95
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 110
      }
    ]
  },
  {
    "id": "jal_shw_french",
    "category": "jalapeno_shawerma",
    "nameAr": "ساندوتش شاورما هالبينو فرنساوي",
    "nameEn": "French Jalapeno Shawarma",
    "descAr": "خبز فرنسي مقرمش محشو شاورما مع فلفل هالبينو وصوص حار",
    "descEn": "French baguette filled with spicy shawarma and sliced jalapenos",
    "badge": "spicy",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 102
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 120
      }
    ]
  },
  {
    "id": "jal_shw_maria",
    "category": "jalapeno_shawerma",
    "nameAr": "ماريا شاورما هالبينو",
    "nameEn": "Jalapeno Maria Shawarma",
    "descAr": "ماريا روستو المقرمشة على الجريل مع الهالبينو الحار والجبنة",
    "descEn": "Grilled flatbread maria loaded with spicy jalapeno peppers",
    "badge": "spicy",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 135
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 165
      }
    ]
  },
  {
    "id": "jal_shw_box_xl",
    "category": "jalapeno_shawerma",
    "nameAr": "بوكس عربي اكس لارج هالبينو",
    "nameEn": "XL Jalapeno Arabic Shawarma Box",
    "descAr": "ساندوتش شاورما هالبينو مقطع مع بطاطس وصوصات حارة وتومية",
    "descEn": "XL Jalapeno Arabic shawarma box with fries and spicy dips",
    "badge": "spicy",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 145
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 165
      }
    ]
  },
  {
    "id": "jal_shw_box_double",
    "category": "jalapeno_shawerma",
    "nameAr": "بوكس عربي اكس لارج هالبينو دبل",
    "nameEn": "Double XL Jalapeno Arabic Shawarma Box",
    "descAr": "2 ساندوتش شاورما هالبينو مقطعة مع بطاطس وصوص سبايسي وتومية",
    "descEn": "Double XL spicy jalapeno shawarma box with fries & dips",
    "badge": "spicy",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 230
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 265
      }
    ]
  },
  {
    "id": "jal_shw_box_family",
    "category": "jalapeno_shawerma",
    "nameAr": "بوكس عربي عائلي هالبينو",
    "nameEn": "Family Jalapeno Arabic Shawarma Box",
    "descAr": "بوكس عائلي ضخم لعشاق السبايسي مع الهالبينو والبطاطس والتومية",
    "descEn": "Huge family box of spicy jalapeno shawarma for spice lovers",
    "badge": "spicy",
    "options": [
      {
        "key": "chicken",
        "labelAr": "فراخ",
        "labelEn": "Chicken",
        "price": 490
      },
      {
        "key": "meat",
        "labelAr": "لحمة",
        "labelEn": "Meat",
        "price": 515
      }
    ]
  },
  {
    "id": "fateh_chicken",
    "category": "fateh",
    "nameAr": "فتة شاورما فراخ روستو",
    "nameEn": "Chicken Shawarma Fateh Bowl",
    "descAr": "أرز بسمتي أصفر مع شاورما فراخ سورية وعيش محمص وصوص تومية كريمي",
    "descEn": "Yellow basmati rice with chicken shawarma, toasted pita & garlic sauce",
    "badge": "popular",
    "options": [
      {
        "key": "medium",
        "labelAr": "حجم وسط",
        "labelEn": "Medium",
        "price": 105
      },
      {
        "key": "large",
        "labelAr": "حجم كبير",
        "labelEn": "Large",
        "price": 140
      }
    ]
  },
  {
    "id": "fateh_meat",
    "category": "fateh",
    "nameAr": "فتة شاورما لحمة",
    "nameEn": "Meat Shawarma Fateh Bowl",
    "descAr": "أرز بسمتي مع شاورما لحمة بلدي متبلة وعيش شامي مقرمش وطحينة وتومية",
    "descEn": "Basmati rice topped with tender meat shawarma, crispy pita & tahini",
    "badge": "popular",
    "options": [
      {
        "key": "medium",
        "labelAr": "حجم وسط",
        "labelEn": "Medium",
        "price": 130
      },
      {
        "key": "large",
        "labelAr": "حجم كبير",
        "labelEn": "Large",
        "price": 165
      }
    ]
  },
  {
    "id": "fateh_mix",
    "category": "fateh",
    "nameAr": "فتة شاورما مكس (فراخ ولحمة)",
    "nameEn": "Mix Shawarma Fateh Bowl",
    "descAr": "مزيج فاخر من شاورما اللحم والفراخ مع الأرز والعيش المقرمش",
    "descEn": "The perfect mix of meat and chicken shawarma over basmati rice",
    "badge": "special",
    "options": [
      {
        "key": "medium",
        "labelAr": "حجم وسط",
        "labelEn": "Medium",
        "price": 125
      },
      {
        "key": "large",
        "labelAr": "حجم كبير",
        "labelEn": "Large",
        "price": 160
      }
    ]
  },
  {
    "id": "fateh_mexicano",
    "category": "fateh",
    "nameAr": "فتة مكسيكانو حارة",
    "nameEn": "Mexicano Spicy Fateh Bowl",
    "descAr": "دجاج مكسيكانو بالفلفل والبصل والصوص الحار فوق الأرز البسمتي",
    "descEn": "Spicy Mexicano chicken with peppers and onions over yellow rice",
    "badge": "spicy",
    "options": [
      {
        "key": "medium",
        "labelAr": "حجم وسط",
        "labelEn": "Medium",
        "price": 105
      },
      {
        "key": "large",
        "labelAr": "حجم كبير",
        "labelEn": "Large",
        "price": 140
      }
    ]
  },
  {
    "id": "fateh_crispy",
    "category": "fateh",
    "nameAr": "فتة كريسبي دجاج مقرمش",
    "nameEn": "Crispy Chicken Fateh Bowl",
    "descAr": "قطع دجاج كريسبي مقرمشة فوق أرز بسمتي مع صوص تومية وسبايسي",
    "descEn": "Golden crispy chicken pieces over basmati rice with garlic and spicy dips",
    "badge": "popular",
    "options": [
      {
        "key": "medium",
        "labelAr": "حجم وسط",
        "labelEn": "Medium",
        "price": 105
      },
      {
        "key": "large",
        "labelAr": "حجم كبير",
        "labelEn": "Large",
        "price": 140
      }
    ]
  },
  {
    "id": "fateh_shish_turkey",
    "category": "fateh",
    "nameAr": "فتة شيش تركي (جديد)",
    "nameEn": "Turkish Shish Fateh Bowl (New)",
    "descAr": "شيش تركي مشوي على الفحم فوق الأرز والعيش المحمص وصوصات روستو",
    "descEn": "Charcoal-grilled Turkish shish over rice and toasted bread with sauces",
    "badge": "new",
    "price": 95
  },
  {
    "id": "ciser_filleto_pie",
    "category": "ciser_burgers",
    "nameAr": "فيليتو باي (جديد)",
    "nameEn": "Filleto Pie (New)",
    "descAr": "قطعة من السمك الفيليه بصوص التارتار الكريمي وصوص الكوكتيل مع الخس الطازج",
    "descEn": "Crispy fish fillet patty with creamy tartar & cocktail sauce, fresh lettuce",
    "badge": "new",
    "price": 120
  },
  {
    "id": "ciser_overdose_beef",
    "category": "ciser_burgers",
    "nameAr": "أوفر دوس بيف (جديد)",
    "nameEn": "Overdose Beef Burger (New)",
    "descAr": "قطعة من برجر اللحم محشية بالجبنة مع صوص تكساس وصوص الماك والبصل المحمر",
    "descEn": "Cheese-stuffed beef patty with Texas sauce, Mac sauce & crispy fried onions",
    "badge": "new",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 145
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 200
      }
    ]
  },
  {
    "id": "ciser_overdose_chicken",
    "category": "ciser_burgers",
    "nameAr": "أوفر دوس تشكن (جديد)",
    "nameEn": "Overdose Chicken Burger (New)",
    "descAr": "قطعة من برجر الدجاج محشية بالجبنة مع صوص بيج تيستي وصوص تارتار والبصل المحمر",
    "descEn": "Cheese-stuffed chicken patty with Big Tasty sauce, tartar sauce & fried onions",
    "badge": "new",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 140
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 200
      }
    ]
  },
  {
    "id": "ciser_torino",
    "category": "ciser_burgers",
    "nameAr": "تورينو ساندوتش",
    "nameEn": "Torino Sandwich",
    "descAr": "شرائح الدجاج البانيه مع شرائح السلامي والبصل المقلي الكريسبي وصوص الماك والمخلل والمايونيز",
    "descEn": "Chicken pane strips with salami, crispy onions, Mac sauce, pickles & mayo",
    "badge": "popular",
    "price": 140
  },
  {
    "id": "ciser_cheeseto",
    "category": "ciser_burgers",
    "nameAr": "تشيزيتو",
    "nameEn": "Cheeseto",
    "descAr": "صدور الدجاج الكريسبي مع صوص الشيدر والموزريلا ستيكس وجبنة شرائح مع المايونيز والكول سلو",
    "descEn": "Crispy chicken breast, cheddar sauce, mozzarella sticks, sliced cheese & coleslaw",
    "badge": "popular",
    "price": 135
  },
  {
    "id": "ciser_napoli",
    "category": "ciser_burgers",
    "nameAr": "نابولي",
    "nameEn": "Napoli Burger",
    "descAr": "صدور الدجاج الكريسبي مع تركي مدخن وشرائح السلامي وصوص الماك وشرائح جبنة شيدر وكول سلو",
    "descEn": "Crispy chicken breast, smoked turkey, salami, Mac sauce, cheddar cheese & coleslaw",
    "badge": "special",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 130
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 175
      }
    ]
  },
  {
    "id": "ciser_fried_grillo",
    "category": "ciser_burgers",
    "nameAr": "فرايد جريلو تشكن",
    "nameEn": "Fried Grillo Chicken",
    "descAr": "صدور الدجاج الكريسبي مع شريحة جريلو تشكن مع صوص الرانش وصوص الأوري سويت مع المخلل والجبنة الموزاريلا",
    "descEn": "Crispy chicken breast + grilled chicken patty, ranch sauce, Oreo sweet sauce, pickles & mozzarella",
    "badge": "special",
    "price": 165
  },
  {
    "id": "ciser_texas_burger",
    "category": "ciser_burgers",
    "nameAr": "تكساس برجر لحم",
    "nameEn": "Texas Beef Burger",
    "descAr": "شريحة لحم مع البصل والطماطم والمايونيز وصوص الماك قطع المخلل مع الجبنة الشيدر",
    "descEn": "Juicy beef patty with onion, tomato, mayo, Mac sauce, pickles & cheddar cheese",
    "badge": "popular",
    "price": 140
  },
  {
    "id": "ciser_mushroom_burger",
    "category": "ciser_burgers",
    "nameAr": "ماشروم برجر لحم",
    "nameEn": "Fresh Mushroom Beef Burger",
    "descAr": "شريحة لحم مع صوص المشروم شرائح البصل والمايونيز مع الماشروم الفريش",
    "descEn": "Beef patty with rich fresh mushroom sauce, sliced onion and creamy mayo",
    "badge": "special",
    "price": 140
  },
  {
    "id": "ciser_beef_burger",
    "category": "ciser_burgers",
    "nameAr": "بيف برجر روستو كلاسيك",
    "nameEn": "Rosto Classic Beef Burger",
    "descAr": "شرائح برجر اللحم مع خس وطماطم ومايونيز ومخلل في خبز كايزر طازج",
    "descEn": "Classic beef burger patty with lettuce, tomato, mayo and pickles",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 120
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 155
      }
    ]
  },
  {
    "id": "ciser_chicken_burger",
    "category": "ciser_burgers",
    "nameAr": "تشكن برجر روستو كلاسيك",
    "nameEn": "Rosto Classic Chicken Burger",
    "descAr": "شرائح برجر الدجاج مع خس وطماطم ومايونيز ومخلل",
    "descEn": "Classic chicken burger patty with lettuce, tomato, mayo and pickles",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 115
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 140
      }
    ]
  },
  {
    "id": "sand_crispy",
    "category": "sandwiches_meals",
    "nameAr": "كريسبي دجاج مقرمش",
    "nameEn": "Crispy Chicken",
    "descAr": "قطع دجاج كريسبي مقلية ذهبية مع الخس والتومية والصوصات",
    "descEn": "Golden crispy fried chicken strips with lettuce, garlic dip and sauces",
    "badge": "popular",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_zinger",
    "category": "sandwiches_meals",
    "nameAr": "زنجر حار سبايسي",
    "nameEn": "Spicy Zinger Chicken",
    "descAr": "صدور دجاج حارة مقرمشة بتتبيلة الزنجر المميزة مع المايونيز والخس",
    "descEn": "Spicy marinated crunchy chicken breast with spicy mayo & lettuce",
    "badge": "spicy",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_spicy",
    "category": "sandwiches_meals",
    "nameAr": "سبايسي دجاج",
    "nameEn": "Spicy Chicken",
    "descAr": "دجاج متبل بخلطة بهارات حارة مع الخس وصوص السبايسي",
    "descEn": "Spiced chicken with fiery sauce, lettuce and garlic cream",
    "badge": "spicy",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_nuggets",
    "category": "sandwiches_meals",
    "nameAr": "ناجيت دجاج",
    "nameEn": "Chicken Nuggets",
    "descAr": "قطع ناجيت ذهبية مقرمشة محبوبة للجميع مع البطاطس والصوص",
    "descEn": "Tender golden chicken nuggets with fries and delicious dip",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_escalope",
    "category": "sandwiches_meals",
    "nameAr": "اسكالوب بانيه",
    "nameEn": "Escalope Pane",
    "descAr": "شريحة اسكالوب دجاج مقرمشة بتتبيلة خاصة مع صوص المايونيز",
    "descEn": "Breaded chicken escalope fillet seasoned and fried to golden perfection",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_supreme",
    "category": "sandwiches_meals",
    "nameAr": "سوبريم دجاج",
    "nameEn": "Chicken Supreme",
    "descAr": "قطع دجاج بانيه مع صوص الجبن والتركي المدخن والمخلل",
    "descEn": "Premium chicken supreme with cheese sauce and smoked turkey",
    "badge": "popular",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 110
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 235
      }
    ]
  },
  {
    "id": "sand_magnum",
    "category": "sandwiches_meals",
    "nameAr": "ماجنوم دجاج",
    "nameEn": "Magnum Chicken",
    "descAr": "دجاج كريسبي مع صوص الشيدر الذائب وشرائح السلامي الشهية",
    "descEn": "Crispy chicken with melted cheddar cheese and savory salami slices",
    "badge": "special",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 110
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 235
      }
    ]
  },
  {
    "id": "sand_crunchy",
    "category": "sandwiches_meals",
    "nameAr": "كرانشي دجاج",
    "nameEn": "Crunchy Chicken",
    "descAr": "دجاج فائق القرمشة مع صوص الرانش والمايونيز والجبنة",
    "descEn": "Extra crunchy fried chicken with ranch sauce and melted cheese",
    "badge": "popular",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 110
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 235
      }
    ]
  },
  {
    "id": "sand_chicken_roll",
    "category": "sandwiches_meals",
    "nameAr": "تشكن رول",
    "nameEn": "Chicken Roll",
    "descAr": "رول صدور الدجاج المحشو بالجبنة والمقلي المقرمش",
    "descEn": "Stuffed chicken roll with cheese fried crispy and sliced",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_twister",
    "category": "sandwiches_meals",
    "nameAr": "توبستر روستو",
    "nameEn": "Twister Wrap",
    "descAr": "ستربس دجاج مقرمش في خبز التورتيلا مع الخس والمايونيز والتومية",
    "descEn": "Crispy chicken strips wrapped in warm tortilla with mayo and lettuce",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 110
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 235
      }
    ]
  },
  {
    "id": "sand_shish_tawook",
    "category": "sandwiches_meals",
    "nameAr": "شيش طاووق ساندوتش / وجبة",
    "nameEn": "Shish Tawook Sandwich / Meal",
    "descAr": "شيش طاووق مشوي على الفحم بتتبيلة الزبادي والثوم والبهارات",
    "descEn": "Charcoal grilled marinated chicken shish tawook skewers",
    "badge": "charcoal",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_lemon_chicken",
    "category": "sandwiches_meals",
    "nameAr": "شرائح دجاج مع صوص ليمون",
    "nameEn": "Chicken Strips with Lemon Sauce",
    "descAr": "شرائح دجاج متبلة بصوص الليمون المنعش والزبدة والأعشاب",
    "descEn": "Tender chicken strips tossed in zesty lemon butter sauce",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 110
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 235
      }
    ]
  },
  {
    "id": "sand_mexicano",
    "category": "sandwiches_meals",
    "nameAr": "مكسيكانو دجاج",
    "nameEn": "Mexicano Chicken",
    "descAr": "شرائح دجاج مكسيكية مع فلفل ألوان وبصل وصوص مكسيكانو حار",
    "descEn": "Mexican chicken strips with colorful peppers, onions & spicy salsa",
    "badge": "spicy",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 105
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 230
      }
    ]
  },
  {
    "id": "sand_fajita",
    "category": "sandwiches_meals",
    "nameAr": "فاهيتا دجاج",
    "nameEn": "Chicken Fajita",
    "descAr": "فاهيتا دجاج مع الذرة الحلوة والمشروم والبصل والفلفل والموزاريلا",
    "descEn": "Sizzling chicken fajita with corn, mushrooms, peppers & mozzarella",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 110
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 235
      }
    ]
  },
  {
    "id": "sand_francisco",
    "category": "sandwiches_meals",
    "nameAr": "فرانشيسكو دجاج",
    "nameEn": "Francisco Chicken",
    "descAr": "قطع دجاج بانيه مع الذرة والجبنة الموزاريلا وصوص المايونيز",
    "descEn": "Francisco chicken strips with sweet corn, mozzarella & creamy mayo",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 110
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 235
      }
    ]
  },
  {
    "id": "sand_chicago_beef",
    "category": "sandwiches_meals",
    "nameAr": "تشيز شيكاغو بيف",
    "nameEn": "Chicago Cheese Beef",
    "descAr": "شرائح لحم بيف مع صوص الجبن الشيدر والفلفل في خبز طازج",
    "descEn": "Beef strips loaded with warm cheddar cheese sauce & peppers",
    "price": 100
  },
  {
    "id": "sand_cordon_bleu",
    "category": "sandwiches_meals",
    "nameAr": "وجبة كوردون بلو دجاج",
    "nameEn": "Cordon Bleu Chicken Meal",
    "descAr": "صدور دجاج محشية بالجبنة والتركي المدخن مقلية ومقرمشة مع أرز وبطاطس",
    "descEn": "Crispy breaded chicken breast stuffed with melted cheese & smoked turkey",
    "badge": "special",
    "price": 235
  },
  {
    "id": "sand_chicken_cheese",
    "category": "sandwiches_meals",
    "nameAr": "شرحات دجاج مع الجبنة",
    "nameEn": "Chicken Cutlets with Cheese",
    "descAr": "شرحات دجاج طرية متبلة مع الجبنة الموزاريلا السايحة",
    "descEn": "Tender chicken cutlets smothered in melted mozzarella",
    "options": [
      {
        "key": "sandwich",
        "labelAr": "ساندوتش",
        "labelEn": "Sandwich",
        "price": 115
      },
      {
        "key": "meal",
        "labelAr": "وجبة كاملة",
        "labelEn": "Full Meal",
        "price": 225
      }
    ]
  },
  {
    "id": "sand_toushka_meat",
    "category": "sandwiches_meals",
    "nameAr": "ساندوتش توشكا لحم مع موزريلا",
    "nameEn": "Meat Toushka with Mozzarella",
    "descAr": "لحم مفروم متبل مع جبنة موزاريلا سايحة ومحمص على الجريل",
    "descEn": "Seasoned minced meat grilled with gooey mozzarella flatbread",
    "price": 95
  },
  {
    "id": "sand_sojouk",
    "category": "sandwiches_meals",
    "nameAr": "ساندوتش سجق شرقي",
    "nameEn": "Oriental Sojouk Sandwich",
    "descAr": "سجق بلدي متبل مع الفلفل والطماطم في خبز طازج",
    "descEn": "Spiced oriental sojouk sausage cooked with tomatoes and peppers",
    "price": 90
  },
  {
    "id": "sand_fries_saj",
    "category": "sandwiches_meals",
    "nameAr": "ساندوتش بطاطس صاج سوري",
    "nameEn": "Saj Fries Sandwich",
    "descAr": "بطاطس مقلية ذهبية مع كريم الثوم والمخلل في خبز صاج مقرمش",
    "descEn": "Golden french fries with garlic dip and pickles in crispy saj bread",
    "price": 40
  },
  {
    "id": "sand_fries_lebanese",
    "category": "sandwiches_meals",
    "nameAr": "ساندوتش بطاطس عيش لبناني",
    "nameEn": "Lebanese Fries Sandwich",
    "descAr": "بطاطس مقرمشة في الخبز اللبناني مع التومية والمخلل",
    "descEn": "Crispy fries wrapped in thin Lebanese bread with garlic dip",
    "price": 35
  },
  {
    "id": "sand_fries_french",
    "category": "sandwiches_meals",
    "nameAr": "ساندوتش بطاطس فرنساوي",
    "nameEn": "French Baguette Fries",
    "descAr": "بطاطس مقلية في باجيت فرنسي مع التومية والكاتشب",
    "descEn": "French fries in crispy baguette with garlic cream and ketchup",
    "price": 40
  },
  {
    "id": "sand_fries_saj_cheese",
    "category": "sandwiches_meals",
    "nameAr": "ساندوتش بطاطس صاج مع جبنة",
    "nameEn": "Saj Fries with Cheese",
    "descAr": "بطاطس صاج مع صوص الجبن الشيدر والموزاريلا",
    "descEn": "Saj fries sandwich loaded with melted cheddar and mozzarella",
    "price": 53
  },
  {
    "id": "sand_fries_french_cheese",
    "category": "sandwiches_meals",
    "nameAr": "ساندوتش بطاطس فرنساوي مع جبنة",
    "nameEn": "French Fries with Cheese",
    "descAr": "بطاطس في خبز فرنساوي مع صوص الجبنة الشيدر اللذيذ",
    "descEn": "French baguette fries smothered in warm cheese sauce",
    "price": 53
  },
  {
    "id": "meal_rice_crispy",
    "category": "sandwiches_meals",
    "nameAr": "وجبة رايز اند كريسبي",
    "nameEn": "Rice & Crispy Chicken Bowl",
    "descAr": "أرز بسمتي أصفر + 3 قطع كريسبي مقلية + تومية + صوص سبايسي",
    "descEn": "Basmati rice + 3 crispy chicken strips + garlic dip + spicy sauce",
    "badge": "popular",
    "price": 170
  },
  {
    "id": "meal_rice_fish",
    "category": "sandwiches_meals",
    "nameAr": "وجبة رايز اند فيش",
    "nameEn": "Rice & Fish Fillet Bowl",
    "descAr": "أرز بسمتي + قطع سمك فيليه مقلية + صوص تارتار + طحينية",
    "descEn": "Basmati rice + crispy fish fillet cuts + tartar sauce + tahini",
    "badge": "special",
    "price": 150
  },
  {
    "id": "fish_fillet_meal",
    "category": "sandwiches_meals",
    "nameAr": "وجبة سمك فيليه مقلي",
    "nameEn": "Fish Fillet Meal",
    "descAr": "قطع سمك فيليه مقرمشة مع أرز وسلطة وصوص تارتار وطحينة",
    "descEn": "Crispy breaded fish fillet platter served with rice, dips and bread",
    "price": 160
  },
  {
    "id": "fish_fillet_half_kg",
    "category": "sandwiches_meals",
    "nameAr": "نصف كيلو سمك فيليه",
    "nameEn": "1/2 KG Fish Fillet",
    "descAr": "نصف كيلو صافي من السمك الفيليه المقلي الذهبي مع الصوصات",
    "descEn": "500g net golden fried fish fillet with dipping sauces",
    "price": 230
  },
  {
    "id": "fish_fillet_kg",
    "category": "sandwiches_meals",
    "nameAr": "كيلو سمك فيليه كامل",
    "nameEn": "1 KG Fish Fillet",
    "descAr": "كيلو صافي من السمك الفيليه المقلي المقرمش مع سرفيس صوصات وعيش",
    "descEn": "1kg net crispy fried fish fillet with dipping sauces and bread",
    "badge": "popular",
    "price": 440
  },
  {
    "id": "crunchy_bbq",
    "category": "crunchy_bowls",
    "nameAr": "كرانشي تشيز باربكيو",
    "nameEn": "Crunchy Cheese BBQ",
    "descAr": "قطع دجاج كرانشي مقرمشة مع البطاطس وصوص الباربكيو المدخن وصوص الجبنة",
    "descEn": "Crunchy chicken bowl with fries, smoky BBQ sauce and melted cheese",
    "badge": "popular",
    "price": 125
  },
  {
    "id": "crunchy_ranch",
    "category": "crunchy_bowls",
    "nameAr": "كرانشي تشيز رانش",
    "nameEn": "Crunchy Cheese Ranch",
    "descAr": "قطع دجاج كرانشي مع البطاطس وصوص الرانش الغني والجبنة السائلة",
    "descEn": "Crunchy chicken bowl loaded with creamy ranch dip and cheese sauce",
    "badge": "popular",
    "price": 125
  },
  {
    "id": "crunchy_jalapeno",
    "category": "crunchy_bowls",
    "nameAr": "كرانشي تشيز هالبينو",
    "nameEn": "Crunchy Cheese Jalapeno",
    "descAr": "قطع دجاج كرانشي مع فلفل هالبينو حار وبطاطس وصوص الجبنة السايحة",
    "descEn": "Fiery crunchy chicken bowl with sliced jalapenos and melted cheese",
    "badge": "spicy",
    "price": 125
  },
  {
    "id": "crunchy_texas",
    "category": "crunchy_bowls",
    "nameAr": "كرانشي تشيز تكساس",
    "nameEn": "Crunchy Cheese Texas",
    "descAr": "قطع دجاج كرانشي مع صوص التكساس الحار وصوص الجبنة الشيدر",
    "descEn": "Crunchy chicken bowl tossed in Texas sauce and golden cheddar",
    "badge": "special",
    "price": 125
  },
  {
    "id": "crunchy_sweet_chili",
    "category": "crunchy_bowls",
    "nameAr": "كرانشي تشيز سويت شيلي",
    "nameEn": "Crunchy Cheese Sweet Chili",
    "descAr": "قطع دجاج كرانشي مع صوص السويت شيلي الآسيوي اللذيذ وصوص الجبنة",
    "descEn": "Sweet & spicy chili glazed crunchy chicken bowl with cheese",
    "price": 125
  },
  {
    "id": "crunchy_cheddar",
    "category": "crunchy_bowls",
    "nameAr": "كرانشي تشيز شيدر أصلي",
    "nameEn": "Crunchy Cheese Cheddar",
    "descAr": "قطع دجاج كرانشي غارقة في صوص الجبنة الشيدر الكريمي الفاخر",
    "descEn": "Crunchy chicken bites drenched in rich creamy cheddar cheese sauce",
    "badge": "popular",
    "price": 125
  },
  {
    "id": "rotisserie_thigh",
    "category": "chicken_broasted",
    "nameAr": "وجبة ورك مشوي شواية",
    "nameEn": "Roasted Chicken Thigh Meal",
    "descAr": "ورك دجاج مشوي على الشواية مع أرز بسمتي، تومية، بطاطس، مخلل، عيش وسبايسي",
    "descEn": "Roasted chicken thigh with basmati rice, garlic dip, fries, pickles & bread",
    "price": 150
  },
  {
    "id": "rotisserie_breast",
    "category": "chicken_broasted",
    "nameAr": "وجبة صدر مشوي شواية",
    "nameEn": "Roasted Chicken Breast Meal",
    "descAr": "صدر دجاج مشوي شواية مع أرز بسمتي، تومية، بطاطس، مخلل، عيش وسبايسي",
    "descEn": "Roasted chicken breast with basmati rice, garlic dip, fries, pickles & bread",
    "price": 165
  },
  {
    "id": "rotisserie_double_thigh",
    "category": "chicken_broasted",
    "nameAr": "وجبة ورك دبل مشوي شواية",
    "nameEn": "Double Roasted Thigh Meal",
    "descAr": "2 ورك دجاج مشوي مع أرز، تومية، بطاطس، مخلل، عيش وسبايسي",
    "descEn": "2 roasted chicken thighs served with rice, dips, fries and bread",
    "price": 215
  },
  {
    "id": "rotisserie_half_meal",
    "category": "chicken_broasted",
    "nameAr": "وجبة نصف فرخة مشوية شواية",
    "nameEn": "Half Roasted Chicken Meal",
    "descAr": "نصف فرخة مشوية مع أرز بسمتي، تومية، بطاطس، مخلل، عيش وصوص سبايسي",
    "descEn": "Half roasted rotisserie chicken with basmati rice, fries & dips",
    "badge": "popular",
    "price": 240
  },
  {
    "id": "rotisserie_half_plain",
    "category": "chicken_broasted",
    "nameAr": "نصف فرخة مشوية سادة",
    "nameEn": "Half Roasted Chicken (Plain)",
    "descAr": "نصف فرخة مشوية على الشواية بدون وجبة",
    "descEn": "Plain half roasted rotisserie chicken",
    "price": 220
  },
  {
    "id": "rotisserie_whole_plain",
    "category": "chicken_broasted",
    "nameAr": "فرخة مشوية كاملة سادة",
    "nameEn": "Whole Roasted Chicken (Plain)",
    "descAr": "فرخة كاملة مشوية شواية بتتبيلة روستو الذهبية",
    "descEn": "Full roasted rotisserie chicken seasoned with Rosto spices",
    "badge": "popular",
    "price": 440
  },
  {
    "id": "broast_3pcs_thigh",
    "category": "chicken_broasted",
    "nameAr": "وجبة 3 قطع بروستد (فخد + دبوس + جناح)",
    "nameEn": "3 Pcs Broasted (Thigh + Drum + Wing)",
    "descAr": "3 قطع بروستد مقلية مقرمشة (متوفر أورجينال وسبايسي) + تومية + بطاطس + مخلل + عيش",
    "descEn": "3 pcs crispy fried broasted chicken + garlic dip + fries + pickles + bread",
    "badge": "popular",
    "price": 150
  },
  {
    "id": "broast_3pcs_breast",
    "category": "chicken_broasted",
    "nameAr": "وجبة 3 قطع بروستد (صدر + جناح)",
    "nameEn": "3 Pcs Broasted (Breast + Wing)",
    "descAr": "3 قطع بروستد مقرمشة (صدر وجناح) + تومية + بطاطس + مخلل + عيش",
    "descEn": "3 pcs broasted chicken (breast & wing) + garlic dip + fries + bread",
    "price": 165
  },
  {
    "id": "broast_3pcs_rice",
    "category": "chicken_broasted",
    "nameAr": "وجبة 3 قطع وراك مقلية مع أرز",
    "nameEn": "3 Pcs Fried Thighs with Rice",
    "descAr": "3 قطع وراك مقلية بروستد مع أرز بسمتي وتومية وعيش (بدون بطاطس)",
    "descEn": "3 pcs fried chicken thighs served with yellow basmati rice and garlic dip",
    "price": 215
  },
  {
    "id": "broast_6pcs_double",
    "category": "chicken_broasted",
    "nameAr": "وجبة 6 قطع بروستد دبل",
    "nameEn": "6 Pcs Double Broasted Meal",
    "descAr": "6 قطع بروستد دبل (فخد ودبوس وجناح) + بطاطس + تومية + مخلل + عيش",
    "descEn": "6 pcs broasted chicken feast + fries + garlic dip + pickles + bread",
    "badge": "popular",
    "price": 230
  },
  {
    "id": "broast_5pcs_half",
    "category": "chicken_broasted",
    "nameAr": "وجبة 5 قطع نصف فرخة بروستد",
    "nameEn": "5 Pcs Half Chicken Broasted Meal",
    "descAr": "5 قطع نصف فرخة مقلية بروستد مقرمشة مع البطاطس والتومية والعيش",
    "descEn": "5 pcs half chicken fried broasted with fries, garlic dip and bread",
    "badge": "popular",
    "price": 240
  },
  {
    "id": "broast_5pcs_drums",
    "category": "chicken_broasted",
    "nameAr": "وجبة 5 قطع دبابيس مقلية بروستد",
    "nameEn": "5 Pcs Drumsticks Broasted Meal",
    "descAr": "5 دبابيس دجاج مقلية كرانشي ذهبية مع بطاطس وتومية وعيش",
    "descEn": "5 golden fried drumsticks with fries, garlic dip and warm bread",
    "badge": "special",
    "price": 250
  },
  {
    "id": "broast_10pcs_drums",
    "category": "chicken_broasted",
    "nameAr": "وجبة 10 قطع دبابيس عائلية بروستد",
    "nameEn": "10 Pcs Drumsticks Family Feast",
    "descAr": "10 دبابيس دجاج مقلية مقرمشة مع سيرفيس بطاطس وتومية ومخلل وعيش",
    "descEn": "10 crispy fried drumsticks family pack with fries, dips and bread",
    "badge": "special",
    "price": 500
  },
  {
    "id": "strips_original",
    "category": "chicken_broasted",
    "nameAr": "فراخ ستربس مخلية (أورجينال)",
    "nameEn": "Boneless Chicken Strips (Original)",
    "descAr": "أصابع صدور دجاج ستربس مقرمشة مع مايونيز، سبايسي، بطاطس، كول سلو، وعيش",
    "descEn": "Crispy boneless chicken breast tenders with mayo, spicy sauce, fries, coleslaw & bread",
    "badge": "popular",
    "options": [
      {
        "key": "5pcs",
        "labelAr": "5 قطع",
        "labelEn": "5 Pcs",
        "price": 230
      },
      {
        "key": "10pcs",
        "labelAr": "10 قطع",
        "labelEn": "10 Pcs",
        "price": 450
      },
      {
        "key": "20pcs",
        "labelAr": "20 قطعة عائلي",
        "labelEn": "20 Pcs Family",
        "price": 875
      }
    ]
  },
  {
    "id": "strips_cheetos",
    "category": "chicken_broasted",
    "nameAr": "فراخ شيتوس ستربس مخلية (جديد)",
    "nameEn": "Cheetos Crusted Chicken Strips (New)",
    "descAr": "ستربس دجاج مقرمش مغطى بفتات الشيتوس المقرمش مع مايونيز، سبايسي، بطاطس، كول سلو وعيش",
    "descEn": "Crunchy Cheetos-crusted chicken tenders with spicy mayo, fries, coleslaw & bread",
    "badge": "new",
    "options": [
      {
        "key": "5pcs",
        "labelAr": "5 قطع",
        "labelEn": "5 Pcs",
        "price": 240
      },
      {
        "key": "10pcs",
        "labelAr": "10 قطع",
        "labelEn": "10 Pcs",
        "price": 460
      },
      {
        "key": "20pcs",
        "labelAr": "20 قطعة عائلي",
        "labelEn": "20 Pcs Family",
        "price": 900
      }
    ]
  },
  {
    "id": "grill_thigh",
    "category": "grills",
    "nameAr": "وجبة ورك مشوي على الفحم",
    "nameEn": "Charcoal Grilled Thigh Meal",
    "descAr": "ورك دجاج مشوي على الفحم بتتبيلة شامية مع أرز، بطاطس، سلطة، طحينة وعيش",
    "descEn": "Charcoal grilled chicken thigh with rice, fries, salad, tahini and bread",
    "badge": "charcoal",
    "price": 150
  },
  {
    "id": "grill_double_thigh",
    "category": "grills",
    "nameAr": "وجبة ورك دبل مشوي على الفحم",
    "nameEn": "Double Charcoal Grilled Thigh",
    "descAr": "2 ورك دجاج مشوي على الفحم مع أرز، بطاطس، سلطة وطحينة وعيش",
    "descEn": "2 charcoal grilled chicken thighs served with rice, fries and dips",
    "badge": "charcoal",
    "price": 220
  },
  {
    "id": "grill_turkey_boneless",
    "category": "grills",
    "nameAr": "وجبة فراخ تركي مخلية على الفحم",
    "nameEn": "Boneless Turkish Chicken on Charcoal",
    "descAr": "وراك مخلية مشوية على الفحم بخلطة البهارات التركية مع الأرز والبطاطس",
    "descEn": "Charcoal grilled boneless chicken in Turkish spices with rice and fries",
    "badge": "charcoal",
    "price": 230
  },
  {
    "id": "grill_half_chicken",
    "category": "grills",
    "nameAr": "نصف فرخة مشوية على الفحم",
    "nameEn": "Half Charcoal Grilled Chicken",
    "descAr": "نصف فرخة مشوية على الفحم الحجري مع أرز بسمتي وسلطات وعيش",
    "descEn": "Half charcoal grilled chicken with basmati rice, salads and bread",
    "badge": "charcoal",
    "price": 230
  },
  {
    "id": "grill_shami_kebab",
    "category": "grills",
    "nameAr": "وجبة كباب شامي (كفتة) + أرز",
    "nameEn": "Shami Kebab (Kofta) with Rice",
    "descAr": "كفتة لحم بلدي مشوية على الفحم تقدم مع أرز بسمتي وسلطة وطحينة وعيش",
    "descEn": "Charcoal grilled Shami meat kofta with basmati rice, tahini and salad",
    "badge": "popular",
    "price": 210
  },
  {
    "id": "grill_shami_kebab_half_kg",
    "category": "grills",
    "nameAr": "نصف كيلو كباب شامي (كفتة مشوية)",
    "nameEn": "1/2 KG Shami Kebab (Kofta)",
    "descAr": "نصف كيلو كفتة لحم مشوية على الفحم مع سرفيس أرز، سلطة، طحينة وعيش",
    "descEn": "500g charcoal grilled meat kofta with rice, tahini, salad and bread",
    "badge": "popular",
    "price": 330
  },
  {
    "id": "grill_sheqaf_kebab",
    "category": "grills",
    "nameAr": "وجبة شقف (كباب لحم) + أرز",
    "nameEn": "Sheqaf Meat Kebab with Rice",
    "descAr": "قطع لحم ضأن وبقري متبلة ومشوية على السيخ بالفحم مع أرز وطحينة",
    "descEn": "Tender chunks of charcoal grilled marinated meat kebab with rice & tahini",
    "badge": "special",
    "price": 280
  },
  {
    "id": "grill_mix_kebab",
    "category": "grills",
    "nameAr": "وجبة مشاوي مكس (شقف + كباب)",
    "nameEn": "Mix Grill Meal (Sheqaf + Kofta)",
    "descAr": "مكس كباب وشقف لحم مشوية على الفحم مع الأرز والبطاطس والسلطات",
    "descEn": "Mixed charcoal grill plate of meat chunks and kofta with rice and dips",
    "badge": "popular",
    "price": 240
  },
  {
    "id": "grill_mix_kebab_half_kg",
    "category": "grills",
    "nameAr": "نصف كيلو مشاوي مكس (شقف + كباب)",
    "nameEn": "1/2 KG Mix Grills (Sheqaf + Kofta)",
    "descAr": "نصف كيلو مشاوي لحم مشكل على الفحم مع الأرز وسرفيس السلطات والعيش",
    "descEn": "500g mixed charcoal grilled meat and kofta with rice and salads",
    "badge": "special",
    "price": 385
  },
  {
    "id": "grill_assorted_meal",
    "category": "grills",
    "nameAr": "وجبة مشاوي مشكل (شقف + كباب + شيش)",
    "nameEn": "Assorted Mixed Grill (Sheqaf + Kofta + Shish)",
    "descAr": "تشكيلة من الشقف والكفتة والشيش طاووق مع الأرز والبطاطس والطحينة",
    "descEn": "Full assortment of meat chunks, kofta, and chicken shish with rice",
    "badge": "special",
    "price": 295
  },
  {
    "id": "grill_assorted_half_kg",
    "category": "grills",
    "nameAr": "نصف كيلو مشاوي مشكل (شقف + كباب + شيش)",
    "nameEn": "1/2 KG Assorted Mixed Grills",
    "descAr": "نصف كيلو مشكل فاخر من كباب وشقف وشيش طاووق مع الأرز والسلطات",
    "descEn": "500g assorted grilled meat, kofta and chicken shish with rice platter",
    "badge": "special",
    "price": 410
  },
  {
    "id": "hawawshi_meat",
    "category": "grills",
    "nameAr": "حواوشي لحم بلدي عالفحم",
    "nameEn": "Charcoal Grilled Meat Hawawshi",
    "descAr": "رغيف حواوشي لحم بلدي بتتبيلة روستو الخاصة مشوي على الفحم",
    "descEn": "Authentic Egyptian hawawshi loaf stuffed with seasoned beef",
    "badge": "popular",
    "price": 115
  },
  {
    "id": "hawawshi_mozz",
    "category": "grills",
    "nameAr": "حواوشي لحم بالموزاريلا",
    "nameEn": "Meat Hawawshi with Mozzarella",
    "descAr": "رغيف حواوشي لحم غني بجبنة الموزاريلا السايحة على الفحم",
    "descEn": "Meat hawawshi stuffed with melted stretchy mozzarella cheese",
    "badge": "popular",
    "price": 135
  },
  {
    "id": "hawawshi_turkey",
    "category": "grills",
    "nameAr": "حواوشي تركي",
    "nameEn": "Turkish Hawawshi",
    "descAr": "حواوشي بتتبيلة تركية خاصة بالأعشاب والبهارات",
    "descEn": "Hawawshi seasoned with Turkish spices and fresh herbs",
    "price": 115
  },
  {
    "id": "hawawshi_turkey_mozz",
    "category": "grills",
    "nameAr": "حواوشي تركي بالموزاريلا",
    "nameEn": "Turkish Hawawshi with Mozzarella",
    "descAr": "حواوشي تركي محشو بالجبنة الموزاريلا السايحة",
    "descEn": "Turkish style hawawshi loaded with melted mozzarella",
    "price": 135
  },
  {
    "id": "arayes_meat",
    "category": "grills",
    "nameAr": "رغيف عرايس لحم شامية",
    "nameEn": "Shami Meat Arayes",
    "descAr": "خبز شامي رقيق محشو لحم مفروم بالبهارات ومشوي على الفحم",
    "descEn": "Toasted Shami flatbread stuffed with spiced minced meat",
    "price": 110
  },
  {
    "id": "sand_shami_kebab",
    "category": "grills",
    "nameAr": "ساندوتش كباب شامي",
    "nameEn": "Shami Kebab Sandwich",
    "descAr": "كفتة مشوية على الفحم مع الطحينة والبقدونس في خبز طازج",
    "descEn": "Charcoal grilled kofta with tahini and parsley in fresh bread",
    "price": 110
  },
  {
    "id": "toushka_meat_grill",
    "category": "grills",
    "nameAr": "رغيف توشكا لحمة عالفحم",
    "nameEn": "Grilled Meat Toushka",
    "descAr": "رغيف توشكا شامي محشو باللحمة والجبنة ومشوي مقرمش على الفحم",
    "descEn": "Shami toushka bread stuffed with meat and cheese grilled crispy",
    "price": 120
  },
  {
    "id": "box_chicken_bbq",
    "category": "grills",
    "nameAr": "بوكس تشكن باربكيو",
    "nameEn": "Chicken BBQ Grill Box",
    "descAr": "سيخ شيش + 2 سيخ كفتة فراخ + قطعة تركي بطاطس + تومية + ارز + سبايسي",
    "descEn": "1 Shish skewer + 2 chicken kofta skewers + turkey cut + fries + garlic dip + rice + spicy",
    "badge": "charcoal",
    "price": 230
  },
  {
    "id": "grill_chicken_kufta",
    "category": "grills",
    "nameAr": "وجبة كفتة فراخ (شيش كباب)",
    "nameEn": "Chicken Kofta Meal (Shish Kebab)",
    "descAr": "كفتة فراخ متبلة ومشوية على الفحم مع أرز بسمتي وتومية وعيش",
    "descEn": "Charcoal grilled chicken kofta skewers with rice, garlic dip and bread",
    "price": 160
  },
  {
    "id": "grill_chicken_kufta_half_kg",
    "category": "grills",
    "nameAr": "نصف كيلو كفتة فراخ (شيش كباب)",
    "nameEn": "1/2 KG Chicken Kofta (Shish Kebab)",
    "descAr": "نصف كيلو كفتة فراخ مشوية عالفحم مع أرز وسلطات وعيش",
    "descEn": "500g charcoal grilled chicken kofta with rice and dips",
    "price": 220
  },
  {
    "id": "grill_shish_turkey",
    "category": "grills",
    "nameAr": "وجبة شيش تركي عالفحم",
    "nameEn": "Turkish Shish Meal on Charcoal",
    "descAr": "أفخاذ دجاج مخلية متبلة ومشوية عالفحم مع الأرز والتومية",
    "descEn": "Boneless marinated chicken thighs grilled over charcoal with rice",
    "badge": "charcoal",
    "price": 170
  },
  {
    "id": "grill_shish_turkey_half_kg",
    "category": "grills",
    "nameAr": "نصف كيلو شيش تركي عالفحم",
    "nameEn": "1/2 KG Turkish Shish on Charcoal",
    "descAr": "نصف كيلو شيش تركي عالفحم مع الأرز وسرفيس التومية والعيش",
    "descEn": "500g Turkish grilled chicken shish with rice and garlic cream",
    "badge": "charcoal",
    "price": 240
  },
  {
    "id": "grill_shish_tawook",
    "category": "grills",
    "nameAr": "وجبة شيش طاووق عالفحم",
    "nameEn": "Shish Tawook Charcoal Meal",
    "descAr": "شيش طاووق صدور دجاج متبل عالفحم مع أرز وبطاطس وتومية وعيش",
    "descEn": "Classic chicken shish tawook cubes grilled on charcoal with rice and dips",
    "badge": "charcoal",
    "price": 225
  },
  {
    "id": "grill_shish_tawook_half_kg",
    "category": "grills",
    "nameAr": "نصف كيلو شيش طاووق عالفحم",
    "nameEn": "1/2 KG Shish Tawook on Charcoal",
    "descAr": "نصف كيلو شيش طاووق عالفحم مع الأرز والبطاطس والتومية والعيش",
    "descEn": "500g charcoal grilled shish tawook with basmati rice and garlic dip",
    "badge": "charcoal",
    "price": 315
  },
  {
    "id": "box_bbq_grill",
    "category": "grills",
    "nameAr": "بوكس الباربكيو مشويات عائلي",
    "nameEn": "BBQ Family Mixed Grill Platter",
    "descAr": "تشكيلة كباب وشيش وكفتة وتركي مع الأرز والمحمرة والتومية والطحينة",
    "descEn": "Grand BBQ platter with kebab, kofta, shish tawook and dips",
    "badge": "special",
    "price": 365
  },
  {
    "id": "arayes_chicken",
    "category": "grills",
    "nameAr": "رغيف عرايس دجاج",
    "nameEn": "Chicken Arayes Loaf",
    "descAr": "خبز شامي رقيق محشو بخلطة الدجاج المشوية على الفحم",
    "descEn": "Toasted flatbread filled with seasoned minced chicken",
    "price": 90
  },
  {
    "id": "toushka_chicken",
    "category": "grills",
    "nameAr": "رغيف توشكا دجاج",
    "nameEn": "Chicken Toushka Loaf",
    "descAr": "رغيف توشكا محشو بالدجاج المتبل والجبنة الموزاريلا عالفحم",
    "descEn": "Crispy grilled flatbread with seasoned chicken and mozzarella",
    "price": 100
  },
  {
    "id": "sand_shish_turkey",
    "category": "grills",
    "nameAr": "ساندوتش شيش تركي",
    "nameEn": "Turkish Shish Sandwich",
    "descAr": "قطع شيش تركي مشوية عالفحم مع التومية والمخلل في خبز طازج",
    "descEn": "Grilled Turkish chicken shish with garlic dip in fresh bread",
    "price": 100
  },
  {
    "id": "sand_chicken_kufta",
    "category": "grills",
    "nameAr": "ساندوتش كفتة فراخ",
    "nameEn": "Chicken Kofta Sandwich",
    "descAr": "كفتة فراخ مشوية عالفحم مع التومية في خبز طازج",
    "descEn": "Charcoal grilled chicken kofta skewer with garlic cream",
    "price": 90
  },
  {
    "id": "pizza_margherita",
    "category": "pizza",
    "nameAr": "بيتزا مارغريتا كلاسيك",
    "nameEn": "Classic Margherita Pizza",
    "descAr": "صوص الطماطم الإيطالي + جبنة موزاريلا فاخرة + أوريجانو",
    "descEn": "Authentic Italian tomato sauce + premium mozzarella cheese + oregano",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 110
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 160
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 220
      }
    ]
  },
  {
    "id": "pizza_four_seasons",
    "category": "pizza",
    "nameAr": "بيتزا فور سيزون",
    "nameEn": "Four Seasons Pizza",
    "descAr": "زيتون + خضار طازج + جبنة موزاريلا + مشروم فريش",
    "descEn": "Olives + fresh garden vegetables + mozzarella + fresh mushrooms",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 115
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 170
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 235
      }
    ]
  },
  {
    "id": "pizza_quattro",
    "category": "pizza",
    "nameAr": "بيتزا كواترو فروماتجي (أربع أجبان)",
    "nameEn": "Quattro Formaggi Pizza (4 Cheeses)",
    "descAr": "زيتون + موزاريلا + حلوم + شيدر + قشقوان فاخر",
    "descEn": "Olives + mozzarella + halloumi + cheddar + Kashkaval cheese",
    "badge": "special",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 115
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 170
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 235
      }
    ]
  },
  {
    "id": "pizza_jalapeno",
    "category": "pizza",
    "nameAr": "بيتزا هالبينو سبايسي",
    "nameEn": "Spicy Jalapeno Pizza",
    "descAr": "موزريلا + مشروم + زيتون + هالبينو + روستو هوت صوص",
    "descEn": "Mozzarella + mushrooms + olives + jalapenos + Rosto hot sauce",
    "badge": "spicy",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_texas",
    "category": "pizza",
    "nameAr": "بيتزا تكساس",
    "nameEn": "Texas Pizza",
    "descAr": "روستو مدخن + موزاريلا + فلفل أخضر + صوص التكساس الغني",
    "descEn": "Smoked beef + mozzarella + green pepper + rich Texas sauce",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_mac",
    "category": "pizza",
    "nameAr": "بيتزا الماك",
    "nameEn": "Mac Pizza",
    "descAr": "موزريلا + قطع دجاج متبلة + مشروم + صوص الماك المميز",
    "descEn": "Mozzarella + seasoned chicken cuts + mushrooms + Mac sauce",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_cheesy_cream",
    "category": "pizza",
    "nameAr": "بيتزا تشيزي كريم",
    "nameEn": "Cheesy Cream Pizza",
    "descAr": "زيتون + موزاريلا + خضار + مشروم + صوص الجبنة السائلة",
    "descEn": "Olives + mozzarella + vegetables + mushrooms + liquid cheese sauce",
    "badge": "special",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_ranch",
    "category": "pizza",
    "nameAr": "بيتزا رانش دجاج",
    "nameEn": "Chicken Ranch Pizza",
    "descAr": "موزريلا + مشروم + خضار + قطع فراخ ببانكا + صوص الرانش اللذيذ",
    "descEn": "Mozzarella + mushrooms + vegetables + chicken + creamy ranch sauce",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_creamy_smoked",
    "category": "pizza",
    "nameAr": "بيتزا كريمي مدخن",
    "nameEn": "Creamy Smoked Turkey Pizza",
    "descAr": "موزريلا + تركي مدخن + مشروم + فلفل + زيتون + صوص جبنة سائلة",
    "descEn": "Mozzarella + smoked turkey + mushrooms + peppers + olives + cheese sauce",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_rosto",
    "category": "pizza",
    "nameAr": "بيتزا روستو الخاصة",
    "nameEn": "Rosto Signature Pizza",
    "descAr": "زيتون + موزريلا + خضار + نوعين من اللحم المدخن الفاخر + مشروم",
    "descEn": "Olives + mozzarella + vegetables + 2 types of smoked meats + mushrooms",
    "badge": "special",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_king",
    "category": "pizza",
    "nameAr": "بيتزا كينج اللحم",
    "nameEn": "King Meat Pizza",
    "descAr": "موزريلا + خضار مشكل + لحم متبل شهي",
    "descEn": "Mozzarella + mixed vegetables + seasoned ground meat",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_salami",
    "category": "pizza",
    "nameAr": "بيتزا سلامي إيطالي",
    "nameEn": "Italian Salami Pizza",
    "descAr": "موزريلا + خضار + مشروم + شرائح سلامي بقري فاخر",
    "descEn": "Mozzarella + vegetables + mushrooms + premium beef salami slices",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_bianca",
    "category": "pizza",
    "nameAr": "بيتزا بيانكا شيش",
    "nameEn": "Bianca Shish Pizza",
    "descAr": "موزريلا + خضار + مشروم + قطع شيش طاووق مشوية",
    "descEn": "Mozzarella + vegetables + mushrooms + grilled chicken shish tawook",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_sojouk",
    "category": "pizza",
    "nameAr": "بيتزا السجق الشرقي",
    "nameEn": "Oriental Sojouk Pizza",
    "descAr": "موزريلا + خضار + مشروم + سجق شرقي متبل",
    "descEn": "Mozzarella + vegetables + mushrooms + spiced oriental sausage",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_fasting",
    "category": "pizza",
    "nameAr": "بيتزا صيامي (نباتي)",
    "nameEn": "Vegan Fasting Pizza",
    "descAr": "صلصة إيطالية + مشروم + فلفل + زيتون + بطاطس + أوريجانو",
    "descEn": "Italian sauce + mushrooms + peppers + olives + potatoes + oregano",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_supreme",
    "category": "pizza",
    "nameAr": "سوبر سوبريم بيتزا",
    "nameEn": "Super Supreme Pizza",
    "descAr": "سلامي + هوت دوج + مشروم + خضار مشكل + موزاريلا غنية",
    "descEn": "Salami + hot dog + mushrooms + mixed veggies + rich mozzarella",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_milano",
    "category": "pizza",
    "nameAr": "بيتزا ميلانو",
    "nameEn": "Milano Pizza",
    "descAr": "زيتون + موزريلا + مشروم + تركي مدخن",
    "descEn": "Olives + mozzarella + mushrooms + smoked turkey",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_smoke_turkey",
    "category": "pizza",
    "nameAr": "بيتزا سموك تركي",
    "nameEn": "Smoked Turkey Pizza",
    "descAr": "زيتون + موزريلا + خضار + مشروم + تركي مدخن",
    "descEn": "Olives + mozzarella + vegetables + mushrooms + smoked turkey",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_fajita",
    "category": "pizza",
    "nameAr": "بيتزا فاهيتا دجاج",
    "nameEn": "Chicken Fajita Pizza",
    "descAr": "دجاج متبل + ذرة حلوة + بصل + مشروم + موزاريلا",
    "descEn": "Spiced chicken + sweet corn + onions + mushrooms + mozzarella",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_hotdog",
    "category": "pizza",
    "nameAr": "بيتزا هوت دوغ",
    "nameEn": "Hot Dog Pizza",
    "descAr": "موزريلا + خضار + مشروم + زيتون + قطع هوت دوغ",
    "descEn": "Mozzarella + veggies + mushrooms + olives + sliced hot dog",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_luncheon",
    "category": "pizza",
    "nameAr": "بيتزا لانشون",
    "nameEn": "Luncheon Pizza",
    "descAr": "خضار مشكلة + موزاريلا + لانشون فاخر",
    "descEn": "Mixed garden veggies + mozzarella + fine luncheon slices",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_mushroom",
    "category": "pizza",
    "nameAr": "بيتزا مشروم فريش",
    "nameEn": "Fresh Mushroom Pizza",
    "descAr": "موزريلا + خضار + مشروم طازج وفير",
    "descEn": "Mozzarella + fresh vegetables + abundant sliced fresh mushrooms",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 120
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 175
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 245
      }
    ]
  },
  {
    "id": "pizza_zinger",
    "category": "pizza",
    "nameAr": "بيتزا زنجر حارة",
    "nameEn": "Spicy Zinger Pizza",
    "descAr": "صوص البيتزا + موزاريلا + قطع زنجر دجاج حار ومقرمش",
    "descEn": "Pizza sauce + mozzarella + spicy crunchy zinger chicken chunks",
    "badge": "spicy",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 125
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 180
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 255
      }
    ]
  },
  {
    "id": "pizza_chicken_shawerma",
    "category": "pizza",
    "nameAr": "بيتزا شاورما فراخ",
    "nameEn": "Chicken Shawarma Pizza",
    "descAr": "موزريلا + خضار + مشروم + شاورما فراخ سورية وتومية",
    "descEn": "Mozzarella + veggies + mushrooms + Syrian chicken shawarma & garlic dip",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 130
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 185
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 260
      }
    ]
  },
  {
    "id": "pizza_meat_shawerma",
    "category": "pizza",
    "nameAr": "بيتزا شاورما لحمة",
    "nameEn": "Meat Shawarma Pizza",
    "descAr": "موزريلا + خضار + مشروم + شاورما لحمة متبلة وطحينة",
    "descEn": "Mozzarella + veggies + mushrooms + tender meat shawarma & tahini",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 140
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 195
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 275
      }
    ]
  },
  {
    "id": "pizza_seafood",
    "category": "pizza",
    "nameAr": "بيتزا سي فود",
    "nameEn": "Seafood Pizza",
    "descAr": "موزريلا + جمبري طازج + كابوريا + خضار وصوص",
    "descEn": "Mozzarella + fresh shrimp + crab meat + veggies and herbs",
    "badge": "special",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 140
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 195
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 275
      }
    ]
  },
  {
    "id": "pizza_sea_ranch",
    "category": "pizza",
    "nameAr": "بيتزا سي رانش",
    "nameEn": "Sea Ranch Pizza",
    "descAr": "موزريلا + جمبري + كابوريا + صوص رانش فاخر",
    "descEn": "Mozzarella + shrimp + crab + rich creamy ranch drizzle",
    "badge": "special",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 160
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 215
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 300
      }
    ]
  },
  {
    "id": "pizza_gamberetto",
    "category": "pizza",
    "nameAr": "بيتزا جامبريتو (جمبري خالص)",
    "nameEn": "Gamberetto Shrimp Pizza",
    "descAr": "موزريلا + جمبري بحري طازج بالخلطة الإيطالية",
    "descEn": "Mozzarella + succulent sea shrimp with Italian seasoning",
    "badge": "special",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير (S)",
        "labelEn": "Small",
        "price": 145
      },
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 210
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 290
      }
    ]
  },
  {
    "id": "pizza_tuna",
    "category": "pizza",
    "nameAr": "بيتزا تونا بالخضار",
    "nameEn": "Tuna Vegetable Pizza",
    "descAr": "موزريلا + بصل + خضار مشكل + تونة قطع فاخرة",
    "descEn": "Mozzarella + onion + mixed vegetables + premium solid tuna",
    "options": [
      {
        "key": "m",
        "labelAr": "وسط (M)",
        "labelEn": "Medium",
        "price": 220
      },
      {
        "key": "l",
        "labelAr": "كبير (L)",
        "labelEn": "Large",
        "price": 295
      }
    ]
  },
  {
    "id": "man_shamia_parsley",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة شامية بقدونس",
    "nameEn": "Shami Cheese with Parsley",
    "price": 17
  },
  {
    "id": "man_shamia_plain",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة شامية سادة",
    "nameEn": "Plain Shami Cheese",
    "price": 17
  },
  {
    "id": "man_kiri",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة لافاش كيري",
    "nameEn": "Kiri Spread Cheese",
    "price": 22
  },
  {
    "id": "man_roumi",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة رومي",
    "nameEn": "Roumi Cheese",
    "price": 22
  },
  {
    "id": "man_cheddar",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة شيدر",
    "nameEn": "Cheddar Cheese",
    "price": 22
  },
  {
    "id": "man_mozzarella",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة موتزريلا",
    "nameEn": "Mozzarella Cheese",
    "price": 22
  },
  {
    "id": "man_halloumi",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة حلوم",
    "nameEn": "Halloumi Cheese",
    "price": 22
  },
  {
    "id": "man_white_cheese",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة بيضا",
    "nameEn": "White Feta Cheese",
    "price": 17
  },
  {
    "id": "man_mix_cheese",
    "category": "manakesh",
    "nameAr": "منقوشة مشكل أجبان",
    "nameEn": "Mixed Cheeses",
    "price": 17
  },
  {
    "id": "man_white_olive",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة بيضا زيتون",
    "nameEn": "White Cheese with Olives",
    "price": 19
  },
  {
    "id": "man_halloumi_olive",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة حلوم زيتون",
    "nameEn": "Halloumi with Olives",
    "price": 20
  },
  {
    "id": "man_white_spicy",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة بيضا حار",
    "nameEn": "Spicy White Cheese",
    "badge": "spicy",
    "price": 22
  },
  {
    "id": "man_mohammara",
    "category": "manakesh",
    "nameAr": "منقوشة محمرة حلبية",
    "nameEn": "Aleppo Mohammara",
    "price": 17
  },
  {
    "id": "man_zaatar",
    "category": "manakesh",
    "nameAr": "منقوشة زعتر بالزيت",
    "nameEn": "Thyme (Zaatar) with Olive Oil",
    "price": 14
  },
  {
    "id": "man_mohammara_zaatar",
    "category": "manakesh",
    "nameAr": "منقوشة محمرة زعتر",
    "nameEn": "Mohammara & Zaatar",
    "price": 16
  },
  {
    "id": "man_spinach",
    "category": "manakesh",
    "nameAr": "منقوشة سبانخ بالليمون",
    "nameEn": "Spinach with Lemon",
    "price": 16
  },
  {
    "id": "man_olives",
    "category": "manakesh",
    "nameAr": "منقوشة زيتون",
    "nameEn": "Black Olives",
    "price": 20
  },
  {
    "id": "man_labneh",
    "category": "manakesh",
    "nameAr": "منقوشة لبنة بلدية",
    "nameEn": "Syrian Labneh",
    "price": 16
  },
  {
    "id": "man_labneh_zaatar",
    "category": "manakesh",
    "nameAr": "منقوشة لبنة بالزعتر",
    "nameEn": "Labneh with Zaatar",
    "price": 17
  },
  {
    "id": "man_eggs",
    "category": "manakesh",
    "nameAr": "منقوشة بيض",
    "nameEn": "Fresh Baked Eggs",
    "price": 18
  },
  {
    "id": "man_sanfour",
    "category": "manakesh",
    "nameAr": "منقوشة سنفورة",
    "nameEn": "Sanfoura",
    "price": 18
  },
  {
    "id": "man_luncheon",
    "category": "manakesh",
    "nameAr": "منقوشة لانشون",
    "nameEn": "Luncheon",
    "price": 24
  },
  {
    "id": "man_pizza_soiree",
    "category": "manakesh",
    "nameAr": "منقوشة بيتزا سواريه",
    "nameEn": "Pizza Soiree",
    "price": 21
  },
  {
    "id": "man_sausage",
    "category": "manakesh",
    "nameAr": "منقوشة سوسيس",
    "nameEn": "Sausage (Hot Dog)",
    "price": 28
  },
  {
    "id": "man_sojouk",
    "category": "manakesh",
    "nameAr": "منقوشة سجق",
    "nameEn": "Sojouk",
    "price": 28
  },
  {
    "id": "man_safiha",
    "category": "manakesh",
    "nameAr": "صفيحة شامية باللحم",
    "nameEn": "Shami Meat Safiha",
    "badge": "popular",
    "price": 28
  },
  {
    "id": "man_chicken_slices",
    "category": "manakesh",
    "nameAr": "منقوشة شرحات دجاج",
    "nameEn": "Chicken Cutlets",
    "price": 35
  },
  {
    "id": "man_armenian_safiha",
    "category": "manakesh",
    "nameAr": "صفيحة أرمنية حارة",
    "nameEn": "Armenian Spicy Safiha",
    "badge": "spicy",
    "price": 33
  },
  {
    "id": "mozz_mohammara",
    "category": "manakesh",
    "nameAr": "محمرة موتزريلا",
    "nameEn": "Mohammara Mozzarella",
    "price": 25
  },
  {
    "id": "mozz_zaatar",
    "category": "manakesh",
    "nameAr": "زعتر موتزريلا",
    "nameEn": "Zaatar Mozzarella",
    "price": 25
  },
  {
    "id": "mozz_mohammara_zaatar",
    "category": "manakesh",
    "nameAr": "محمرة زعتر موتزريلا",
    "nameEn": "Mohammara & Zaatar Mozzarella",
    "price": 25
  },
  {
    "id": "mozz_olives",
    "category": "manakesh",
    "nameAr": "زيتون موتزريلا",
    "nameEn": "Olives Mozzarella",
    "price": 25
  },
  {
    "id": "mozz_mushroom",
    "category": "manakesh",
    "nameAr": "مشروم موتزريلا",
    "nameEn": "Mushroom Mozzarella",
    "price": 25
  },
  {
    "id": "mozz_mushroom_olives",
    "category": "manakesh",
    "nameAr": "مشروم زيتون موتزريلا",
    "nameEn": "Mushroom & Olives Mozzarella",
    "price": 30
  },
  {
    "id": "mozz_spinach",
    "category": "manakesh",
    "nameAr": "سبانخ موتزريلا",
    "nameEn": "Spinach Mozzarella",
    "price": 25
  },
  {
    "id": "mozz_luncheon",
    "category": "manakesh",
    "nameAr": "لانشون موتزريلا",
    "nameEn": "Luncheon Mozzarella",
    "price": 35
  },
  {
    "id": "mozz_salami",
    "category": "manakesh",
    "nameAr": "سلامي موتزريلا",
    "nameEn": "Salami Mozzarella",
    "price": 35
  },
  {
    "id": "mozz_shawarma",
    "category": "manakesh",
    "nameAr": "شاورما موتزريلا",
    "nameEn": "Shawarma Mozzarella",
    "badge": "popular",
    "price": 40
  },
  {
    "id": "mozz_hotdog",
    "category": "manakesh",
    "nameAr": "سوسيس موتزريلا",
    "nameEn": "Hot Dog Mozzarella",
    "price": 38
  },
  {
    "id": "mozz_meat",
    "category": "manakesh",
    "nameAr": "لحمة مفرومة موتزريلا",
    "nameEn": "Minced Meat Mozzarella",
    "price": 33
  },
  {
    "id": "mozz_chicken",
    "category": "manakesh",
    "nameAr": "تشكن دجاج موتزريلا",
    "nameEn": "Chicken Mozzarella",
    "price": 35
  },
  {
    "id": "mozz_chicken_slices",
    "category": "manakesh",
    "nameAr": "شرحات دجاج موتزريلا",
    "nameEn": "Chicken Slices Mozzarella",
    "price": 42
  },
  {
    "id": "mozz_smoked_turkey",
    "category": "manakesh",
    "nameAr": "سموك تركي موتزريلا",
    "nameEn": "Smoked Turkey Mozzarella",
    "price": 35
  },
  {
    "id": "mozz_toushka",
    "category": "manakesh",
    "nameAr": "توشكا سجق موتزريلا",
    "nameEn": "Toushka Sojouk Mozzarella",
    "price": 35
  },
  {
    "id": "mozz_mexicano",
    "category": "manakesh",
    "nameAr": "مكسيكي موتزريلا",
    "nameEn": "Mexican Mozzarella",
    "badge": "spicy",
    "price": 35
  },
  {
    "id": "mozz_ranch_chicken",
    "category": "manakesh",
    "nameAr": "رانش تشكن موزريلا",
    "nameEn": "Ranch Chicken Mozzarella",
    "badge": "special",
    "price": 38
  },
  {
    "id": "kraft_plain",
    "category": "manakesh",
    "nameAr": "منقوشة جبنة كرافت سادة",
    "nameEn": "Kraft Cheese",
    "price": 24
  },
  {
    "id": "kraft_luncheon",
    "category": "manakesh",
    "nameAr": "كرافت لانشون",
    "nameEn": "Kraft with Luncheon",
    "price": 35
  },
  {
    "id": "kraft_hotdog",
    "category": "manakesh",
    "nameAr": "كرافت سوسيس",
    "nameEn": "Kraft with Hot Dog",
    "price": 35
  },
  {
    "id": "kraft_salami",
    "category": "manakesh",
    "nameAr": "كرافت سلامي",
    "nameEn": "Kraft with Salami",
    "price": 35
  },
  {
    "id": "kraft_smoked_turkey",
    "category": "manakesh",
    "nameAr": "كرافت سموك تركي",
    "nameEn": "Kraft with Smoked Turkey",
    "price": 35
  },
  {
    "id": "pie_egg",
    "category": "manakesh",
    "nameAr": "فطيرة بيض بالفرن",
    "nameEn": "Oven Baked Egg Pie",
    "price": 29
  },
  {
    "id": "pie_meat_egg",
    "category": "manakesh",
    "nameAr": "فطيرة لحم بالبيض",
    "nameEn": "Meat & Egg Pie",
    "price": 35
  },
  {
    "id": "pie_sojouk_egg",
    "category": "manakesh",
    "nameAr": "فطيرة سجق بالبيض",
    "nameEn": "Sojouk & Egg Pie",
    "price": 35
  },
  {
    "id": "pie_mushroom_egg",
    "category": "manakesh",
    "nameAr": "فطيرة مشروم بالبيض",
    "nameEn": "Mushroom & Egg Pie",
    "price": 25
  },
  {
    "id": "pie_hotdog_egg",
    "category": "manakesh",
    "nameAr": "فطيرة سوسيس بالبيض",
    "nameEn": "Hot Dog & Egg Pie",
    "price": 35
  },
  {
    "id": "pie_kraft_egg",
    "category": "manakesh",
    "nameAr": "فطيرة كرافت بالبيض",
    "nameEn": "Kraft & Egg Pie",
    "price": 28
  },
  {
    "id": "pasta_arrabbiata_olive",
    "category": "pastas",
    "nameAr": "ارابيتا زيتون صيامي (نباتي)",
    "nameEn": "Arrabbiata Olives (Vegan)",
    "descAr": "مكرونة بيني مع الصوص الأحمر الحار والزيتون وأوريجانو",
    "descEn": "Penne pasta with spicy tomato sauce, black olives and oregano",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 90
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 110
      }
    ]
  },
  {
    "id": "pasta_arrabbiata_mushroom",
    "category": "pastas",
    "nameAr": "ارابيتا مشروم صيامي (نباتي)",
    "nameEn": "Arrabbiata Mushrooms (Vegan)",
    "descAr": "مكرونة مع الصوص الأحمر الغني والمشروم الطازج والفلفل",
    "descEn": "Penne pasta with rich red sauce, fresh mushrooms and peppers",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 90
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 110
      }
    ]
  },
  {
    "id": "pasta_pollo_speciale",
    "category": "pastas",
    "nameAr": "بولو سبيسيالي وايت صوص",
    "nameEn": "Pollo Speciale White Sauce",
    "descAr": "الوايت صوص الكريمي مع فلفل ألوان ومشروم ودجاج وموزاريلا سايحة",
    "descEn": "Creamy white sauce with colorful peppers, mushrooms, chicken & mozzarella",
    "badge": "special",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 120
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 155
      }
    ]
  },
  {
    "id": "pasta_quattro_formaggi",
    "category": "pastas",
    "nameAr": "كواترافرو ماتجي (4 أجبان فاخرة)",
    "nameEn": "Quattro Formaggi Pasta",
    "descAr": "مكرونة مع مزيج كريمي غني بأربعة أنواع من الجبن الفاخر",
    "descEn": "Rich pasta smothered in 4 luxury melted cheeses",
    "badge": "popular",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 105
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 125
      }
    ]
  },
  {
    "id": "pasta_bolognese",
    "category": "pastas",
    "nameAr": "بولونيز باللحم المفروم والموزاريلا",
    "nameEn": "Bolognese Meat & Mozzarella",
    "descAr": "الريد صوص الإيطالي مع اللحم المفروم المتبل والجبنة الموزاريلا",
    "descEn": "Rich Italian tomato Bolognese with seasoned minced beef & mozzarella",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 115
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 155
      }
    ]
  },
  {
    "id": "pasta_negresco",
    "category": "pastas",
    "nameAr": "نجريسكو دجاج روستو",
    "nameEn": "Chicken Negresco",
    "descAr": "وايت صوص كريمي فاخر مع قطع صدور الدجاج والموزاريلا المحمرة بالفرن",
    "descEn": "Oven baked white sauce pasta with tender chicken & melted mozzarella",
    "badge": "popular",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 115
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 145
      }
    ]
  },
  {
    "id": "pasta_negresco_shawerma_chicken",
    "category": "pastas",
    "nameAr": "نجريسكو شاورما فراخ (جديد)",
    "nameEn": "Chicken Shawarma Negresco (New)",
    "descAr": "وايت صوص كريمي مع شاورما فراخ سورية وموزاريلا في الفرن",
    "descEn": "Creamy white sauce baked with Syrian chicken shawarma & mozzarella",
    "badge": "new",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 115
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 150
      }
    ]
  },
  {
    "id": "pasta_negresco_shawerma_meat",
    "category": "pastas",
    "nameAr": "نجريسكو شاورما لحمة (جديد)",
    "nameEn": "Meat Shawarma Negresco (New)",
    "descAr": "وايت صوص كريمي مع شاورما لحمة بلدي وموزاريلا بالفرن",
    "descEn": "Baked creamy pasta with tender meat shawarma & melted mozzarella",
    "badge": "new",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 145
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 185
      }
    ]
  },
  {
    "id": "pasta_seafood",
    "category": "pastas",
    "nameAr": "باستا سي فود مشكل",
    "nameEn": "Mixed Seafood Pasta",
    "descAr": "وايت صوص مع جمبري + سبيط طازج + كابوريا وموزاريلا",
    "descEn": "Creamy white sauce with fresh shrimp, calamari & crab meat",
    "badge": "special",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 120
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 155
      }
    ]
  },
  {
    "id": "pasta_gamberetto",
    "category": "pastas",
    "nameAr": "باستا جامبريتو (جمبري)",
    "nameEn": "Gamberetto Shrimp Pasta",
    "descAr": "وايت صوص كريمي مع حبات الجمبري البحري المتبلة اللذيذة",
    "descEn": "Creamy white sauce pasta tossed with succulent marine shrimp",
    "badge": "special",
    "options": [
      {
        "key": "medium",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 105
      },
      {
        "key": "large",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 155
      }
    ]
  },
  {
    "id": "app_hummus",
    "category": "appetizers_salads_soups",
    "nameAr": "حمص بالطحينة السوري",
    "nameEn": "Syrian Hummus with Tahini",
    "price": 40
  },
  {
    "id": "app_mutabbal",
    "category": "appetizers_salads_soups",
    "nameAr": "متبل باذنجان (بابا غنوج)",
    "nameEn": "Mutabbal (Baba Ghanoush)",
    "price": 50
  },
  {
    "id": "app_yalangi",
    "category": "appetizers_salads_soups",
    "nameAr": "يالنجي سوري (ورق عنب بزيت الزيتون)",
    "nameEn": "Syrian Yalangi (Stuffed Vine Leaves)",
    "badge": "popular",
    "price": 60
  },
  {
    "id": "app_garlic_cream",
    "category": "appetizers_salads_soups",
    "nameAr": "كريم ثوم روستو (تومية سورية)",
    "nameEn": "Rosto Signature Garlic Dip (Toum)",
    "badge": "popular",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير",
        "labelEn": "Small",
        "price": 15
      },
      {
        "key": "m",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 25
      },
      {
        "key": "l",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 45
      }
    ]
  },
  {
    "id": "app_pickles",
    "category": "appetizers_salads_soups",
    "nameAr": "طبق مخلل مشكل شامي",
    "nameEn": "Assorted Shami Pickles",
    "price": 25
  },
  {
    "id": "app_tarator",
    "category": "appetizers_salads_soups",
    "nameAr": "طراطور سوري (طحينية)",
    "nameEn": "Tarator Tahini Sauce",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير",
        "labelEn": "Small",
        "price": 15
      },
      {
        "key": "l",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 25
      }
    ]
  },
  {
    "id": "app_mayo_spicy",
    "category": "appetizers_salads_soups",
    "nameAr": "مايونيز سبايسي حار",
    "nameEn": "Spicy Mayo Dip",
    "badge": "spicy",
    "options": [
      {
        "key": "s",
        "labelAr": "صغير",
        "labelEn": "Small",
        "price": 15
      },
      {
        "key": "m",
        "labelAr": "وسط",
        "labelEn": "Medium",
        "price": 25
      },
      {
        "key": "l",
        "labelAr": "كبير",
        "labelEn": "Large",
        "price": 45
      }
    ]
  },
  {
    "id": "app_kibbeh",
    "category": "appetizers_salads_soups",
    "nameAr": "قرص كبة مقلية شامية",
    "nameEn": "Fried Shami Kibbeh Piece",
    "badge": "popular",
    "price": 40
  },
  {
    "id": "app_fries_plate",
    "category": "appetizers_salads_soups",
    "nameAr": "طبق بطاطس مقلية ذهبية",
    "nameEn": "Plate of Golden Fries",
    "price": 35
  },
  {
    "id": "app_fries_cheddar",
    "category": "appetizers_salads_soups",
    "nameAr": "طبق بطاطس مقلية بصوص الشيدر",
    "nameEn": "Fries with Melted Cheddar Sauce",
    "badge": "popular",
    "price": 47
  },
  {
    "id": "app_rice_plate",
    "category": "appetizers_salads_soups",
    "nameAr": "طبق أرز بسمتي أصفر مبهر",
    "nameEn": "Basmati Rice Plate",
    "price": 40
  },
  {
    "id": "app_borek_cheese",
    "category": "appetizers_salads_soups",
    "nameAr": "برك جبنة مقلية (قطعة)",
    "nameEn": "Fried Cheese Borek (1 Pc)",
    "price": 12
  },
  {
    "id": "soup_orzo",
    "category": "appetizers_salads_soups",
    "nameAr": "شوربة لسان عصفور",
    "nameEn": "Orzo Soup",
    "price": 40
  },
  {
    "id": "soup_mushroom",
    "category": "appetizers_salads_soups",
    "nameAr": "شوربة فطر مشروم كريمية",
    "nameEn": "Creamy Mushroom Soup",
    "price": 70
  },
  {
    "id": "soup_chicken",
    "category": "appetizers_salads_soups",
    "nameAr": "شوربة دجاج كريمة",
    "nameEn": "Cream of Chicken Soup",
    "price": 70
  },
  {
    "id": "soup_mix",
    "category": "appetizers_salads_soups",
    "nameAr": "شوربة مكس (فطر + دجاج)",
    "nameEn": "Mix Chicken & Mushroom Soup",
    "badge": "special",
    "price": 75
  },
  {
    "id": "soup_lentil",
    "category": "appetizers_salads_soups",
    "nameAr": "شوربة عدس سورية أصيلة",
    "nameEn": "Authentic Syrian Lentil Soup",
    "price": 45
  },
  {
    "id": "salad_green",
    "category": "appetizers_salads_soups",
    "nameAr": "سلطة خضراء بلدي",
    "nameEn": "Fresh Green Salad",
    "price": 45
  },
  {
    "id": "salad_tabbouleh",
    "category": "appetizers_salads_soups",
    "nameAr": "تبولة شامية بالبرغل والليمون",
    "nameEn": "Authentic Shami Tabbouleh",
    "badge": "popular",
    "price": 55
  },
  {
    "id": "salad_fattoush",
    "category": "appetizers_salads_soups",
    "nameAr": "فتوش شامي بدبس الرمان والخبز المقرمش",
    "nameEn": "Fattoush with Pomegranate Molasses",
    "badge": "popular",
    "price": 55
  },
  {
    "id": "salad_coleslaw",
    "category": "appetizers_salads_soups",
    "nameAr": "سلطة كول سلو كريمية",
    "nameEn": "Creamy Coleslaw Salad",
    "price": 40
  },
  {
    "id": "kids_nuggets",
    "category": "kids_sauces_drinks",
    "nameAr": "وجبة أطفال ناغيت (مع لعبة رائعة)",
    "nameEn": "Kids Nuggets Meal (with Toy)",
    "descAr": "قطع دجاج ناغيت مع بطاطس وعصير ولعبة رائعة للأطفال",
    "descEn": "Nuggets with fries, juice and an awesome surprise toy",
    "badge": "popular",
    "price": 160
  },
  {
    "id": "kids_chicken_burger",
    "category": "kids_sauces_drinks",
    "nameAr": "وجبة أطفال تشكن برجر (مع لعبة رائعة)",
    "nameEn": "Kids Chicken Burger (with Toy)",
    "descAr": "ميني تشكن برجر مع بطاطس وعصير ولعبة هدية",
    "descEn": "Mini chicken burger with fries, juice and gift toy",
    "price": 160
  },
  {
    "id": "kids_beef_burger",
    "category": "kids_sauces_drinks",
    "nameAr": "وجبة أطفال بيف برجر (مع لعبة رائعة)",
    "nameEn": "Kids Beef Burger (with Toy)",
    "descAr": "ميني بيف برجر مع بطاطس مقرمشة وعصير ولعبة",
    "descEn": "Mini beef burger with crispy fries, juice and toy",
    "price": 160
  },
  {
    "id": "kids_crispy",
    "category": "kids_sauces_drinks",
    "nameAr": "وجبة أطفال كريسبي (مع لعبة رائعة)",
    "nameEn": "Kids Crispy Strips (with Toy)",
    "descAr": "ستربس كريسبي مقرمش مع بطاطس وعصير ولعبة هدية",
    "descEn": "Crispy chicken tenders with fries, juice and gift toy",
    "price": 170
  },
  {
    "id": "sauce_mac",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص الماك السري",
    "nameEn": "Secret Mac Sauce",
    "price": 18
  },
  {
    "id": "sauce_dynamite",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص ديناميت حار",
    "nameEn": "Dynamite Sauce",
    "badge": "spicy",
    "price": 18
  },
  {
    "id": "sauce_ranch",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص رانش كريمي",
    "nameEn": "Creamy Ranch Dip",
    "price": 18
  },
  {
    "id": "sauce_oreo_sweet",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص أوري سويت",
    "nameEn": "Oreo Sweet Sauce",
    "price": 18
  },
  {
    "id": "sauce_cheddar",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص جبنة شيدر سايحة",
    "nameEn": "Melted Cheddar Sauce",
    "price": 24
  },
  {
    "id": "sauce_sweet_chili",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص سويت شيلي",
    "nameEn": "Sweet Chili Sauce",
    "price": 18
  },
  {
    "id": "sauce_texas",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص تكساس سبايسي",
    "nameEn": "Texas Sauce",
    "price": 18
  },
  {
    "id": "sauce_bbq",
    "category": "kids_sauces_drinks",
    "nameAr": "صوص باربكيو مدخن",
    "nameEn": "Smoky BBQ Sauce",
    "price": 18
  },
  {
    "id": "drink_soda",
    "category": "kids_sauces_drinks",
    "nameAr": "مشروب غازي (كانز)",
    "nameEn": "Can Soft Drink (Soda)",
    "price": 18
  },
  {
    "id": "drink_water_small",
    "category": "kids_sauces_drinks",
    "nameAr": "مياه معدنية صغيرة",
    "nameEn": "Small Mineral Water",
    "price": 6
  },
  {
    "id": "drink_water_large",
    "category": "kids_sauces_drinks",
    "nameAr": "مياه معدنية كبيرة",
    "nameEn": "Large Mineral Water",
    "price": 10
  },
  {
    "id": "drink_ayran",
    "category": "kids_sauces_drinks",
    "nameAr": "لبن عيران سوري (رايب منعش)",
    "nameEn": "Syrian Ayran Yogurt Drink",
    "badge": "popular",
    "price": 20
  },
  {
    "id": "bf_halloumi_olives",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش حلوم بالزيتون",
    "nameEn": "Halloumi Cheese with Olives",
    "price": 35
  },
  {
    "id": "bf_halloumi",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش حلوم سادة",
    "nameEn": "Plain Halloumi Sandwich",
    "price": 35
  },
  {
    "id": "bf_turkey_mozz",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش تركي بالموزريلا",
    "nameEn": "Smoked Turkey with Mozzarella",
    "price": 55
  },
  {
    "id": "bf_mozz_olives",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش موزريلا بالزيتون",
    "nameEn": "Mozzarella with Olives",
    "price": 40
  },
  {
    "id": "bf_cream_cheese",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش جبنة كريمي",
    "nameEn": "Creamy Cheese Sandwich",
    "price": 35
  },
  {
    "id": "bf_fries",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش بطاطس فطار",
    "nameEn": "Breakfast Fries Sandwich",
    "price": 40
  },
  {
    "id": "bf_luncheon_mozz",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش لانشون بالموزريلا",
    "nameEn": "Luncheon with Mozzarella",
    "price": 50
  },
  {
    "id": "bf_mozzarella",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش موزريلا سادة",
    "nameEn": "Plain Mozzarella Sandwich",
    "price": 35
  },
  {
    "id": "bf_hotdog",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش هوت دوج فطار",
    "nameEn": "Breakfast Hot Dog",
    "price": 55
  },
  {
    "id": "sweet_nutella_sand",
    "category": "breakfast_desserts",
    "nameAr": "ساندوتش شوكولاتة نوتيلا",
    "nameEn": "Nutella Chocolate Sandwich",
    "badge": "popular",
    "price": 35
  },
  {
    "id": "sweet_pie_choc",
    "category": "breakfast_desserts",
    "nameAr": "فطيرة شوكولاتة ساخنة",
    "nameEn": "Hot Chocolate Sweet Pie",
    "price": 23
  },
  {
    "id": "sweet_pie_choc_banana",
    "category": "breakfast_desserts",
    "nameAr": "فطيرة شوكولاتة بالموز",
    "nameEn": "Chocolate & Banana Sweet Pie",
    "badge": "popular",
    "price": 28
  },
  {
    "id": "sweet_pie_kraft_honey",
    "category": "breakfast_desserts",
    "nameAr": "فطيرة جبنة كرافت بالعسل الطبيعي",
    "nameEn": "Kraft Cheese & Honey Sweet Pie",
    "badge": "special",
    "price": 25
  }
];

// Global App State
let currentLanguage = localStorage.getItem("rosto_lang") || "ar";
let currentCategory = "all";
let searchQuery = "";
let cartItems = [];
let selectedBranchId = "october_hosary";
let currentFlyerIndex = 0;
let qrCodeInstance = null;

// Categories Definition
const CATEGORIES = [
  { id: "all", labelAr: "الكل", labelEn: "All", icon: "✨" },
  { id: "boxes", labelAr: "عروض وبوكسات التوفير", labelEn: "Value Boxes", icon: "🎁" },
  { id: "shawerma", labelAr: "شاورما روستو", labelEn: "Rosto Shawarma", icon: "🌯" },
  { id: "jalapeno_shawerma", labelAr: "شاورما الهلابينو", labelEn: "Jalapeno Shawarma", icon: "🌶️" },
  { id: "fateh", labelAr: "فتات روستو", labelEn: "Fateh Bowls", icon: "🍚" },
  { id: "ciser_burgers", labelAr: "كايزر كورنر وبرجر", labelEn: "Ciser & Burgers", icon: "🍔" },
  { id: "sandwiches_meals", labelAr: "السندوتشات والوجبات", labelEn: "Sandwiches & Meals", icon: "🥪" },
  { id: "crunchy_bowls", labelAr: "كرانشي تشيز كورنر", labelEn: "Crunchy Cheese", icon: "🧀" },
  { id: "chicken_broasted", labelAr: "فراخ وبروستد وستربس", labelEn: "Broasted & Strips", icon: "🍗" },
  { id: "grills", labelAr: "مشويات الفحم والحواوشي", labelEn: "Charcoal Grills", icon: "🔥" },
  { id: "pizza", labelAr: "بيتزا روستو الإيطالية", labelEn: "Rosto Pizza", icon: "🍕" },
  { id: "manakesh", labelAr: "المناقيش والفطائر", labelEn: "Syrian Manakesh", icon: "🫓" },
  { id: "pastas", labelAr: "المكرونات والباستا", labelEn: "Pastas & Macarons", icon: "🍝" },
  { id: "appetizers_salads_soups", labelAr: "المقبلات والشوربات والسلطات", labelEn: "Appetizers & Soups", icon: "🥗" },
  { id: "kids_sauces_drinks", labelAr: "الأطفال والصوصات والمشروبات", labelEn: "Kids & Drinks", icon: "🥤" },
  { id: "breakfast_desserts", labelAr: "الفطار وفطائر الحلويات", labelEn: "Breakfast & Sweets", icon: "🥞" }
];

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Apply persisted language
  applyLanguage(currentLanguage);

  // Render Dynamic Category Tabs
  renderCategoryTabs();

  // Render Menu Grid
  renderMenuItems();

  // Render Branches Section & Radio List
  renderBranchesList();
  renderBranchRadioList();

  // Setup Modals
  setupModalHandlers();

  // Setup Flyer Lightbox
  initFlyerGallery();

  // Setup Search Input
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderMenuItems();
    });
  }

  // Setup Lang Toggle Button
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.addEventListener("click", toggleLanguage);
  }

  // Generate Table QR Code on Load
  initQrCode();

  // Check URL table query param (e.g. ?table=5)
  handleTableQueryParam();
});

// ==========================================================================
// BILINGUAL LOCALIZATION (ARABIC & ENGLISH)
// ==========================================================================
function toggleLanguage() {
  currentLanguage = currentLanguage === "ar" ? "en" : "ar";
  localStorage.setItem("rosto_lang", currentLanguage);
  applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
  const isAr = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  // Update Lang Button Label
  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) {
    langBtnText.textContent = isAr ? "English" : "العربية";
  }

  // Update all [data-i18n] text
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict && dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Re-render UI elements
  renderCategoryTabs();
  renderMenuItems();
  renderBranchesList();
  renderBranchRadioList();
  updateCartDisplay();
  renderFlyerThumbnails();
  setFlyerPage(currentFlyerIndex);
}

// ==========================================================================
// CATEGORY TABS & FILTERING
// ==========================================================================
function renderCategoryTabs() {
  const container = document.getElementById("categoryTabsList");
  if (!container) return;

  const isAr = currentLanguage === "ar";

  container.innerHTML = CATEGORIES.map((cat) => {
    const label = isAr ? cat.labelAr : cat.labelEn;
    const isActive = cat.id === currentCategory;
    const count = cat.id === "all" ? MENU_ITEMS.length : MENU_ITEMS.filter((it) => it.category === cat.id).length;

    return `
      <button 
        type="button" 
        class="category-tab-btn ${isActive ? "active" : ""}" 
        onclick="selectCategory('${cat.id}')"
      >
        <span>${cat.icon}</span>
        <span>${label}</span>
        <span class="tab-count">${count}</span>
      </button>
    `;
  }).join("");
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategoryTabs();
  renderMenuItems();

  const menuAnchor = document.getElementById("menuAnchor");
  if (menuAnchor) {
    const headerHeight = window.innerWidth <= 768 ? 58 : 74;
    const elementPosition = menuAnchor.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerHeight - 10,
      behavior: "smooth"
    });
  }
}

// ==========================================================================
// MENU ITEMS GRID RENDERING
// ==========================================================================
function renderMenuItems() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  // Filter items
  let filtered = MENU_ITEMS.filter((item) => {
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    if (!matchesCat) return false;

    if (!searchQuery) return true;

    const name = (isAr ? item.nameAr : item.nameEn).toLowerCase();
    const desc = (isAr ? (item.descAr || "") : (item.descEn || "")).toLowerCase();
    const otherName = (isAr ? item.nameEn : item.nameAr).toLowerCase();
    return name.includes(searchQuery) || desc.includes(searchQuery) || otherName.includes(searchQuery);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>${isAr ? "عذراً، لم نجد أي صنف يطابق بحثك" : "Sorry, no menu items match your search"}</h3>
        <p>${isAr ? "جرّب البحث باسم آخر أو تصفح الأقسام من الأعلى" : "Try searching another term or browse categories above"}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((item) => {
    const name = isAr ? item.nameAr : item.nameEn;
    const desc = isAr ? (item.descAr || "") : (item.descEn || "");
    const hasOptions = Array.isArray(item.options) && item.options.length > 0;

    // Selected option index (defaults to 0)
    const selectedOptIndex = item.selectedOption || 0;
    const activePrice = hasOptions ? item.options[selectedOptIndex].price : item.price;

    // Badge styling
    let badgeHtml = "";
    if (item.badge) {
      let badgeLabel = "";
      let badgeClass = "";
      if (item.badge === "new") {
        badgeLabel = dict.tagNew;
        badgeClass = "badge-new";
      } else if (item.badge === "popular") {
        badgeLabel = dict.tagPopular;
        badgeClass = "badge-popular";
      } else if (item.badge === "special") {
        badgeLabel = dict.tagSpecial;
        badgeClass = "badge-special";
      } else if (item.badge === "charcoal") {
        badgeLabel = dict.tagCharcoal;
        badgeClass = "badge-charcoal";
      } else if (item.badge === "spicy") {
        badgeLabel = dict.tagSpicy;
        badgeClass = "badge-spicy";
      }
      badgeHtml = `<span class="food-card-badge ${badgeClass}">${badgeLabel}</span>`;
    }

    // Options Pills
    let optionsHtml = "";
    if (hasOptions) {
      optionsHtml = `
        <div class="food-options-group">
          ${item.options.map((opt, idx) => {
            const optLabel = isAr ? opt.labelAr : opt.labelEn;
            const isSelected = idx === selectedOptIndex;
            return `
              <button 
                type="button" 
                class="option-pill ${isSelected ? "active" : ""}" 
                onclick="changeItemOption('${item.id}', ${idx})"
              >
                ${optLabel}
              </button>
            `;
          }).join("")}
        </div>
      `;
    }

    return `
      <div class="food-card" id="card-${item.id}">
        <div class="food-card-header">
          ${badgeHtml ? `<div class="food-card-badge-wrap">${badgeHtml}</div>` : ""}
          <h3 class="food-title">${name}</h3>
          ${desc ? `<p class="food-desc">${desc}</p>` : ""}
        </div>

        ${optionsHtml}

        <div class="food-card-footer">
          <div class="food-price-wrap">
            <span class="food-price" id="price-${item.id}">${activePrice}</span>
            <span class="food-currency">${dict.egp}</span>
          </div>
          <button type="button" class="add-cart-btn" onclick="addItemToCart('${item.id}')">
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
            </svg>
            <span>${dict.addToOrder}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function changeItemOption(itemId, optionIndex) {
  const item = MENU_ITEMS.find((it) => it.id === itemId);
  if (!item || !item.options || !item.options[optionIndex]) return;

  item.selectedOption = optionIndex;
  const newPrice = item.options[optionIndex].price;

  const priceEl = document.getElementById(`price-${itemId}`);
  if (priceEl) {
    priceEl.textContent = newPrice;
  }

  const card = document.getElementById(`card-${itemId}`);
  if (card) {
    const pills = card.querySelectorAll(".option-pill");
    pills.forEach((p, idx) => {
      p.classList.toggle("active", idx === optionIndex);
    });
  }
}

// ==========================================================================
// CART & FLOATING BAR LOGIC
// ==========================================================================
function addItemToCart(itemId) {
  const item = MENU_ITEMS.find((it) => it.id === itemId);
  if (!item) return;

  const isAr = currentLanguage === "ar";
  const hasOptions = Array.isArray(item.options) && item.options.length > 0;
  const selectedOpt = hasOptions ? item.options[item.selectedOption || 0] : null;

  const cartItemId = hasOptions ? `${item.id}_${selectedOpt.key}` : item.id;
  const itemPrice = hasOptions ? selectedOpt.price : item.price;
  const sizeLabelAr = selectedOpt ? selectedOpt.labelAr : "";
  const sizeLabelEn = selectedOpt ? selectedOpt.labelEn : "";

  const existing = cartItems.find((ci) => ci.cartItemId === cartItemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      cartItemId,
      id: item.id,
      nameAr: item.nameAr,
      nameEn: item.nameEn,
      sizeLabelAr,
      sizeLabelEn,
      price: itemPrice,
      quantity: 1
    });
  }

  updateCartDisplay();

  // Floating Bar Add Animation
  const floatingBar = document.getElementById("floatingCartBar");
  if (floatingBar) {
    floatingBar.classList.add("visible");
    floatingBar.animate([
      { transform: "translateX(-50%) scale(1)" },
      { transform: "translateX(-50%) scale(1.05)" },
      { transform: "translateX(-50%) scale(1)" }
    ], { duration: 250 });
  }
}

function updateCartDisplay() {
  const totalCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);
  const totalPrice = cartItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);
  const dict = I18N[currentLanguage];

  // Header Cart Badge
  document.querySelectorAll(".cart-count-badge").forEach((badge) => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "flex" : "none";
  });

  // Floating Cart Bar
  const floatBar = document.getElementById("floatingCartBar");
  const floatCount = document.getElementById("floatCartCount");
  const floatTotal = document.getElementById("floatCartTotal");

  if (floatBar) {
    if (totalCount > 0) {
      floatBar.classList.add("visible");
      if (floatCount) floatCount.textContent = `${totalCount} ${dict.itemsCountSuffix}`;
      if (floatTotal) floatTotal.textContent = `${totalPrice} ${dict.egp}`;
    } else {
      floatBar.classList.remove("visible");
    }
  }

  // Cart Modal Body
  renderCartModalItems();
}

function renderCartModalItems() {
  const container = document.getElementById("cartItemsList");
  const totalEl = document.getElementById("cartTotalAmount");
  if (!container) return;

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;">🛒</span>
        <h4 style="font-weight: 800; margin-bottom: 0.25rem;">${dict.emptyCartTitle}</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${dict.emptyCartDesc}</p>
      </div>
    `;
    if (totalEl) totalEl.textContent = `0 ${dict.egp}`;
    return;
  }

  const totalPrice = cartItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);
  if (totalEl) totalEl.textContent = `${totalPrice} ${dict.egp}`;

  container.innerHTML = cartItems.map((item) => {
    const title = isAr ? item.nameAr : item.nameEn;
    const size = isAr ? item.sizeLabelAr : item.sizeLabelEn;
    const subtotal = item.price * item.quantity;

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <span class="cart-item-title">${title}</span>
          ${size ? `<span class="cart-item-size">(${size})</span>` : ""}
          <span class="cart-item-price">${item.price} × ${item.quantity} = ${subtotal} ${dict.egp}</span>
        </div>
        <div class="cart-item-controls">
          <button type="button" class="qty-btn" onclick="decreaseCartItem('${item.cartItemId}')">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="increaseCartItem('${item.cartItemId}')">+</button>
        </div>
      </div>
    `;
  }).join("");
}

function increaseCartItem(cartItemId) {
  const item = cartItems.find((ci) => ci.cartItemId === cartItemId);
  if (item) {
    item.quantity += 1;
    updateCartDisplay();
  }
}

function decreaseCartItem(cartItemId) {
  const item = cartItems.find((ci) => ci.cartItemId === cartItemId);
  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      cartItems = cartItems.filter((ci) => ci.cartItemId !== cartItemId);
    }
    updateCartDisplay();
  }
}

function clearCart() {
  cartItems = [];
  updateCartDisplay();
}

function updateOrderTypeUI(type) {
  const addrLabel = document.getElementById("addressOrTableLabel");
  const addrInput = document.getElementById("orderCustomerAddressOrTable");
  const isAr = currentLanguage === "ar";

  if (type === "dine_in") {
    if (addrLabel) addrLabel.textContent = isAr ? "رقم الطاولة في الصالة:" : "Dine-in Table Number:";
    if (addrInput) addrInput.placeholder = isAr ? "مثال: طاولة رقم 4" : "e.g. Table #4";
  } else if (type === "pickup") {
    if (addrLabel) addrLabel.textContent = isAr ? "وقت الاستلام من المطعم (اختياري):" : "Pickup Time (Optional):";
    if (addrInput) addrInput.placeholder = isAr ? "مثال: بعد نصف ساعة" : "e.g. In 30 minutes";
  } else {
    if (addrLabel) addrLabel.textContent = isAr ? "عنوان التوصيل بالتفصيل:" : "Detailed Delivery Address:";
    if (addrInput) addrInput.placeholder = isAr ? "مثال: 6 أكتوبر - الحي المتميز - عمارة 12 - شقة 4" : "e.g. 6th of October - Distinctive District - Bldg 12";
  }
}

// ==========================================================================
// WHATSAPP ORDER DISPATCH
// ==========================================================================
function sendOrderWhatsApp() {
  if (cartItems.length === 0) {
    alert(currentLanguage === "ar" ? "سلة طلبك فارغة! اختر وجباتك أولاً." : "Your cart is empty! Please choose items first.");
    return;
  }

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  const custName = (document.getElementById("orderCustomerName")?.value || "").trim();
  const custPhone = (document.getElementById("orderCustomerPhone")?.value || "").trim();
  const addressOrTable = (document.getElementById("orderCustomerAddressOrTable")?.value || "").trim();
  const notes = (document.getElementById("orderCustomerNotes")?.value || "").trim();

  const orderTypeRadio = document.querySelector('input[name="orderType"]:checked');
  const orderType = orderTypeRadio ? orderTypeRadio.value : "delivery";

  let orderTypeTitle = dict.orderTypeDelivery;
  if (orderType === "pickup") orderTypeTitle = dict.orderTypePickup;
  if (orderType === "dine_in") orderTypeTitle = dict.orderTypeDineIn;

  // Selected branch
  const branch = BRANCHES_DATA.find((b) => b.id === selectedBranchId) || BRANCHES_DATA[0];
  const branchName = isAr ? branch.nameAr : branch.nameEn;

  const totalPrice = cartItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);

  // Formatted Itemized Message
  let msg = "";
  msg += `👑 *طلب جديد من منيو مطعم روستو (Rosto Menu)*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📍 *الفرع المختار:* ${branchName}\n`;
  msg += `🛵 *نوع الطلب:* ${orderTypeTitle}\n`;

  if (custName) msg += `👤 *الاسم:* ${custName}\n`;
  if (custPhone) msg += `📱 *الموبايل:* ${custPhone}\n`;
  if (addressOrTable) {
    const label = orderType === "dine_in" ? "🍽️ رقم الطاولة" : "📍 العنوان";
    msg += `${label}: ${addressOrTable}\n`;
  }

  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📋 *تفاصيل الأصناف:*` + "\n";

  cartItems.forEach((it, idx) => {
    const title = isAr ? it.nameAr : it.nameEn;
    const size = isAr ? it.sizeLabelAr : it.sizeLabelEn;
    const sub = it.price * it.quantity;
    msg += `${idx + 1}. *${title}*${size ? " (" + size + ")" : ""} × ${it.quantity} = ${sub} ج.م\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *الإجمالي الكلي:* *${totalPrice} ج.م*\n`;

  if (notes) {
    msg += `📝 *ملاحظات:* ${notes}\n`;
  }

  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `✨ تم إرسال الطلب عبر المنيو الإلكتروني: ${GITHUB_PAGES_URL}`;

  // Target WhatsApp phone for this branch
  const targetWhatsApp = branch.whatsapp || PRIMARY_WHATSAPP;
  const cleanPhone = targetWhatsApp.startsWith("20") ? targetWhatsApp : "20" + targetWhatsApp.replace(/^0+/, "");
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;

  window.open(waUrl, "_blank");
}

// ==========================================================================
// BRANCH SELECTION SYSTEM (BOTTOM SHEET)
// ==========================================================================
function renderBranchesList() {
  const container = document.getElementById("branchesContainer");
  if (!container) return;

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  container.innerHTML = BRANCHES_DATA.map((branch) => {
    const name = isAr ? branch.nameAr : branch.nameEn;
    const address = isAr ? branch.addressAr : branch.addressEn;
    const hours = isAr ? branch.hoursAr : branch.hoursEn;

    return `
      <div class="branch-card">
        <div>
          <div class="branch-header">
            <h3 class="branch-name">${name}</h3>
            ${branch.isMain ? `<span class="branch-tag">${dict.featuredBranchBadge}</span>` : ""}
          </div>
          <div class="branch-info-list" style="margin-top: 0.85rem;">
            <div class="branch-info-item">
              <span>📍</span>
              <span>${address}</span>
            </div>
            <div class="branch-info-item">
              <span>⏰</span>
              <span>${hours}</span>
            </div>
            <div class="branch-info-item">
              <span>📞</span>
              <span>${branch.phone}</span>
            </div>
          </div>
        </div>

        <div class="branch-actions-row">
          <a href="${branch.mapsUrl}" target="_blank" rel="noopener" class="branch-action-btn">
            <span>🗺️</span>
            <span>${isAr ? "الخريطة" : "Map"}</span>
          </a>
          <a href="https://wa.me/20${branch.whatsapp.replace(/^0+/, "")}" target="_blank" rel="noopener" class="branch-action-btn whatsapp">
            <span>💬</span>
            <span>واتساب</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function renderBranchRadioList(filterText = "") {
  const container = document.getElementById("branchRadioList");
  if (!container) return;

  const isAr = currentLanguage === "ar";
  const query = filterText.trim().toLowerCase();

  const filtered = BRANCHES_DATA.filter((b) => {
    if (!query) return true;
    const name = (isAr ? b.nameAr : b.nameEn).toLowerCase();
    const addr = (isAr ? b.addressAr : b.addressEn).toLowerCase();
    return name.includes(query) || addr.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1rem;">${I18N[currentLanguage].noBranchesFound}</p>`;
    return;
  }

  container.innerHTML = filtered.map((branch) => {
    const isSelected = branch.id === selectedBranchId;
    const name = isAr ? branch.nameAr : branch.nameEn;
    const address = isAr ? branch.addressAr : branch.addressEn;

    return `
      <div class="branch-radio-item ${isSelected ? "selected" : ""}" onclick="selectBranch('${branch.id}')">
        <div>
          <div style="font-weight: 800; font-size: 0.92rem; color: #fff;">${name}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">${address}</div>
        </div>
        <div style="color: var(--rosto-red); font-size: 1.1rem;">
          ${isSelected ? "🔘" : "⚪"}
        </div>
      </div>
    `;
  }).join("");
}

function filterBranchPickerList(query) {
  renderBranchRadioList(query);
}

function selectBranch(branchId) {
  selectedBranchId = branchId;
  const branch = BRANCHES_DATA.find((b) => b.id === branchId);
  const isAr = currentLanguage === "ar";

  const displayEl = document.getElementById("selectedBranchCartDisplay");
  if (displayEl && branch) {
    displayEl.textContent = isAr ? branch.nameAr : branch.nameEn;
  }

  renderBranchRadioList();
  closeModal("branchPickerModal");
}

// ==========================================================================
// TABLE QR CODE SYSTEM
// ==========================================================================
function initQrCode() {
  const container = document.getElementById("qrCanvas");
  if (!container) return;

  const tableSelect = document.getElementById("qrTableSelect");
  const tableVal = tableSelect ? tableSelect.value : "none";

  let fullUrl = GITHUB_PAGES_URL;
  if (tableVal && tableVal !== "none") {
    fullUrl += "?table=" + encodeURIComponent(tableVal);
  }

  const urlDisplay = document.getElementById("qrUrlDisplay");
  if (urlDisplay) urlDisplay.textContent = fullUrl;

  container.innerHTML = "";
  if (typeof QRCode !== "undefined") {
    qrCodeInstance = new QRCode(container, {
      text: fullUrl,
      width: 180,
      height: 180,
      colorDark: "#0a0a0c",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  if (tableSelect) {
    tableSelect.addEventListener("change", () => {
      initQrCode();
    });
  }
}

function handleTableQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const tableParam = urlParams.get("table");
  if (tableParam) {
    const tableSelect = document.getElementById("qrTableSelect");
    if (tableSelect) {
      tableSelect.value = tableParam;
    }
    const orderAddr = document.getElementById("orderCustomerAddressOrTable");
    if (orderAddr) {
      orderAddr.value = (currentLanguage === "ar" ? "طاولة رقم " : "Table #") + tableParam;
    }
    const dineInRadio = document.querySelector('input[name="orderType"][value="dine_in"]');
    if (dineInRadio) {
      dineInRadio.checked = true;
      updateOrderTypeUI("dine_in");
    }
  }
}

function downloadQRImage() {
  const container = document.getElementById("qrCanvas");
  if (!container) return;
  const img = container.querySelector("img");
  const canvas = container.querySelector("canvas");

  let dataUrl = "";
  if (img && img.src) {
    dataUrl = img.src;
  } else if (canvas) {
    dataUrl = canvas.toDataURL("image/png");
  }

  if (dataUrl) {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "rosto-menu-qr.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function copyMenuLink() {
  const url = document.getElementById("qrUrlDisplay")?.textContent?.trim() || GITHUB_PAGES_URL;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      alert(I18N[currentLanguage].copiedAlert);
    });
  } else {
    alert(url);
  }
}

// ==========================================================================
// MENU FLYER LIGHTBOX SYSTEM (9 PAGES)
// ==========================================================================
function initFlyerGallery() {
  renderFlyerThumbnails();
  setFlyerPage(0);
}

function renderFlyerThumbnails(filterCat = "all") {
  const thumbsContainer = document.getElementById("flyerThumbsStrip");
  if (!thumbsContainer) return;

  const isAr = currentLanguage === "ar";

  const filtered = FLYER_PAGES.filter((p) => {
    return filterCat === "all" || p.cat === filterCat;
  });

  thumbsContainer.innerHTML = filtered.map((page) => {
    const title = isAr ? page.titleAr : page.titleEn;
    const isCur = page.id === FLYER_PAGES[currentFlyerIndex].id;
    const pageIndexInAll = FLYER_PAGES.findIndex((p) => p.id === page.id);

    return `
      <button 
        type="button" 
        class="flyer-thumb-btn ${isCur ? "active" : ""}" 
        onclick="setFlyerPage(${pageIndexInAll})"
        title="${title}"
      >
        <img src="${page.src}" alt="${title}" loading="lazy">
        <span class="thumb-page-num">${page.id}</span>
      </button>
    `;
  }).join("");
}

function filterFlyerTabs(catKey) {
  document.querySelectorAll(".flyer-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-flyer-cat") === catKey);
  });
  renderFlyerThumbnails(catKey);
}

function setFlyerPage(index) {
  if (index < 0 || index >= FLYER_PAGES.length) return;
  currentFlyerIndex = index;

  const isAr = currentLanguage === "ar";
  const curPage = FLYER_PAGES[currentFlyerIndex];

  const mainImg = document.getElementById("flyerMainImg");
  const titleEl = document.getElementById("flyerPageTitle");
  const counterEl = document.getElementById("flyerPageCounter");

  if (mainImg) {
    mainImg.src = curPage.src;
    mainImg.alt = isAr ? curPage.titleAr : curPage.titleEn;
  }
  if (titleEl) {
    titleEl.textContent = isAr ? curPage.titleAr : curPage.titleEn;
  }
  if (counterEl) {
    counterEl.textContent = (currentFlyerIndex + 1) + " / " + FLYER_PAGES.length;
  }

  document.querySelectorAll(".flyer-thumb-btn").forEach((b) => {
    const num = b.querySelector(".thumb-page-num")?.textContent;
    b.classList.toggle("active", parseInt(num, 10) === curPage.id);
  });
}

function nextFlyerPage() {
  const nextIdx = (currentFlyerIndex + 1) % FLYER_PAGES.length;
  setFlyerPage(nextIdx);
}

function prevFlyerPage() {
  const prevIdx = (currentFlyerIndex - 1 + FLYER_PAGES.length) % FLYER_PAGES.length;
  setFlyerPage(prevIdx);
}

// ==========================================================================
// MODAL CONTROLS & EVENT BINDINGS
// ==========================================================================
function setupModalHandlers() {
  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-open-modal");
      openModal(modalId);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach((m) => closeModal(m.id));
    } else if (e.key === "ArrowRight") {
      const flyerModal = document.getElementById("flyerModal");
      if (flyerModal && flyerModal.classList.contains("open")) {
        currentLanguage === "ar" ? prevFlyerPage() : nextFlyerPage();
      }
    } else if (e.key === "ArrowLeft") {
      const flyerModal = document.getElementById("flyerModal");
      if (flyerModal && flyerModal.classList.contains("open")) {
        currentLanguage === "ar" ? nextFlyerPage() : prevFlyerPage();
      }
    }
  });

  document.querySelectorAll('input[name="orderType"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      updateOrderTypeUI(e.target.value);
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  if (modalId === "qrModal") {
    initQrCode();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("open");
  const openModals = document.querySelectorAll(".modal-overlay.open");
  if (openModals.length === 0) {
    document.body.style.overflow = "";
  }
}
