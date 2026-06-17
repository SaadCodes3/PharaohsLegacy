import tutImg from "../assets/pharaohs/tut.jpg";
import khufuImg from "../assets/pharaohs/khufu.jpg";
import HatshepsutImg from "../assets/pharaohs/hatshepsut.jpg";
import ramsesImg from "../assets/pharaohs/ramses.jpg";
import IkhnatonImg from "../assets/pharaohs/Ikhnaton.jpg";
import kleopatraImg from "../assets/pharaohs/kleopatra.jpg";



export const pharaohs = [
  {
    name: "رمسيس الثاني",
    era: "1279–1213 ق.م",
    dynasty: "الأسرة التاسعة عشرة",
    desc: "أعظم فراعنة مصر وأطولهم حكمًا، بنى معبد أبو سمبل وقاد معركة قادش الشهيرة.",
    img: ramsesImg,
    temples: ["أبو سمبل", "الكرنك", "الرمسيوم"],
  },

  {
    name: "توت عنخ آمون",
    era: "1332–1323 ق.م",
    dynasty: "الأسرة الثامنة عشرة",
    desc: "الملك الذهبي، اشتُهر بعد اكتشاف مقبرته الأسطورية عام 1922 مليئة بالكنوز.",
    img: tutImg,
    temples: ["مقبرة KV62", "الكرنك"],
  },
  {
    name: "خوفو",
    era: "2589–2566 ق.م",
    dynasty: "الأسرة الرابعة",
    desc: "باني الهرم الأكبر، إحدى عجائب الدنيا السبع الوحيدة الباقية حتى اليوم.",
    img: khufuImg,
    temples: ["الهرم الأكبر", "معبد الوادي"],
  },
  {
    name: "حتشبسوت",
    era: "1507–1458 ق.م",
    dynasty: "الأسرة الثامنة عشرة",
    desc: "أعظم الملكات المصريات، حكمت مصر بقوة وبنت معبد الدير البحري الفريد.",
    img: HatshepsutImg,
    temples: ["الدير البحري", "الكرنك"],
  },
  {
    name: "أخناتون",
    era: "1353–1336 ق.م",
    dynasty: "الأسرة الثامنة عشرة",
    desc: "الفرعون الثوري الذي أسس الديانة التوحيدية وأنشأ عاصمة جديدة أخيتاتون.",
    img: IkhnatonImg,
    temples: ["تل العمارنة"],
  },
  {
    name: "كليوباترا السابعة",
    era: "51–30 ق.م",
    dynasty: "البطالمة",
    desc: "آخر ملوك مصر الفرعونية، اشتُهرت بذكائها وعلاقتها مع يوليوس قيصر.",
    img: kleopatraImg,
    temples: ["معبد دندرة", "معبد فيلة"],
  },
];
