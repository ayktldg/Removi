import { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Register.module.css";
import { v4 as uuidv4 } from "uuid";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import layout from "../../style/Layout.module.css";
import form from "../../style/Form.module.css";

const Register = () => {
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    addUser({ id, email, userName, password });
    navigate("/login");
  };
  return (
    <div>
      <Navbar />
      <div className={form.page}>
        <div className={`${form.formWrapper} ${layout.container}`}>
          <h2 className={styles.title}>Register for millions of movies.</h2>
          <form onSubmit={handleSubmit} className={form.form}>
            <div className={form.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={form.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className={form.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={form.formGroup}>
              <input className={form.btn} type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
