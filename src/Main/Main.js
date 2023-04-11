import style from './Main.module.css';
const Main = () => {
    return (
        <>
            <div className={style.mainBox}>
                <h1 className={style.mainText}>Lorem ipsum dolor sit amet consectetur.</h1>
                <div className={style.firstLine}>
                    <button className={style.online}>
                        온라인 합주
                    </button>
                    <button className={style.offline}>
                        오프라인 합주
                    </button>
                </div>
                <div className={style.secondLine}>
                    <button className={style.musicSep}>
                        음원 분리
                    </button>
                    <button className={style.community}>
                        커뮤니티
                    </button>
                </div>
            </div>
        </>
    );
}

export default Main;