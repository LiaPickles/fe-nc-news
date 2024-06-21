import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import UserCard from "./components/user-card";
import UserLogIn from "./components/user-log-in";
import Topics from "./components/topics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./user-context";

function App() {
  const [user, setUser] = useState("grumpy19");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/articles" element={<Content />} />
            <Route path="articles/topic/:topic" element={<Content />} />
            <Route path="articles/:article_id" element={<Content />} />
            <Route path="/users" element={<UserCard />} />
            <Route path="/log-in" element={<UserLogIn />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
