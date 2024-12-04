import { title } from "@/components/primitives";
import ContactForm from "@/components/contact";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>
      <ContactForm />
    </div>
  );
}
