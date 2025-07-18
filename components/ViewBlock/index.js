import style from './page.module.css';
import Image from 'next/image';

function ViewBlock(obj){
    return (
        <div className={style.block}>
            <Image src={obj.img} alt='view'/>
            <p>{obj.date}</p>
            <h5>#обзор</h5>
            <h1>{obj.title}</h1>
            <h6>Подробнее</h6>
        </div>
    )
}
export default ViewBlock;