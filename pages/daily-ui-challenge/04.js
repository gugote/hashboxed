import Logo from '../../components/logo';
import SwitchBox from '../../components/switchbox';
import Footer from '../../components/footer';

// IMAGES
import Image from "next/image";
import challenge from "../../public/images/daily-ui-challenge/04-calculator-app.jpg";

export default function DUI04() {
	return(
		<div className='content daily-ui-challenge'>
			<section className='container'>
				<Logo></Logo>
				<SwitchBox></SwitchBox>
				<h1 className='hero'>Daily UI Challenge</h1>
				<h2 className='title'>Prompt #4: Design a calculator. Standard, scientific, or specialty calculator for something such as a mortgage? Is it for a phone, a tablet, a web app? </h2>
				<h3>Solution: Designed an app that allows you enter a value and a percentage value and you get the percentage (of) the first value or the discount/rest (off) of the first value.</h3>
			</section>
			<div className='case-study-display'>
				<Image 
					src={challenge}
					alt="#04 - Calculator App"
					width={417}
					height={788}
				/>
			</div>
			<Footer></Footer>
		</div>
	)
}