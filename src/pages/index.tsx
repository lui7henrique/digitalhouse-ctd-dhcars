import { Button } from "components/Button"

const Home = () => {
  return (
    <>
      <Button
        size="sm"
        color="#dc1637"
        label="Botão pequeno"
        onClick={() => alert("botão pequeno")}
      />
      <Button
        size="md"
        color="#dc1637"
        label="Botão médio"
        onClick={() => alert("botão médio")}
      />
      <Button
        size="lg"
        color="#dc1637"
        label="Botão grande"
        onClick={() => alert("botão grande")}
      />
    </>
  )
}

export default Home
