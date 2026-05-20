import karnakImg from "../assets/temple/karnak.jpg";
import abuSimbelImg from "../assets/temple/abu-simbel.jpg";
import deirImg from "../assets/temple/deir-elbahari.jpg";
import philaeImg from "../assets/temple/philae.jpg";
import edfoImg from "../assets/temple/edfo.jpg";
import luxorImg from "../assets/temple/luxor.jpg";
export const temples = [
  {
    name: "معبد الكرنك",
    location: "الأقصر",
    period: "الأسرة الثانية عشرة",
    desc: "أكبر معقد معابد في العالم القديم، مدينة دينية ضخمة على الضفة الشرقية للنيل.",
    img: karnakImg,
    rating: 5,
    price: 120,
    visits: "8:00 - 17:00",
  },
  {
    name: "أبو سمبل",
    location: "أسوان",
    period: "رمسيس الثاني",
    desc: "معبدان صخريان منحوتان في الجبل، يشهدان ظاهرة التعامد الشمسي مرتين سنويًا.",
    img: abuSimbelImg,
    rating: 5,
    price: 200,
    visits: "5:00 - 18:00",
  },
  {
    name: "الدير البحري",
    location: "الأقصر",
    period: "حتشبسوت",
    desc: "تحفة معمارية فريدة على أعمدة بيضاء تطل على وادي الملوك الشهير.",
    img: deirImg,
    rating: 4,
    price: 80,
    visits: "7:00 - 17:00",
  },
  {
    name: "معبد فيلة",
    location: "أسوان",
    period: "البطالمة",
    desc: "جوهرة النيل العائمة، أُنقذ من مياه السد العالي ونُقل حجرًا حجرًا.",
    img: philaeImg,
    rating: 5,
    price: 100,
    visits: "7:00 - 16:00",
  },
  {
    name: "معبد إدفو",
    location: "إدفو",
    period: "البطالمة",
    desc: "أكمل وأحسن معابد مصر حفظًا، مكرس للإله حورس برأس الصقر.",
    img: edfoImg,
    rating: 4,
    price: 80,
    visits: "7:00 - 17:00",
  },
  {
    name: "معبد الأقصر",
    location: "الأقصر",
    period: "رمسيس الثاني",
    desc: "معبد وسط المدينة المتوهج ليلًا، يربطه طريق الكباش بمعبد الكرنك.",
    img: luxorImg,
    rating: 5,
    price: 80,
    visits: "6:00 - 22:00",
  },
];
