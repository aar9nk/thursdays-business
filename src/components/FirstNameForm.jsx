import Button from "./Button"

export default function FirstNameForm({placeholder, ...rest}) {
  return(
    <form>
      <input placeholder={placeholder} />
      <Button type="submit" {...rest} >Ok</Button>
    </form>
  )
}