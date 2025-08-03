import {Link} from "react-router-dom"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Lock, BookOpen } from "lucide-react"
import ResourceCard from "../../../components/resource-card/resourceCard"



export default function ResourcesPage({ params }) {
  // In a real app, you would fetch this data based on the slug
  const courseData = {
    title: "JavaScript Essentials",
    description: "Build interactive web applications with JavaScript",
  }

  // Sample resources data
  const resources = {
    cheatSheets: [
      {
        id: 1,
        title: "JavaScript Syntax Cheat Sheet",
        description: "Quick reference for JavaScript syntax and common methods",
        type: "Cheat Sheet",
        isPremium: false,
        fileSize: "420 KB",
        fileType: "PDF",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "DOM Manipulation Reference",
        description: "Complete guide to manipulating the DOM with JavaScript",
        type: "Cheat Sheet",
        isPremium: true,
        fileSize: "1.2 MB",
        fileType: "PDF",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "ES6+ Features Overview",
        description: "Modern JavaScript features and syntax guide",
        type: "Cheat Sheet",
        isPremium: true,
        fileSize: "850 KB",
        fileType: "PDF",
        downloadUrl: "#",
      },
    ],
    exercises: [
      {
        id: 1,
        title: "Basic JavaScript Exercises",
        description: "Practice exercises for JavaScript fundamentals",
        type: "Exercise",
        isPremium: false,
        fileSize: "350 KB",
        fileType: "PDF",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "DOM Manipulation Exercises",
        description: "Hands-on exercises for working with the DOM",
        type: "Exercise",
        isPremium: true,
        fileSize: "720 KB",
        fileType: "PDF",
        downloadUrl: "#",
      },
    ],
    projectFiles: [
      {
        id: 1,
        title: "Todo List App Starter",
        description: "Starter files for building a todo list application",
        type: "Project",
        isPremium: false,
        fileSize: "1.5 MB",
        fileType: "ZIP",
        downloadUrl: "#",
      },
      {
        id: 2,
        title: "Weather App Project",
        description: "Complete project files for building a weather application",
        type: "Project",
        isPremium: true,
        fileSize: "2.3 MB",
        fileType: "ZIP",
        downloadUrl: "#",
      },
      {
        id: 3,
        title: "E-commerce Site Template",
        description: "Advanced project template for an e-commerce website",
        type: "Project",
        isPremium: true,
        fileSize: "4.7 MB",
        fileType: "ZIP",
        downloadUrl: "#",
      },
    ],
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{courseData.title} - Resources</h1>
        <p className="text-xl text-muted-foreground mb-4">{courseData.description}</p>

        <div className="flex gap-4 mb-6">
          <Link to={`/courses/${params.slug}`}>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" /> Course Overview
            </Button>
          </Link>
          <Link to={`/courses/${params.slug}/playground`}>
            <Button variant="outline">Code Playground</Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="cheatSheets" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cheatSheets">Cheat Sheets</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="projectFiles">Project Files</TabsTrigger>
        </TabsList>

        <TabsContent value="cheatSheets" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.cheatSheets.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                type={resource.type}
                isPremium={resource.isPremium}
                downloadUrl={resource.downloadUrl}
                fileSize={resource.fileSize}
                fileType={resource.fileType}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="exercises" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.exercises.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                type={resource.type}
                isPremium={resource.isPremium}
                downloadUrl={resource.downloadUrl}
                fileSize={resource.fileSize}
                fileType={resource.fileType}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projectFiles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.projectFiles.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                type={resource.type}
                isPremium={resource.isPremium}
                downloadUrl={resource.downloadUrl}
                fileSize={resource.fileSize}
                fileType={resource.fileType}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="bg-lavender/30 dark:bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="mr-2 h-5 w-5 text-primary" /> Premium Resources
          </CardTitle>
          <CardDescription>
            Upgrade to our Premium plan to access all resources, including advanced cheat sheets, exercises, and project
            files.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/pricing">
              <Button className="bg-primary hover:bg-primary/90">Upgrade to Premium</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline">Explore Free Resources</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
