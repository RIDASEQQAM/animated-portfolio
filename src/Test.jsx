
import { motion } from 'framer-motion';

const Test = () => {

    const variants = {

        visible:{
            opacity:1,
        },
        hidden: {
            opacity:0
        },
    }
    return (
        <div className="cource">
            <motion.div 
                className="box" 
               variants={variants}
               initial="hidden"
               animate="visible"
            />
        </div>
    );
};

export default Test;
