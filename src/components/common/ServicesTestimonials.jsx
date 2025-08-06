/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
    Globe2,
    Image,
    Handshake,
    DollarSign,
} from "lucide-react";

const cards = [
    {
        title: "SERVICES",
        icon: <Globe2 size={48} />,
        color: "bg-red-900",
        btn: "Learn More",
    },
    {
        title: "GALLERY",
        icon: <Image size={48} />,
        color: "bg-red-700",
        btn: "View Now",
    },
    {
        title: "GIVING BACK",
        icon: <Handshake size={48} />,
        color: "bg-red-600",
        btn: "Learn More",
    },
    {
        title: "QUOTES",
        icon: <DollarSign size={48} />,
        color: "bg-red-500",
        btn: "Request Now!",
    },
];

const testimonials = [
    {
        name: "John Doe",
        quote: "I wanted to take this opportunity to thank you for the magnificent job you did on our driveway...we couldn’t believe our eyes!",
        role: "Homeowner",
        color: "bg-stone-950",
    },
    {
        name: "Jane Smith",
        quote: "You took an absolute 'eye sore' of a driveway and turned it into something beautiful. Thank you for your honesty, good will and the outstanding job you did for us!",
        role: "Property Manager",
        color: "bg-stone-900",
    },
    {
        name: "Mike Johnson",
        quote: "I was amazed with what you did. We are really happy with it. It looks great! Thanks!",
        role: "Contractor",
        color: "bg-stone-950",
    },
];

export default function ServicesTestimonials() {
    return (
        <section className="w-full">
            <div className="grid md:grid-cols-4 grid-cols-2 w-full">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className={`text-white py-26 px-4 flex flex-col items-center text-center ${card.color}`}
                    >
                        {card.icon}
                        <h3 className="text-lg font-bold mt-10">{card.title}</h3>
                        <hr className="w-8 border-white mt-2 mb-6" />
                        <button className="bg-gray-900 text-white px-4 py-2 rounded">
                            {card.btn}
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Testimonials */}
            <div className="text-center py-16 px-4 ">
                <h2 className="text-4xl font-semibold mb-10">Testimonials</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.3 }}
                            className={`p-8 rounded shadow-md ${testimonial.color} text-gray-50`}
                        >
                            <blockquote className="text-m italic mb-4">
                                “{testimonial.quote}”
                            </blockquote>
                            <p className="font-semibold text-xl">{testimonial.name}</p>
                            {testimonial.role && (
                                <p className="text text-gray-50">{testimonial.role}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}