import { lazy, Suspense } from "react";
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import { Spinner } from "./components";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "../Layout";
import RequireAuth from "./pages/RequireAuth";
const JokesTable = lazy(() => import("./pages/JokesTable"));
const Login = lazy(() => import("./pages/Login"));
const EditForm = lazy(() => import("./pages/EditForm"));

export const App = () => {

  return (
    <>
      <ScrollToTop style={{ backgroundColor: "#4d7e3e", zIndex: 7 }} smooth color="#eeeee4" />

      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* everything between navbar and footer */}
          <Route path="/" element={<Layout />}>
            {/* access only to authoenticated users */}
            <Route element={<RequireAuth />} >
              <Route index element={<JokesTable />} />
              <Route path="/edit" element={<EditForm />} />
            </Route>

          </Route>

          {/* outside navbar and footer */}
          <Route path="login" element={<Login />} />
          {/* cath all lost directories and redirect to root */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

