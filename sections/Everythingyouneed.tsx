import cube from "@/assets/cube-helix 1.png"
import helix from "@/assets/cube-helix 2.png"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

const Everythingyouneed = () => {
    return (
        <section className=" py-24 bg-white">
            <div className="container" >
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag"> Everything you need</div>
                    </div>
                    <h2 className="section-title mt-5">
                        Streamlined for easy management
                    </h2>
                    <p className="section-description mt-5">
                        Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
                    </p>
                </div>
                <div className="card">
                    <div className="flex flex-col" >
                        <Image src={helix} alt="cube"></Image>
                    </div>
                    <div>
                        <h3 className="section-title2">Integration ecosystem</h3>
                        <p className="section-description2">Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Everythingyouneed