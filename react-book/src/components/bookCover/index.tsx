import React from "react";

import styles from "./index.module.scss";
import { Image } from "@/base";

export interface BookCoverProps {
    src: string;
    alt: string;
    style?: React.CSSProperties & Partial<Record<'--width' | '--height' | '--border-radius', string>>;

}

const BookCover: React.FC<BookCoverProps> = props => {
    return (
        <div className={styles.bookCover}>
            {/* <img src={props.src} alt={props.alt} className={styles.coverImg} /> */}
            <Image lazy={true} src={props.src} alt={props.alt} className={styles.coverImg} style={props.style}/>
        </div>
    )
}

export default BookCover;