
 export default function ProductCard({p, setCart}){
    const handleClick = ()=>{

      setCart((prev) => 

        prev.some(item => item.prodid === p.prodid) ? 
        prev.map(item => item.prodid === p.prodid ? {...item, quanity: item.quanity + 1} 
        : item) : [...prev, {...p, quanity: 1}])
      console.log("Legg i handlekurv")
    }
    return(
      <article className="product-card">
        <img src={`website_images/PROD_${p.imagefile}`} alt={p.title} />
          <a href="#">{p.category}</a>
          <h3>{p.title}</h3>
          <p>Kr. {p.price},-</p>
          <button onClick={handleClick}>Legg til handlevogn</button>
      </article>
  )
}