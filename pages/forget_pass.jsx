import styles from "../styles/ForgetPass.module.css";

const ForgetPass = () => {
    return(
        <div className={styles.body}>
          <div className={styles.signin_form}>
              <h1>Resetare parola</h1>
              <form>
                 <span>Ai uitat parola? Te rog introdu adresa de email. Vei primi o legătură prin email pentru a crea o parolă nouă.</span>
                 <br></br>
                 <br></br>
                 <input type="email" className={styles.input_box} required placeholder="Adresa de e-mail"/>
                 <br></br>
                 <br></br>
                 <button type="button" className={styles.signup_button}>RESETARE PAROLA</button>
              </form>
          </div>
        </div>
    )
}

export default ForgetPass;