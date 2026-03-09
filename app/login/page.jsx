'use client';
// / -> Root URL page component
// /login -> Login page component

export default function LoginPage() {
    const showAlert = () => {
        alert("로그인 페이지입니다.");
    }

    return <div>
        Login Page
        <button onClick={showAlert}>로그인</button>
        </div>
}