import { SelectedPage, classType } from '@/shared/types';
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<classType> = [
    {
        name: "Weight Training Classes",
        description: "Praesent sit amet congue nibh. Donec at euismod felis, vitae mattis ex. Curabitur tempus dui at tempus consequat. Vestibulum ultrices finibus finibus.",
        image: image1,
    },
    {
        name: "Dumbell Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Praesent sit amet congue nibh. Donec at euismod felis, vitae mattis ex. Curabitur tempus dui at tempus consequat. Vestibulum ultrices finibus finibus.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Praesent sit amet congue nibh. Donec at euismod felis, vitae mattis ex. Curabitur tempus dui at tempus consequat. Vestibulum ultrices finibus finibus.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Praesent sit amet congue nibh. Donec at euismod felis, vitae mattis ex. Curabitur tempus dui at tempus consequat. Vestibulum ultrices finibus finibus.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100 py-40">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
    <motion.div
    className="mx-auto w-5/6"
    initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5}}
       transition={{ duration: 0.5}}
       variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 } 
       }}
    >
    <div className="md:w-3/5">
        <HText>Our Classes</HText>
        <p className="py-5">Morbi lectus elit, finibus eu aliquam at, porttitor ac ligula. Mauris aliquam, lacus a vestibulum pulvinar, magna dui ornare ipsum, quis convallis metus nisi et lectus.</p>
    </div>
    </motion.div>
    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
       <ul className="w-[2800px] whitespace-nowrap">
        {classes.map((item: classType, index) => (
            <Class
            key={`${item.name}-${index}`} 
            name={item.name}
            description={item.description}
            image={item.image}
            />
        ))}
       </ul>
    </div>
    </motion.div>
  </section>
}

export default OurClasses