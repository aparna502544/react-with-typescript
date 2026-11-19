import { useParams } from "react-router-dom"


const ProductDtails = () => {
    const {id} = useParams<{id : string}>();

  return (
    <>
    <div>
        <h1>PRODUCT DETAILS</h1>
        <h2>PRODUCT ID : {id}</h2>
    </div>
    </>
  )
}

export default ProductDtails