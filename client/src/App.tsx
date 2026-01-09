import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/components/LocaleProvider";
import NotFound from "@/pages/not-found";

// Components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Embroidery from "@/pages/Embroidery";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          {/* Root Redirect to /es (handled in LocaleProvider mainly, but backup here) */}
          <Route path="/">
            <Redirect to="/es" />
          </Route>

          {/* Localized Routes */}
          <Route path="/:locale" component={Home} />
          <Route path="/:locale/projects" component={Projects} />
          <Route path="/:locale/projects/:slug" component={ProjectDetail} />
          <Route path="/:locale/about" component={About} />
          <Route path="/:locale/contact" component={Contact} />
          <Route path="/:locale/embroidery" component={Embroidery} />

          {/* Catch-all 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LocaleProvider>
            <Toaster />
            <Router />
          </LocaleProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
