import  Link from 'next/link';
function Tempo(props) {
    console.log('Passando pelo FrontEnd')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return(
        <div>
            <div> {dynamicDateString} (dinâmico)</div>
            <div> {props.staticDateString} (estático)</div>
            
            <div>
                <Link href="/">
                    Home
                </Link>
            </div>
        </div>
    )
}
export function getStaticProps(){
    console.log('Passando pelo getStaticProps')
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();
    return{
        props:{
            staticDateString
        },
        //revalidate: 5 //indica o tempo minimo para atualização dos dados estáticos
    }
}
export default Tempo;

