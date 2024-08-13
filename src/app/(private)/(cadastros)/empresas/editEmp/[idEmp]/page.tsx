import { Empresa } from '@/@classes'

const EditEmp = async ({ params }: { params: { idEmp: string } }) => {
  const empresas = (await new Empresa().getAll()).body
  return (
    <>
      <h1>{params.idEmp}</h1>
      <p>{JSON.stringify(empresas)}</p>
    </>
  )
}
export default EditEmp
