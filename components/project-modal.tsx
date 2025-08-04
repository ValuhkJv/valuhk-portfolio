"use client";

import { useState } from "react";
import { X, Github, Calendar, Users, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    longDescription?: string;
    features?: string[];
    screenshots?: string[];
    timeline?: string;
    teamSize?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg opacity-90">{project.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {["overview", "features", "technical", "gallery"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-h-96 overflow-y-auto">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold">Timeline</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.timeline || "3 months"}
                    </p>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold">Team Size</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.teamSize || "Solo Project"}
                    </p>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid gap-3">
                    {(
                      project.features || [
                        "User-friendly interface",
                        "Responsive design",
                        "Real-time updates",
                        "Secure authentication",
                        "Data analytics",
                        "Mobile optimization",
                      ]
                    ).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "technical" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1">
                        <Code className="h-3 w-3 mr-1" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "gallery" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Project Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(
                    project.screenshots || [
                      project.image,
                      project.image,
                      project.image,
                      project.image,
                    ]
                  ).map((screenshot, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
            <div className="flex space-x-4">
              <Button variant="outline">
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </Button>
            </div>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
