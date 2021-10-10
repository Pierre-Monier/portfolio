import {
  Tile,
  TextInput,
  TextArea,
  Button,
  Modal,
  Link,
} from "carbon-components-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState({ isValid: true, value: "" });
  const [subject, setSubject] = useState({ isValid: true, value: "" });
  const [body, setBody] = useState({ isValid: true, value: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmailSendable, setIsEmailSendable] = useState(false);

  useEffect(() => {
    setIsEmailSendable(Boolean(email.value && subject.value && body.value));
  }, [email, subject, body]);

  const updateField = useCallback((newValue, setter) => {
    if (newValue === "") {
      setter({ isValid: false, value: newValue });
    } else {
      setter({ isValid: true, value: newValue });
    }
  }, []);

  const sendEmail = useCallback(async () => {
    setIsSubmiting(true);

    try {
      const res = await fetch(
        "https://europe-west3-portfolio-328219.cloudfunctions.net/email-delivery",
        {
          method: "POST",
          body: JSON.stringify({
            Email: email.value,
            Subject: subject.value,
            Body: body.value,
          }),
        }
      );

      if (res.status !== 201) {
        const errorMessage = await res.text();
        throw Error(errorMessage);
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
    }

    setIsOpen(true);
    setIsSubmiting(false);
  }, [setIsSubmiting, setIsOpen, setIsError, email, subject, body]);

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
              onChange={(e) => updateField(e.currentTarget.value, setEmail)}
              invalid={!email.isValid}
              placeholder="Email"
              hideLabel
              labelText="Email"
              id="email"
            />
          </div>
          <div className="content-item contact-item contact-item-semi">
            <TextInput
              onChange={(e) => updateField(e.currentTarget.value, setSubject)}
              invalid={!subject.isValid}
              placeholder="Subject"
              hideLabel
              labelText="Subject"
              id="subject"
            />
          </div>
          <div className="content-item contact-item contact-item-full">
            <TextArea
              onChange={(e) => updateField(e.currentTarget.value, setBody)}
              invalid={!body.isValid}
              placeholder={`Hi Pierre \n ...`}
              hideLabel
              labelText="Message"
              id="emailBody"
            />
          </div>
          <div className="content-item contact-item contact-item-full">
            <Button
              className={isEmailSendable ? "" : "disable"}
              onClick={() => {
                if (isEmailSendable) {
                  sendEmail();
                } else {
                  updateField(email.value, setEmail),
                    updateField(subject.value, setSubject),
                    updateField(body.value, setBody);
                }
              }}
            >
              {btnText}
            </Button>
          </div>
        </div>
      </Tile>
    </>
  );
};

export default Contact;
