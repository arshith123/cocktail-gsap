import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants"
import gsap from "gsap";


const CockTail = () => {
    useGSAP(()=>{
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger:'#cocktails',
                start:'top 30%',
                end: 'bottom 80%',
                scrub:true,
            }
        })

        parallaxTimeLine.from('#c-left-leaf',{
            x: -100, y: 100
        })
        .from('#c-right-leaf',{
            x:100,y:100
        })
    },[])


    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular Cock tails</h2>
                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => {
                            return (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                 <div className="loved">
                    <h2>Most popular Cock tails</h2>
                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => {
                            return (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default CockTail