export default function CartItem({p, setCart}){

  const removeFromCart = (prodid)=>{
    setCart(prev => prev.map(item => item.prodid === prodid ? {...item, quanity: item.quanity - 1} : item)
    .filter(item => item.quanity > 0))
  }

return(
  <tr>
    <td className="title">{p.title}</td>
    <td className="price">{p.price}</td>
    <td className="quantity">{p.quanity}</td>
    <td className="delete"><button onClick={()=>removeFromCart(p.prodid)}>X</button></td>
  </tr>
)
}