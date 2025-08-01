import { motion } from "framer-motion";
import QuickBooksLogo from "../assets/QuickBooksLogo.png"
import AutoSlider from "../components/common/AutoSlider";
import ServicesTestimonials from "../components/common/ServicesTestimonials";
import CommitmentCard from "../components/common/CommitmentCard";

const Home = () => {
    return (
        <div>
            <AutoSlider />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto px-4 py-10"
            >
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Dirt Dogs Grading & Land LLC
                </h1>

                <p className="text-xl text-red-600 font-semibold mb-1 hover:scale-105 transition-transform">
                    Phone: 303-435-4774
                </p>
                <p className="text-md text-red-500 mb-6 hover:underline cursor-pointer transition-all">
                    E-mail: Garr@DirtDogsExcavating.com
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Dirt Dogs Excavating is a professional{" "}
                    <span className="text-blue-700 font-semibold">
                        excavating and grading company
                    </span>{" "}
                    committed to excellence and offering both commercial and residential excavation,{" "}
                    <span className="text-red-600">grading and trenching</span> services. Whether you need excavation,{" "}
                    <span className="text-red-600">earth moving</span> or{" "}
                    <span className="text-red-600">foundation excavation</span> for a new home,{" "}
                    <span className="text-red-600">horse barn or arena, driveway, road grading</span> or landscaping project, our qualified
                    personnel recognize the importance of completing a quality project on time and on budget. This is achieved with our
                    constant attention to detail and our dedication to getting the job done right. We build enduring relationships with our
                    clients through honest communication, trust and reliability.
                </p>

                <p className="text-gray-600 mb-4">
                    We serve clients from{" "}
                    <span className="text-red-600">Elizabeth, Franktown, Parker</span>, Castle Rock, Colorado and surrounding areas.
                </p>

                <p className="text-gray-700 mb-6">
                    Dirt Dogs Excavating is proud to partner with QuickBooks for clients looking for financing options!
                </p>

                <div className="flex justify-center">
                    <img
                        src={QuickBooksLogo}
                        alt="QuickBooks"
                        className="w-40 sm:w-52 object-contain transition-transform hover:scale-105"
                    />
                </div>
            </motion.div>

            <ServicesTestimonials />

            <CommitmentCard />

        </div>
    );
};

export default Home;
