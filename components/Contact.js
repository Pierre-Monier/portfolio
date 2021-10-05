import {
  Tile,
  TextInput,
  TextArea,
  Button,
  Modal,
  Link,
} from "carbon-components-react";
import { useCallback, useMemo, useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isError, setIsError] = useState(false);

  const btnText = useMemo(
    () => (isSubmiting ? "..." : "Submit"),
    [isSubmiting]
  );

  const modalText = useMemo(
    () =>
      isError
        ? "There is an issue when sending the email, please report it on GitHub"
        : "Your email have been send",
    [isError]
  );

  const sendEmail = useCallback(() => {
    setIsSubmiting(true);
    setTimeout(() => {
      setIsSubmiting(false);
      setIsOpen(true);
    }, 1000);
  }, [setIsSubmiting, setIsOpen]);

  return (
    <>
      <Modal
        open={isOpen}
        onRequestClose={() => setIsOpen(false)}
        passiveModal
        modalHeading={modalText}
      >
        {isError ? <Link href="https://github.com">Toto</Link> : null}
      </Modal>

      <Tile className="content">
        <div className="content-items justify-content-start">
          <div className="content-item contact-item contact-item-full">
            <p>You can contact me on ... or on ...</p>
          </div>
          <div className="content-item contact-item contact-item-full">
            <p>You can also send me an email with this form</p>
          </div>
          <div className="content-item contact-item contact-item-semi">
            <TextInput placeholder="Email" />
          </div>
          <div className="content-item contact-item contact-item-semi">
            <TextInput placeholder="Subject" />
          </div>
          <div className="content-item contact-item contact-item-full">
            <TextArea placeholder={`Hi Pierre \n ...`} />
          </div>
          <div className="content-item contact-item contact-item-full">
            <Button onClick={() => sendEmail()}>{btnText}</Button>
          </div>
        </div>
      </Tile>
    </>
  );
};

export default Contact;
