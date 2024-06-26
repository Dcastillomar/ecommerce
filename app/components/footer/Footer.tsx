import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-wrap justify-between pt-16 pb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <FooterList>
              <h3 className="text-base font-bold mb-2">Shop Categories</h3>
              <Link href="#">Cats</Link>
              <Link href="#">Dogs</Link>
              <Link href="#">Reptiles</Link>
              <Link href="#">Farm</Link>
            </FooterList>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <FooterList>
              <h3 className="text-base font-bold mb-2">Customer Service</h3>
              <Link href="#">Contact Us</Link>
              <Link href="#">Shipping Policy</Link>
              <Link href="#">Returns & Exchanges</Link>
              <Link href="#">FAQs</Link>
            </FooterList>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">Description of Site</p>
          </div>
          <FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-base font-bold mb-2">Follow Us</h3>
          <div className="flex gap-2">
          <Link href="#"><MdFacebook size={24}/></Link>
          <Link href="#"><AiFillTwitterCircle size={24}/></Link>
          <Link href="#"><AiFillInstagram size={24}/></Link>
          <Link href="#"><AiFillYoutube size={24}/></Link>
</div>
          </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

