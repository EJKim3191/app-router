import Link from "next/link";
import styles from "./AppNavigation.module.css";

function AppNavigation() {
    return (
        <div>
            <br />
            <a href="/">Home</a> / &nbsp;
            <a href="/login">Login</a>  
            <br />
            <Link href="/" className={styles.link}>Home</Link> / &nbsp;
            <Link href="/login" className={styles.link}>Login</Link>  
            <br />
            <br />
        </div>
    )
}

export default AppNavigation;

/* 
Next.js에서 언더바(_) 폴더를 private으로 쓰는 이점
(App Router 기준, 예: app/_components/…)

라우트에서 제외됨

_로 시작하는 폴더는 URL 경로로 인식되지 않아 직접 접속이 불가함 (404).
즉, 이 폴더 안의 파일이 페이지/라우트로 노출되지 않음.
구조 정리

app 아래에서 라우트 파일과 공용 컴포넌트/유틸을 명확히 분리할 수 있음.
예: app/_components/AppNavigation.jsx처럼, 라우트가 아닌 UI/로직을 같은 레벨에 공존시키면서도 URL에는 영향 X.
실수 방지

컴포넌트/헬퍼 파일이 실수로 페이지 라우트로 잡히는 것을 방지할 수 있어 유지보수에 유리함.
*/