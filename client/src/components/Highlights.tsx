import { Clock, ShieldCheck, ThumbsUp, Users } from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: "Fast Response",
    desc: "Quick quotes and immediate delivery arrangements for your urgent site needs.",
    icon: <Clock className="w-8 h-8 text-brand-orange" />
  },
  {
    title: "Bulk Orders",
    desc: "Special pricing and logistics support for large wholesale construction orders.",
    icon: <Users className="w-8 h-8 text-brand-orange" />
  },
  {
    title: "Trusted Products",
    desc: "We only stock durable, high-quality brands that professionals rely on.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />
  },
  {
    title: "Project Support",
    desc: "Dedicated help to source the right materials for each build stage.",
    icon: <ThumbsUp className="w-8 h-8 text-brand-orange" />
  }
];

export default function Highlights() {
  return (
    <section className="py-16 bg-white relative z-10 -mt-10 mx-4 md:mx-0">
      <div className="container-custom">
        <div className="text-center mb-10 md:hidden">
          <h2 className="text-2xl font-bold">Why Builders Choose Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-50 hover:border-brand-orange/20 transition-colors flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="bg-orange-50 p-4 rounded-xl mb-6 inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
