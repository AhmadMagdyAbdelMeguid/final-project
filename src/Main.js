import photo1 from './imgs/greek salad.jpg'
import photo2 from './imgs/bruchetta.svg'
import photo3 from './imgs/lemon dessert.jpg'
import { ClassNames } from '@emotion/react'

export default function Main(){
    return (
    <main>
           <div className='title'>
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
            </div>
            <div className='dishes'>
                <div className='card'>
                   <img src={photo1} id='dish-image'/>
                   <div className='details'>
                     <h2>Greek Salad</h2>
                     <h3>$ 12.99</h3>
                  </div>
                   <article>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.   </article>
                   <>
                     
                   </>
                </div>
                <div className='card'>
                   <img src={photo2}  id='dish-image'/>
                   <div className='details'>
                     <h2>Brunchetta</h2>
                     <h3>        $ 5.99</h3>
                  </div>
                   <article>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </article>
                   <>
                     
                   </>
                </div>
                <div className='card'>
                   <img src={photo3} id='dish-image'/>
                   <div className='details'>
                     <h2>Lemon Dessert</h2>
                     <h3>$ 5.00</h3>
                  </div>
                   <article>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</article>
                   <>
                     
                   </>
                </div>
            </div>
          
    </main>
    )
}