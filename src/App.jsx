import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import UserCard from './components/user-card'
import UserLogIn from './components/user-log-in'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Content/>} />
      <Route path="/articles" element={<Content/>} />
      <Route path="articles/topic/:topic" element={<Content/>} />
      <Route path="articles/:article_id" element={<Content/>} />
      <Route path="/users" element={<UserCard/>} />
      <Route path="/log-in" element={<UserLogIn/>} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
