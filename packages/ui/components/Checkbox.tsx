import { BsSquare, BsCheckSquareFill } from "react-icons/bs";

type Props = {
  checked: boolean
  onClick: () => Promise<any>
}

export const Checkbox = ({ checked, onClick }: Props) => {
  //@ts-ignore
  return checked === "true" ? (
    <BsCheckSquareFill color="blue" onClick={onClick} />
  ) : (
    <BsSquare color="blue" onClick={onClick} />
  )
};
