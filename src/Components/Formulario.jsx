import styled from "@emotion/styled"

const InputSubmit = styled.input`
    background-color:#9497FF;
    border:none;
    width:100%;
    padding:10px;
    color: #fff;
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    border-radius:5px;
    
    transition:background-color .3s ease;

    &:hover{
        background-color:#7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {
  return (
    <form>
        <InputSubmit 
            type="subtmit" 
            value={'Cotizar'}
        />
    </form>
  )
}

export default Formulario
