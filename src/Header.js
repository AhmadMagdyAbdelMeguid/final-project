import photo from "./imgs/restauranfood.jpg"


export default function Header(){
    return (
        <header className="header">
            <section className="LL">
                <>
                    <h1>Little Lemon</h1>
                </>
                <>
                    <h2>Chicago</h2>
                    <p>we are a family owned Mediterranean restaurants focused on traditional recipes served with modern twist</p>
                    <button>Reserve a table</button>
                </>
            
            </section>
            <section>
                <img src = {photo} id="photo"></img>
            </section>
        </header>
    )
}