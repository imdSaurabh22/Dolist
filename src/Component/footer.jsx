export default function Footer(){
    const curr= new Date().getFullYear();
    return(
        <footer>
            <p>Copyright  ⓒ {curr}</p>
        </footer>
    );
}