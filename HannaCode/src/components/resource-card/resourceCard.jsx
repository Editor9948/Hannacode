import { Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import {Link} from "react-router-dom"
import { Badge } from "../ui/badge"



export default function ResourceCard({
  title,
  description,
  type,
  isPremium,
  downloadUrl = "#",
  fileSize = "1.2 MB",
  fileType = "PDF",
}) {
  // Function to get icon based on file type
  const getFileTypeIcon = () => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-text"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
          </svg>
        )
      case "zip":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-folder-archive"
          >
            <path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2Z" />
            <circle cx="12" cy="13" r="2" />
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        )
    }
  }

  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="text-primary">{getFileTypeIcon()}</div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex justify-between items-center text-sm">
          <Badge variant="outline">{type}</Badge>
          <span className="text-muted-foreground">{fileSize}</span>
        </div>
      </CardContent>
      <CardFooter>
        {isPremium ? (
          <div className="w-full">
            <Button variant="outline" className="w-full" disabled>
              <Lock className="mr-2 h-4 w-4" /> Premium Content
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              <Link to="/pricing" className="text-primary hover:underline">
                Upgrade to Premium
              </Link>{" "}
              to access this resource
            </p>
          </div>
        ) : (
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link to={downloadUrl}>Download {fileType}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
