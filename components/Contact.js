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
  const [email, setEmail] = useState({ isValid: true, value: "" });
  const [subject, setSubject] = useState({ isValid: true, value: "" });
  const [emailBody, setEmailBody] = useState({ isValid: true, value: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isError, setIsError] = useState(false);

  const fieldChange = useCallback(
    (newValue, setter) => {
      if (newValue === "") {
        setter({ isValid: false, value: newValue });
      } else {
        setter({ isValid: true, value: newValue });
      }
    },
    [setEmail]
  );

  const sendEmail = useCallback(() => {
    setIsSubmiting(true);
    setTimeout(() => {
      console.log(email, subject, emailBody);
      setIsSubmiting(false);
      setIsOpen(true);
    }, 1000);
  }, [setIsSubmiting, setIsOpen, email, subject, emailBody]);

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
            <TextInput
              onChange={(e) => fieldChange(e.currentTarget.value, setEmail)}
              invalid={!email.isValid}
              placeholder="Email"
              hideLabel
              labelText="Email"
              id="email"
            />
          </div>
          <div className="content-item contact-item contact-item-semi">
            <TextInput
              onChange={(e) => fieldChange(e.currentTarget.value, setSubject)}
              invalid={!subject.isValid}
              placeholder="Subject"
              hideLabel
              labelText="Subject"
              id="subject"
            />
          </div>
          <div className="content-item contact-item contact-item-full">
            <TextArea
              onChange={(e) => fieldChange(e.currentTarget.value, setEmailBody)}
              invalid={!emailBody.isValid}
              placeholder={`Hi Pierre \n ...`}
              hideLabel
              labelText="Message"
              id="emailBody"
            />
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
