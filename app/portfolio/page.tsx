"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Server,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { ProjectModal } from "@/components/project-modal";
import {
  ReactIcon,
  NodeIcon,
  TypeScriptIcon,
  NextJSIcon,
  PythonIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  ReactNativeIcon,
  FigmaIcon,
  GitIcon,
  TailwindIcon,
  AspNetIcon,
  ExpressIcon,
} from "@/components/tech-icons";
import Image from "next/image";

// Tambahkan tipe ini di bawah imports
type ProjectType = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  longDescription: string;
  features: string[];
  screenshots?: string[];
  timeline: string;
  teamSize: string;
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "SJ Courier Service",
      description:
        "A comprehensive package delivery application for Batam City with real-time tracking, automatic record-keeping, and streamlined ordering system.",
      image: "/images/sj-courier-poster.png",
      technologies: [
        "Laravel",
        "Tailwind CSS",
        "PostgreSQL",
        "DaisyUI",
        "OpenStreetMap",
        "Leaflet",
        "Midtrans",
      ],
      github: "https://github.com/ValuhkJv/PBL-IF02-S4",
      longDescription:
        "SJ Courier Service is a point-to-point package delivery application designed specifically for the city of Batam. The system provides real-time package tracking, automatic recording, and a user-friendly interface for both customers and delivery personnel. Built with modern web technology, the application is equipped with live GPS tracking and comprehensive reporting capabilities.",
      features: [
        "Real-time GPS tracking for all deliveries",
        "Price checking between distances",
        "Comprehensive admin dashboard",
        "Mobile-responsive design",
        "Payment gateway integration",
        "Route optimization algorithms",
        "Manage status shipment",
      ],
      screenshots: [
        "/images/SJ COURIER_CEK TARIF.png",
        "/images/SJ COURIER_DASHHBOARD ADMIN.png",
        "/images/SJ COURIER_KELOLA STATUS.png",
        "/images/SJ COURIER_LIVE TRACKING USER.png",
      ],
      timeline: "6 months",
      teamSize: "3 developers",
    },
    {
      title: "Polibatam Management System",
      description:
        "An efficient management application for Polibatam's general affairs division, featuring borrowing management, permissions, item tracking, and comprehensive reporting.",
      image: "/images/polibatam-poster.png",
      technologies: ["React", "Node JS", "PostgreSQL", "MUI", "Express"],
      github: "https://github.com/ValuhkJv",
      longDescription:
        "The Polibatam General Subdivision Management Application is a software designed to assist in the management and administration of goods within Polibatam. This system aims to facilitate the management of goods, from requests and loans to stock management. This application will be used by several key actors, namely: SBUM staff, unit heads, units, and students.",
      features: [
        "Equipment borrowing and return tracking",
        "Permission request workflow",
        "Automated report generation",
        "Document management system",
        "Analytics dashboard",
        "Mobile-friendly interface",
        "Data export options",
        "Inventory management",
      ],
      screenshots: [
        "/images/polibatam_1.jpeg",
        "/images/polibatam_2.jpeg",
        "/images/polibatam_3.jpeg",
        "/images/polibatam_4.jpeg",
        "/images/polibatam_5.jpeg",
        "/images/polibatam_6.jpeg",
        "/images/polibatam_7.jpeg",
        "/images/polibatam_8.jpeg",
      ],
      timeline: "6 months",
      teamSize: "5 developers",
    },
    {
      title: "Film Flix - Movie Tickets",
      description:
        "A user-friendly movie ticket booking website built to simplify the cinema experience with efficient ticket purchasing and seat selection system.",
      image: "/images/filmflix-poster.png",
      technologies: [
        "Laravel",
        "PHP",
        "MVC",
        "MySQL",
        "Payment Gateway",
        "Tailwind CSS",
      ],
      github: "https://github.com/ValuhkJv",
      longDescription:
        "Film Flix is a modern movie ticket booking platform that revolutionizes the cinema experience. Built with Laravel framework following MVC architecture, it provides users with an intuitive interface to browse movies, select seats, and purchase tickets online. The system includes advanced features like seat mapping, multiple payment options, and booking management.",
      features: [
        "Interactive seat selection with real-time availability",
        "Multiple payment gateway integration",
        "Movie showtime management",
        "User booking history and profiles",
        "Admin panel for cinema management",
        "Mobile-responsive design",
      ],
      screenshots: [
        "/images/Film_FLIX_1.jpeg",
        "/images/Film_FLIX_2.jpeg",
        "/images/Film_FLIX_3.jpeg",
        "/images/Film_FLIX_4.jpeg",
      ],
      timeline: "6 months",
      teamSize: "6 developers",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      icon: Code,
      customIcon: null,
      category: "Frontend",
      color: "text-yellow-600",
    },
    {
      name: "React",
      icon: ReactIcon,
      customIcon: ReactIcon,
      category: "Frontend",
      color: "text-blue-500",
    },
    {
      name: "Next.js",
      icon: NextJSIcon,
      customIcon: NextJSIcon,
      category: "Frontend",
      color: "text-black dark:text-white",
    },
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
      customIcon: TypeScriptIcon,
      category: "Frontend",
      color: "text-blue-600",
    },
    {
      name: "Node.js",
      icon: NodeIcon,
      customIcon: NodeIcon,
      category: "Backend",
      color: "text-green-600",
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQLIcon,
      customIcon: PostgreSQLIcon,
      category: "Database",
      color: "text-blue-700",
    },
    {
      name: "MongoDB",
      icon: MongoDBIcon,
      customIcon: MongoDBIcon,
      category: "Database",
      color: "text-green-500",
    },
    {
      name: "Python",
      icon: PythonIcon,
      customIcon: PythonIcon,
      category: "Backend",
      color: "text-blue-500",
    },
    {
      name: "React Native",
      icon: ReactNativeIcon,
      customIcon: ReactNativeIcon,
      category: "Mobile",
      color: "text-blue-500",
    },
    {
      name: "UI/UX Design",
      icon: FigmaIcon,
      customIcon: FigmaIcon,
      category: "Design",
      color: "text-purple-500",
    },
    {
      name: "REST APIs",
      icon: Server,
      customIcon: null,
      category: "Backend",
      color: "text-gray-600",
    },
    {
      name: "Git",
      icon: GitIcon,
      customIcon: GitIcon,
      category: "DevOps",
      color: "text-orange-600",
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
      customIcon: TailwindIcon,
      category: "Frontend",
      color: "text-cyan-500",
    },
    {
      name: "Figma",
      icon: FigmaIcon,
      customIcon: FigmaIcon,
      category: "Design",
      color: "text-purple-500",
    },
    {
      name: "ASP.NET Core MVC",
      icon: AspNetIcon,
      customIcon: AspNetIcon,
      category: "Backend",
      color: "text-blue-600",
    },
    {
      name: "SQL Server",
      icon: PostgreSQLIcon,
      customIcon: PostgreSQLIcon,
      category: "Database",
      color: "text-blue-700",
    },
    {
      name: "Express.js",
      icon: ExpressIcon,
      customIcon: ExpressIcon,
      category: "Backend",
      color: "text-gray-600",
    },
  ];

  const filterCategories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Mobile",
    "Design",
    "DevOps",
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["home", "about", "projects", "skills", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                        activeSection === section
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : ""
                      }`}
                    >
                      {section}
                    </button>
                  )
                )}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-full"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-4 py-2 space-y-2">
                {["home", "about", "projects", "skills", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left px-3 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      {section}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <Image
                    src="/valuhk.jpg"
                    alt="Profile"
                    width={112}
                    height={112}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Valuhk Januarta
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
              I create beautiful, functional, and user-centered digital
              experiences that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6 animate-fade-in-delay-4">
              <a
                href="https://github.com/ValuhkJv"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/valuhk-januarta-vican/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://valuhkjv@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown
              className="h-6 w-6 text-gray-400"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Hello! I&#39;m Valuhk Januarta
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I am an active fifth-semester student focusing on web
                  application development in the computer science department. I
                  am passionate about creating impactful digital solutions. I
                  enjoy the challenge of transforming complex problems into
                  simple, beautiful, and intuitive designs. I am also
                  enthusiastic about exploring new technologies in web
                  development.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Agile Development",
                    "User Experience",
                  ].map((trait) => (
                    <Badge
                      key={trait}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
                  <Image
                    src="/code.png"
                    alt="Working"
                    width={600}
                    height={400}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 pt-0"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        onClick={() => openProjectModal(project)}
                        className="bg-white/90 text-gray-900 hover:bg-white"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openProjectModal(project)}
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Skills & Technologies
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={`transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
                >
                  {category}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category === "All"
                      ? skills.length
                      : skills.filter((skill) => skill.category === category)
                          .length}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredSkills.map((skill, index) => {
                const IconComponent = skill.customIcon || skill.icon;
                return (
                  <Card
                    key={`${skill.name}-${activeFilter}`}
                    className="group p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 hover:border-blue-200 dark:hover:border-blue-800 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent
                          className={`h-8 w-8 ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <Badge
                          variant="secondary"
                          className="mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Skills Summary */}
            <div className="mt-16 text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {skills.filter((s) => s.category === "Frontend").length}+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Frontend Technologies
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {skills.filter((s) => s.category === "Backend").length}+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Backend Technologies
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    2+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Years of Experience
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">
                Let&#39;s Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                I&#39;m always interested in new opportunities and exciting
                projects. Let&#39;s discuss how we can bring your ideas to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or
                    just want to say hello, I&#39;d love to hear from you. I
                    typically respond within 24 hours.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          valuhkjv@gmail.com
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Linkedin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">LinkedIn</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          https://www.linkedin.com/in/valuhk-januarta-vican/
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Github className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">GitHub</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          github.com/ValuhkJv
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Response Time</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Valuhk Januarta. All rights reserved.</p>
          </div>
        </footer>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeProjectModal}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out both;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }
      `}</style>
    </div>
  );
}
