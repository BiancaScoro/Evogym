import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg"

const benefits: Array<BenefitType> = [{
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Maecenas luctus odio et eros ultricies pretium. Vestibulum erat tellus, tincidunt ac aliquet eget, ultricies vel dui."
    }, {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Maecenas luctus odio et eros ultricies pretium. Vestibulum erat tellus, tincidunt ac aliquet eget, ultricies vel dui."
    }, {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Maecenas luctus odio et eros ultricies pretium. Vestibulum erat tellus, tincidunt ac aliquet eget, ultricies vel dui."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
} 

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
  <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
    <motion.div 
     onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
     >
        {/*Header*/}
    <motion.div 
        className="md:w-3/5 md:my-5 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 } 
        }}
    >
        <HText>MORE THAN JUST A GYM.</HText>
        <p className="my-5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum felis eu erat tristique congue.
        In aliquam quam sed malesuada egestas. Phasellus dignissim eleifend lorem non porttitor.
        </p>
    </motion.div>
    {/* Benefits */}
    <motion.div 
      className="mt-5 items-center justify-between gap-8 md:flex"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
            <Benefit
             key={benefit.title}
             icon={benefit.icon}
             title={benefit.title}
             description={benefit.description}
             setSelectedPage={setSelectedPage}
         />
       ))}
    </motion.div>

    {/*Graphics and Description */}
    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/*Graphic*/}
        <div className="flex-basis:17">
        <img 
        className="mx-auto"
        alt="benefits-page-graphic"
        src={BenefitsPageGraphic}
        />
        </div>
         {/*Description*/}
         <div>
              {/*Title*/}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.5}}
                    variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 } 
                    }}
                    >
                        <HText>
                            MILLIONS OF HAPPY MEMBERS{" "}
                            <span className="text-primary-500">FIT</span>
                        </HText>
                    </motion.div>
                </div>
              </div>
              {/*Desciption*/}
              <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ delay: 0.2, duration: 0.5}}
              variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 } 
              }}              
              >
                <p className="my-5">
                 Maecenas faucibus turpis vitae dui mollis, ac ultrices metus rhoncus.
                 Mauris sit amet lorem maximus, condimentum nunc et, blandit quam. Integer quis mattis metus.
                 Morbi facilisis pharetra nisl tristique aliquam. Curabitur semper lectus consequat, ornare tellus placerat, fringilla libero.
                 Maecenas ullamcorper venenatis nisl, sollicitudin fringilla ante tempus finibus. Nunc felis mauris, volutpat et rutrum et, lobortis non sapien. 
                 Integer sagittis neque rutrum ornare facilisis.
                 </p>
                <p className="mb-5">Donec tincidunt imperdiet nisi, vel porta turpis porta pharetra. Donec et maximus nisl. Nullam eu luctus sem, in ullamcorper purus. 
                   Phasellus commodo metus ac elit consequat, at imperdiet sapien tempor.
                </p>
              </motion.div>

             {/*Button*/}
             <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                </div>
             </div>
         </div>
    </div>
    </motion.div>
  </section>
  );
};

export default Benefits;