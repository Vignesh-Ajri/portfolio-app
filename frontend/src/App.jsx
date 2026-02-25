import React, { lazy, Suspense, memo, useCallback } from "react";
// Replace BrowserRouter with HashRouter if needed.
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ErrorBoundary } from "react-error-boundary";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const ConnectInfo = lazy(() => import("./components/ContactInfo"));

// Loading skeleton
const LoadingSkeleton = memo(({ height = "400px" }) => (
  <div
    className="animate-pulse bg-gray-200 rounded-lg mx-4 my-8"
    style={{ height }}
  >
    <div className="flex items-center justify-center h-full">
      <div className="text-gray-400">Loading...</div>
    </div>
  </div>
));

// Error fallback
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="py-10 text-center text-red-500">
    <h3>Something went wrong</h3>
    <button
      onClick={resetErrorBoundary}
      className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
    >
      Try again
    </button>
  </div>
);

// LazySection
const LazySection = memo(({ children, id, fallbackHeight = "400px" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "100px",
  });

  const handleError = useCallback((error) => {
    console.error("Section loading error:", error);
  }, []);

  return (
    <div ref={ref} id={id}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={handleError}
        resetOnPropsChange={[inView]}
      >
        <Suspense fallback={<LoadingSkeleton height={fallbackHeight} />}>
          {inView ? children : <div style={{ height: fallbackHeight }} />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
});

function App() {
  return (
    <div className="overflow-x-hidden bg-purple-50 dark:bg-black">
      <Router basename="/portfolio-app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LazySection id="about" fallbackHeight="300px">
                  <About />
                </LazySection>
                <LazySection id="education" fallbackHeight="400px">
                  <Education />
                </LazySection>
                <LazySection id="skills" fallbackHeight="350px">
                  <Skills />
                </LazySection>
                <LazySection id="contact-info" fallbackHeight="350px">
                  <ConnectInfo />
                </LazySection>
              </>
            }
          />
          <Route path="/all-projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default memo(App);
