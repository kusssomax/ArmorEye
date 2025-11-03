import type {Variants} from "motion";

export const titleVariants: Variants = {
    "initial": {
        opacity: 0,
        y: "-40px"
    },
    "animate": {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeIn"
        }
    }
}

export const buttonVariants: Variants = {
    "initial": {
        opacity: 0,
    },
    "animate": {
        opacity: 1,
        transition: {
            duration: 2,
            ease: "easeIn"
        }
    }
}