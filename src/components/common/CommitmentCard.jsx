// import React from "react";
// import { motion } from "framer-motion";

// const data = [
//   {
//     title: "New Garage Pad for home out by Strasburg CO.",
//     description:
//       "Dirt Dogs Excavating recently finished excavation work on a new, detached garage pad for a home out by Strasburg CO. The homeowner has a modular home and wanted a detached garage to store his vehicles. Dirt Dogs Excavating spent a day leveling and preparing the area and excavating…",
//     image: "https://via.placeholder.com/600x400?text=Garage+Pad",
//   },
//   {
//     title: "New driveway Loop for a home in Elizabeth, CO",
//     description:
//       "Dirt Dogs Excavating recently installed a road base driveway loop for a house in Elizabeth to make better access for delivery vehicles. This loop also provides additional parking for guests. The delivery trucks can more easily drive up to the home…",
//     image: "https://via.placeholder.com/600x400?text=Driveway+Loop",
//   },
//   {
//     title: "Pickleball Court Pad Excavation – Littleton, Colorado",
//     description:
//       "Dirt Dogs Excavating helped a homeowner in Littleton install a Pickleball court in their back yard. For this job, we cleared out trees, shrubs, and sod, replaced most of the…",
//     image: "https://via.placeholder.com/600x400?text=Pickleball+Court",
//   },
//   {
//     title: "Another Project Title",
//     description:
//       "Short summary of another excavation or earth-moving project goes here…",
//     image: "https://via.placeholder.com/600x400?text=Another+Project",
//   },
//   {
//     title: "Next Featured Project",
//     description:
//       "Details about the next feature project. Highlight your work for SEO and engagement…",
//     image: "https://via.placeholder.com/600x400?text=Next+Project",
//   },
//   {
//     title: "Next Featured Project",
//     description:
//       "Details about the next feature project. Highlight your work for SEO and engagement…",
//     image: "https://via.placeholder.com/600x400?text=Next+Project",
//   }
// ];

// const CommitmentCard = () => {
//   return (
//     <section className="bg-gray-100">
//       {/* Commitment Banner */}
//       <div className="relative bg-red-600 text-white py-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//           Commitment to Quality
//         </h2>
//         <p className="text-lg max-w-3xl mx-auto">
//           At Dirt Dogs Excavating our goal is to ensure that we satisfy our
//           customers the first time, every time by delivering a professional
//           excavation and earth moving services at a reasonable price.
//         </p>

//         {/* Triangle pointer */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-600"></div>
//       </div>

//       {/* Cards Grid */}
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {data.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
//             >
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-6 flex flex-col flex-1">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 flex-1">{card.description}</p>
//                 <div>
//                   <p className="text-red-600 font-medium mb-2">
//                     Continue reading
//                   </p>
//                   <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition">
//                     Read more
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommitmentCard;

//---------------------------------------------------------------------------------------------------



import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, ExternalLink, AlertCircle } from 'lucide-react';
import Button from "../common/items/Button"
import Loader from "../common/items/Loader"
import BrandName from "../common/items/BrnadName";


const CommitmentCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API (currently using mock data)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Mock data - replace with actual API call
        const mockData = [
          {
            id: 1,
            title: "New Garage Pad for home out by Strasburg CO.",
            description: "Dirt Dogs Excavating recently finished excavation work on a new, detached garage pad for a home out by Strasburg CO. The homeowner has a modular home and wanted a detached garage to store his vehicles. Dirt Dogs Excavating spent a day leveling and preparing the area and excavating...",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
            location: "Strasburg, CO",
            date: "2024-07-15",
            category: "Residential",
            readTime: "3 min read"
          },
          {
            id: 2,
            title: "New driveway Loop for a home in Elizabeth, CO",
            description: "Dirt Dogs Excavating recently installed a road base driveway loop for a house in Elizabeth to make better access for delivery vehicles. This loop also provides additional parking for guests. The delivery trucks can more easily drive up to the home...",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
            location: "Elizabeth, CO",
            date: "2024-06-28",
            category: "Driveway",
            readTime: "4 min read"
          },
          {
            id: 3,
            title: "Pickleball Court Pad Excavation – Littleton, Colorado",
            description: "Dirt Dogs Excavating helped a homeowner in Littleton install a Pickleball court in their back yard. For this job, we cleared out trees, shrubs, and sod, replaced most of the...",
            image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
            location: "Littleton, CO",
            date: "2024-06-12",
            category: "Recreation",
            readTime: "5 min read"
          },
          {
            id: 4,
            title: "Commercial Site Preparation - Parker Business District",
            description: "Complete site preparation and grading for a new commercial development in Parker's growing business district. The project included utility trenching and drainage systems...",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
            location: "Parker, CO",
            date: "2024-05-22",
            category: "Commercial",
            readTime: "6 min read"
          },
          {
            id: 5,
            title: "Basement Foundation Excavation - Castle Rock",
            description: "Precision basement excavation for a custom home in Castle Rock. The challenging terrain required careful planning and specialized equipment to ensure proper drainage...",
            image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop",
            location: "Castle Rock, CO",
            date: "2024-05-10",
            category: "Foundation",
            readTime: "4 min read"
          },
          {
            id: 6,
            title: "Ranch Road Construction - Elbert County",
            description: "Built a new access road for a working ranch in Elbert County. The project included proper grading, culvert installation, and gravel surfacing for all-weather access...",
            image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop",
            location: "Elbert County, CO",
            date: "2024-04-18",
            category: "Infrastructure",
            readTime: "7 min read"
          }
        ];

        // Simulate API call delay
        setTimeout(() => {
          setProjects(mockData);
          setLoading(false);
        }, 1200);
      } catch (err) {
        setError('Failed to load projects', err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (projectId) => {
    // In real implementation, navigate to project detail page
    console.log(`Navigating to project ${projectId}`);
    alert(`Redirecting to project ${projectId} detail page`);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Residential': 'bg-blue-500',
      'Driveway': 'bg-green-500',
      'Recreation': 'bg-purple-500',
      'Commercial': 'bg-orange-500',
      'Foundation': 'bg-red-500',
      'Infrastructure': 'bg-indigo-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return 'Date unavailable';
    }
  };

  if (loading) {
    return <Loader />

  }

  if (error) {
    return (
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-slate-600 text-lg mb-4">{error}</p>
          <Button
            onClick={() => window.location.reload()}          >
            Try Again
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <BrandName />

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            Our Recent <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our latest excavation and earthmoving projects across Colorado
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/e2e8f0/64748b?text=Project+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${getCategoryColor(project.category)} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg`}>
                  {project.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Meta Information */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 text-xs sm:text-sm text-slate-500 space-y-1 sm:space-y-0">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{formatDate(project.date)}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors leading-tight line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Read More Section */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-500">{project.readTime}</span>
                  <Button >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className=" text-center mt-8 sm:mt-12">
          <Button className='lg:ml-122'>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentCard;