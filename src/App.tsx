import { useLayoutEffect, type ReactNode } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HomePage } from "@/pages/HomePage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { ProjectDetailPage } from "@/pages/ProjectDetailPage"
import { AboutPage } from "@/pages/AboutPage"

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useLayoutEffect(() => {
    const originalScrollBehavior = document.documentElement.style.scrollBehavior

    document.documentElement.style.scrollBehavior = "auto"
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    document.documentElement.style.scrollBehavior = originalScrollBehavior
  }, [pathname, search])

  return null
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
