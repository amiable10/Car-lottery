// import SingleCompetition from "./Testimonial";
import winner1 from "../images/winner 1.png";
import winner2 from "../images/winner 2.png";
import winner3 from "../images/winner 3.png";
import winner4 from "../images/winner 4.png";
import { Bounce, Slide } from "react-awesome-reveal";
import SingleWinner from "./SingleWinner";


const Winners = () => {
    return ( 

      <section className="w-full flex justify-center items-center pt-10 pb-20 Winners">
        <div className="w-[90%] space-y-8">

            <Slide>
              <h2 className="font-bold text-2xl">Latest Winner</h2>
            </Slide>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              <Bounce cascade>
                {
                    winners.map((winner, index)=> (
                       <SingleWinner 
                       img={winner.img} 
                       name={winner.name} 
                       date={winner.date} 
                       key={index}
                       /> 
                    ))
                }
              </Bounce>
            </div>
        </div>

      </section> 
    );
};
 
export default Winners;

const winners = [
    {
        "img": winner1,
        name: "Ferrari 458",
        date: "12 November 2020"
    },

    {
        "img": winner2,
        name: "Aquila Gullwing",
        date: "9 November 2020"
    },

    {
        "img": winner3,
        name: "2020 Audi S5 Coupe",
        date: "5 November 2020"
    },

    {
        "img": winner4,
        name: "Ferrari Purosangue SUV",
        date: "25 November 2020"
    },
]



