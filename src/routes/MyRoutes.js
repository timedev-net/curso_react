
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/Main";
import VagasAbertas from "../pages/VagasAbertas";
import Home from "../pages/Home";
import Profissionais from "../pages/Profissionais";
import ProcessoSeletivo from "../pages/ProcessoSeletivo";
import Contadores from "../pages/Contadores";
import Login from "../pages/Login";
import Minimum from "../layout/Minimum";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from '../store/slices/userSlice'

export default () => {
  const dispatch = useDispatch();
  const rd_user = useSelector(state => state.user);

  useEffect(() => {
    console.log(rd_user)
  }, [rd_user])

  useEffect(() => {
    const user = sessionStorage.getItem('user')
    if (user) dispatch(login("Admin"))
  }, [])


  return rd_user.isLogged ? (
    <Routes>
      <Route element={<MainLayout Page={Home} />} path="/" />
      <Route element={<MainLayout Page={Profissionais} />} path="/profissionais" />
      <Route element={<MainLayout Page={VagasAbertas} />} path="/vagas_abertas" />
      <Route element={<MainLayout Page={ProcessoSeletivo} />} path="/processo_seletivo" />
      <Route element={<MainLayout Page={Contadores} />} path="/contadores" />
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  ) : (
    <Routes>
    <Route element={<Minimum Page={Login} />} path="/login" />
    <Route path="*" element={<Navigate to="/login" replace />}/>
  </Routes>
  )
}