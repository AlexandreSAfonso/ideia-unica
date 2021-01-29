import  Link from 'next/link';
function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return(
        <div>
            <div> {dynamicDateString} (dinâmico)</div>
            <div> {props.staticDateString} (estático)</div>
            
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}
export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();
    return{
        props:{
            staticDateString
        }
    }
}
export default Tempo;

