import style from './TipList.module.css'
import searchImg from 'C:/tantara/tantara_frontend/src/TipList/searchImg.png'

const TipList = () => {
    return (
        <>
            <div className={style.nav}>
                <ul className={style.menu}>
                    <li>메인 </li>
                    <li>온라인 합주</li>
                    <li>파트너 구인</li>
                    <li>팁 게시판</li>
                    <li>음원 분리</li>
                </ul>
            </div>
            <div className={style.box1}>
                <h1>게시판</h1>
            </div>
            <div className={style.leftbox}>
                <button className={style.list}>좋아요순</button>
            </div>
            <div className={style.rightbox}>
                <input type="text" className={style.search} />
                <img className={style.searchImg} src={searchImg}/>
            </div>
        </>
    )


}

export default TipList;