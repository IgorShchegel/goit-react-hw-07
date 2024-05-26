import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
  return (
     <p className={css.textError}>
      ❌ Sorry, something went wrong! Please try reloading this page!
    </p>
  )
}
