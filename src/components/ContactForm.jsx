import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Checkbox, Separator, LabelInput } from '.';

const ContactForm = ({
  setIsChecked,
  isChecked,
  setContactEmail,
  contactEmail,
}) => {
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Contact</h2>
      <LabelInput
        label="Email"
        onChange={setContactEmail}
        value={contactEmail}
        id="contactEmail"
        type="email"
        placeholder="Email"
        iconInput
        icon={<MdEmail className="text-gray-400" size={20} />}
        errorMessage="Enter a valid email address"
      />
      <Checkbox
        styles="mt-4"
        title="Email me with news and offers"
        setIsChecked={setIsChecked}
        isChecked={isChecked}
      />
      <Separator type="section" styles="mt-6" />
    </div>
  );
};

export default ContactForm;
