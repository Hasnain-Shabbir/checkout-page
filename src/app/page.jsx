'use client';
import React, { useState } from 'react';
import {
  Container,
  ExpressCheckout,
  Separator,
  DeliveryMethodSelector,
  PickupLocationSelector,
  OrderSummary,
  ShippingMethod,
  PaymentForm,
  RememberMe,
  OrderSummaryAccordion,
  AddressForm,
  ContactForm,
  TextMeOffers,
} from '@/components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const locations = [
  {
    id: 'first',
    name: 'Alphabet Cafe Montreal',
    address: '5765 Rue Clark, Alphabet Cafe, Montréal QC',
    price: 'Free',
    deliveryTime: 'Usually ready in 24 hours',
  },
  {
    id: 'second',
    name: 'Alphabet Cafe Montreal',
    address: '5765 Rue Clark, Alphabet Cafe, Montréal QC',
    price: 'Free',
    deliveryTime: 'Usually ready in 24 hours',
  },
];

const cartItems = [
  {
    id: 1,
    name: 'Enzo the Baker Espresso',
    description: '340 g / 12 oz. / Whole bean',
    price: 99.95,
    quantity: 1,
    image: '/wallet.jpg',
  },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('ship');
  const [isNewsEmailSelected, setIsNewsEmailSelected] = useState(true);
  const [isNewOffersChecked, setIsNewOffersChecked] = useState(false);
  const [data, setData] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  return (
    <main>
      <Header />
      <Separator />
      <OrderSummaryAccordion cartItems={cartItems} />
      <Container styles="px-0 lg:px-0" paddingVertical="px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(405px,405px)] lg:grid-rows-1 lg:gap-x-6">
          <section className="mt-4 lg:mt-8">
            <Container>
              <ExpressCheckout />
              <Separator styles="my-8" title="OR" />
              <ContactForm
                setContactEmail={setContactEmail}
                contactEmail={contactEmail}
                setIsChecked={setIsNewsEmailSelected}
                isChecked={isNewsEmailSelected}
              />
            </Container>
          </section>

          <section className="mt-4">
            <Container>
              <DeliveryMethodSelector
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
              {selectedOption === 'ship' ? (
                <div className="mt-8">
                  <AddressForm showCheckbox={true} />
                  <TextMeOffers
                    isChecked={isNewOffersChecked}
                    setIsChecked={setIsNewOffersChecked}
                  />
                  <ShippingMethod />
                  <Separator type="section" styles="mt-6" />
                </div>
              ) : (
                <>
                  <PickupLocationSelector locations={locations} />
                  <TextMeOffers
                    isChecked={isNewOffersChecked}
                    setIsChecked={setIsNewOffersChecked}
                  />
                </>
              )}
            </Container>
          </section>

          <section className="col-start-1">
            <Container>
              <PaymentForm selectedDeliveryMethod={selectedOption} />
              {selectedOption === 'delivery' ? (
                <AddressForm formTitle="Billing Address" formStyles="mb-6" />
              ) : (
                <></>
              )}
              <RememberMe />
              <button className="hidden w-full rounded-md bg-primary-300 px-4 py-4 text-xl font-medium text-white transition-all hover:bg-primary-400 lg:block">
                Pay now
              </button>
            </Container>
          </section>
          <section className="lg:sticky lg:top-0 lg:col-span-2 lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:h-screen lg:border-l lg:border-gray-300 lg:bg-c-gray-100 lg:after:absolute lg:after:left-full lg:after:top-0 lg:after:h-full lg:after:w-screen lg:after:bg-c-gray-100 lg:after:content-['']">
            <Container>
              <div className="pt-2 lg:pl-6 lg:pt-10">
                <OrderSummary title="Order Summary" cartItems={cartItems} />
                <button className="w-full rounded-md bg-primary-300 px-4 py-4 text-xl font-medium text-white transition-all hover:bg-primary-400 lg:hidden">
                  Pay now
                </button>
              </div>
            </Container>
          </section>

          <Separator styles="relative mt-10 translate-x-6 after:absolute after:right-1/2 after:h-px after:w-full after:bg-gray-300 md:before:absolute md:before:-right-full md:before:h-px md:before:w-full md:before:bg-gray-300 lg:before:hidden" />
          <Footer />
        </div>
      </Container>
    </main>
  );
}
