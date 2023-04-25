import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$79,90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto amet aliquid dignissimos quasi voluptas in dolorem aliquam libero cum minima itaque nostrum laborum sapiente corrupti doloremque, quas recusandae iure exercitationem?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}