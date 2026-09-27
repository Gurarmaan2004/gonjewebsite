import type { PageIntro } from "./types";

/**
 * Terms and Conditions, copied from the live gonje.com/terms page (fetched
 * 2026-09-28) at the user's request. This is legal copy, not marketing copy —
 * transcribed as closely to verbatim as the source allows, not rewritten or
 * corrected. See the note at the bottom of this file for source issues found
 * during transcription that are worth fixing at the source.
 */
export const intro: PageIntro = {
  eyebrow: "Legal",
  title: "Terms and Conditions",
  lead: "Welcome to Gonje Marketplace! We highly recommend that you carefully review these terms and conditions, as they hold significant importance. Below, we've highlighted specific terms that we want to draw your attention to:",
};

export const highlights: readonly string[] = [
  "We reserve the right to suspend the availability of the Gonje App without prior notice. However, in the event of such suspension, any Orders you've placed won't be affected unless the relevant products become unavailable or circumstances beyond our control prevent us or our partners from supplying those products. (Refer to clause 1.6(d) for more details).",
  "Please note that we retain the right to cancel your Order under certain circumstances, and we may reject an Order for any reason. In the event of an Order rejection, we will strive to notify you promptly. (Consult clauses 1.9, 2.5, 3.1, and 3.5 for further details).",
  "Gonje Marketplace is not accountable for the delivery of your Order, and we hold no liability for any external websites accessible via the Gonje App. (See clauses 1.7 and 3.3(a) for additional information).",
  "Should you request delivery of your Order within a premises or building, and we agree to fulfill your request, please be aware that any loss or damage occurring beyond the front door of the Delivery Address is your responsibility. (Find more details in clause 3.3(g)).",
  "While we acknowledge your consumer law rights, Gonje cannot be held liable for any indirect or consequential loss, except in cases where such loss results from our negligence or wilful misconduct. Our liability to you, as outlined in these terms, will be moderated based on the extent of your contribution to the loss or damage. (Refer to clause 4 for comprehensive details).",
  "We shall not be held liable for any damage to products delivered by us or our delivery Partners from the date and time of delivery, including unattended deliveries at the Delivery Address. (Read clause 3.4 for more insight).",
  "Gonje Marketplace has its own returns policy governing products purchased via the App. (See clause 3.7 for specific guidelines). Please be aware that these terms and conditions may undergo changes at any time. However, the terms and conditions in effect at the time of Order acceptance will be applicable. (See clause 4.3 for more information).",
];

export const highlightsClosing =
  "Kindly continue reading for a deeper understanding of our terms and conditions.";

export type TermsSubsection = {
  heading: string;
  paragraphs: readonly string[];
};

export type TermsSection = {
  heading: string;
  subsections: readonly TermsSubsection[];
};

export const sections: readonly TermsSection[] = [
  {
    heading: "1. App Usage Terms",
    subsections: [
      {
        heading: "1.1 Introduction",
        paragraphs: [
          "Thank you for engaging with us at Gonje Marketplace. We kindly ask you to carefully review and understand these terms and conditions before you start using the Gonje mobile application (the App) and/or access www.gonje.com (the Site).",
          "Throughout these terms and conditions, references to “you” or “your” pertain to our valued customers.",
          "The App is operated by Gonje Pty Limited (ABN 46 649 251 007) (Gonje, us, or we).",
          "Regarding Orders, Gonje functions as an agent on behalf of Onje Group Limited.",
        ],
      },
      {
        heading: "1.2 Acceptance of the Terms and Conditions",
        paragraphs: [
          "Upon accessing and using the App, including placing Orders through it, you agree to be bound by and adhere to these terms and conditions.",
        ],
      },
      {
        heading: "1.3 Registration and Account Usage",
        paragraphs: [
          "Before initiating an Order through the App, please complete the customer registration process via the App.",
          "You are allowed only one active account, and it is non-transferable. Any updates or modifications to your account can be made at any time via the App.",
          "The security of your login details is your responsibility (please note that Gonje is not liable for unauthorized access to your account).",
          "Kindly refrain from using the App while driving. Comply with road rules and avoid using the App or your mobile device in violation of these rules. It is important to note that using a mobile phone while driving, when it's held in your hand, is considered an offense.",
        ],
      },
      {
        heading: "1.4 Responsibilities and Obligations",
        paragraphs: [
          "A) Your Responsibilities:",
          "Safeguard your LoginID and one-time password used for App access, along with your account information, in a secure manner.",
          "In case of unauthorized account use or any security breach, promptly notify us via our Customer Service Centre at 1800 749 277 during Contact Hours.",
          "Inform us promptly of any changes to the information provided during the customer registration process.",
          "Be accountable for all costs linked to your App access or usage, including Internet access or data fees.",
          "You hold responsibility for any individual using your LoginID and password to place an Order through the App.",
          "Consent to us charging you for all Products supplied via the App using your LoginID and password.",
          "Always inspect the labels on Products before using or consuming them.",
          "B) Your Prohibited Actions:",
          "Do not use the App for activities that breach laws, infringe on third-party rights, or contradict relevant standards or codes.",
          "Avoid using the App in a manner that disrupts other users' experience, defames, harasses, threatens, or offends any individual, or obstructs others from using or enjoying the App.",
          "Do not engage in fraudulent or speculative activities, purchases, or requests via the App.",
          "Do not use someone else's details without permission or impersonate another person while using the App.",
          "Refrain from posting or transmitting offensive, indecent, inflammatory, pornographic, or other inappropriate content.",
          "Do not interfere with or obstruct the App's operation.",
          "Do not knowingly transmit malicious code like viruses, worms, trojan horses, or similar to the App.",
          "Do not use mechanisms like robots, spiders, or apps to retrieve or index portions of the App.",
          "Do not modify, adapt, translate, or reverse-engineer any part of the App.",
          "Do not remove copyright, trademark, or other proprietary rights notices from the App.",
          "Avoid creating accounts through automated means or using false or fraudulent pretenses.",
          "Do not use the App to violate the security of any computer, network, or engage in illegal activities.",
          "Refrain from actions that impose unreasonable loads on our infrastructure.",
          "Use the App in compliance with these terms and conditions.",
        ],
      },
      {
        heading: "1.5 Your Warranties",
        paragraphs: [
          "You assure us that:",
          "All information and data provided through the App, including during the customer registration process, is accurate, complete, up to date, and truthful.",
          "Any individual receiving Products at the Delivery Address or collecting them is authorized by you to do so.",
          "You are committed to adhering to all applicable laws related to App usage and placing Orders with us.",
        ],
      },
      {
        heading: "1.7 Links on the App",
        paragraphs: [
          "The Gonje App might include connections to external websites that are not under our or our affiliated entities' control. These links are offered solely for your convenience, and you acknowledge and agree that Gonje endeavors to ensure accuracy and makes best efforts to present reliable information from its suppliers, including product descriptions and other content on the App. However, Gonje does not warrant that such information is accurate, complete, reliable, current, or free of errors.",
        ],
      },
      {
        heading: "1.8 Accuracy of Information on the App",
        paragraphs: [
          "Gonje endeavors to ensure accuracy and makes best efforts to present reliable information from its suppliers, including product descriptions and other content on the App. However, Gonje does not warrant that such information is accurate, complete, reliable, current, or free of errors.",
        ],
      },
      {
        heading: "1.9 Safety and Refusal or Cancellation of Orders, Delivery, or Your Account",
        paragraphs: [
          "A) We are dedicated to safeguarding the well-being of our staff and delivery partner drivers. Consequently, we reserve the right to: refuse or cancel your Orders; limit or revoke access to your account and/or your capability to place Orders, including alterations to your account details or Delivery Address; refuse delivery to your Delivery Address or to any other address; and take any other necessary actions as we deem appropriate.",
          "We will exercise these rights when there is a reasonable suspicion of: verbal assault against our staff or delivery partner drivers (in-store, online, or otherwise); physical assault or attempted physical assault against our staff or delivery partner drivers; engagement in offensive, inappropriate, or threatening conduct; damage or attempted damage to our delivery vehicles; involvement in fraudulent or potentially criminal behavior; issuance of a banning notice for any physical store; or existence of hazards at the Delivery Address posing risk to our staff or delivery partner drivers, including unsecured pets or hazardous environments.",
          "B) In cases where we take any of the aforementioned actions, we will strive to notify you at the time of the Order, delivery, pick up, or within a reasonable period thereafter. However, you acknowledge that such notification, or the absence thereof, does not affect our rights outlined in this clause 1.9.",
        ],
      },
    ],
  },
  {
    heading: "2. Ordering and Purchasing Products on Gonje",
    subsections: [
      {
        heading: "2.1 Placing Orders for Products",
        paragraphs: [
          "Through the Gonje App, you have the convenience of ordering a wide range of products. Simply make your selections and submit your order, following the terms and conditions outlined here.",
          "Please note that the products you order are sold by the Gonje Vendor or Supplier. Once a Gonje Vendor or Supplier accepts your order, a distinct and binding agreement is established between you for the supply of those products. It's important to understand that Gonje is not a party to this agreement, and we do not assume any responsibilities related to it. For orders accepted by us, we will diligently deliver each product as per your order, in compliance with the terms and conditions specified here.",
          "This includes ensuring the quality of products, presenting accurate information about products on the relevant product detail page within the App, and providing solutions for any claims or issues that arise from or are connected to the agreement between you and the Vendor or Supplier.",
          "Every product order placed through the Gonje App is considered an offer from you to purchase the specified product. This offer encompasses the indicated price, which includes delivery charges, taxes, and any other applicable fees, at the time of order placement through the App.",
          "In order to facilitate the processing of orders placed through the App, we may request additional details or ask you to verify your information. Your cooperation in promptly providing current, comprehensive, and accurate details as requested by the App is greatly appreciated.",
          "Please be aware of the following minimum order amounts when placing orders through the App: a minimum order value of $50.00, excluding any associated Delivery Fee. These minimum amounts are subject to change by Gonje periodically. Any adjustments will be communicated to you via the App and/or detailed in the terms and conditions.",
        ],
      },
      {
        heading: "2.2 Fees and Charges",
        paragraphs: [
          "By placing an order through the Gonje App and having it accepted, you agree to cover the following fees and charges, where applicable: the purchase price of each product as indicated in the App; the Delivery Fee, which is shown and displayed within the App during the order placement process; and any other fees and charges outlined in the terms and conditions.",
          "All fees, charges, and prices for products as described in these terms and conditions include GST where it is applicable.",
          "The purchase price for each product is clearly displayed in the product list within the App at the time you submit your order.",
          "In cases where a product you've ordered is unavailable and no substitute is provided, or if the ordered product falls under a weight range and is supplied below the maximum weight, we will initiate a refund. This refund, excluding the Delivery Fee, will be processed within 3-5 business days using your original payment method or through alternative means.",
          "There is no obligation for us to match prices for products, even if they are available elsewhere. Product pricing displayed within the App may vary based on the postcode you've selected — for instance, the price of a product in Sydney may differ from the price of the same product in Melbourne.",
          "Just like in physical supermarkets, product prices are subject to change over time, and these changes may occur without prior notice. Once we've accepted your order, the prices applicable to the products in that order will remain unchanged, in line with the terms and conditions.",
        ],
      },
      {
        heading: "2.3 Payment Options",
        paragraphs: [
          "To settle the applicable fees and charges within the Gonje App, kindly utilise the mobile payment services outlined below. You have the convenience of using the following mobile payment services: Stripe, PayPal, Zip Pay, Apple Pay and Google Pay.",
          "Should we encounter any challenges in processing your payment for an accepted order, we will promptly notify you of the issue and unfortunately, cancel the order.",
          "It's crucial that you refrain from employing fraudulent or unlawful methods to make payments for your selected products.",
        ],
      },
      {
        heading: "2.4 Receipts",
        paragraphs: [
          "Upon delivery (where applicable), we will furnish you with a receipt for the products included in your order. This receipt will provide a comprehensive breakdown of the total fees and charges for the products within the order. Additionally, if any items were out of stock or if weight ranged items were supplied below the maximum weight, the receipt will indicate the refunded dollar value to your original payment method.",
        ],
      },
      {
        heading: "2.5 Security and Risk Evaluation",
        paragraphs: [
          "At Gonje, we have robust mechanisms in place to identify transactions that might be deemed illegal or in violation of the terms and conditions. There might be instances where we reach out to you via phone or email to verify your payment and information particulars. In the event that we are unable to verify these details, regrettably, we may need to cancel your order. If you ever have doubts about the authenticity of someone contacting you claiming to be from Gonje, please don't hesitate to reach out to our Customer Service Centre at 1800 749 277 during Contact Hours or drop us an email at help@gonje.com.",
        ],
      },
      {
        heading: "2.6 Everyday Rewards Program",
        paragraphs: [
          "For Gonje patrons looking to partake in the Everyday Rewards program, the process entails creating an online account within the Gonje App and subsequently linking it to your registered Everyday Rewards account. This linkage can be facilitated through the 'My Account' section of the app. Once established, you can commence accumulating Everyday Rewards points on qualifying purchases made via the Gonje app. It's worth noting that for orders that have been settled and delivered, post application of discounts or vouchers, customers will earn 1 standard Everyday Rewards point for every dollar expended within the Gonje app. The accrual of additional Everyday Rewards points through points boosters will not be feasible, unless explicitly stipulated otherwise in the specific points booster terms and conditions.",
        ],
      },
    ],
  },
  {
    heading: "3. Products",
    subsections: [
      {
        heading: "3.1 Acceptance or Rejection of an Order",
        paragraphs: [
          "Both Gonje and its partners reserve the right to either accept or reject your order for various reasons. These reasons may include the unavailability of the requested product, discrepancies in pricing or product descriptions as displayed on the Gonje App, or errors in your order details.",
          "Should we need to decline an order placed through the Gonje App, our aim is to promptly notify you of this decision. This communication will take place either during the placement of your order or within a reasonable period after its submission.",
        ],
      },
      {
        heading: "3.2 Product Quantity Limits",
        paragraphs: [
          "Gonje holds the discretion to impose limits on the number of products or items that can be purchased in a single transaction. Information about such limits will be communicated to you either at the time of placing an order or within a reasonable timeframe after you've submitted your order.",
          "It's important to note that purchasing items for resale to third parties or for commercial purposes is not permitted. In instances where concerns arise about the quantity of items in your order, we may contact you during order placement or shortly thereafter.",
          "We reserve the right to cancel multiple orders placed by you, whether using the same or different registration details, if we reasonably believe that these orders are not for personal use. Such cancellations, when warranted, will occur without prior notice, and in line with our Terms and Conditions, we may also opt to suspend or terminate your account.",
        ],
      },
      {
        heading: "3.3 Delivery of Products",
        paragraphs: [
          "It is essential to recognize that Gonje is not responsible for the delivery of your order.",
          "Regrettably, you are not able to collect your Gonje order from Metro stores or supermarkets.",
          "We are not liable for any property loss or damage incurred by you in connection with the delivery of products to your designated delivery address.",
          "Please be aware that we exclusively deliver products ordered via the Gonje App to locations where our delivery services are available. You can verify our delivery areas by entering your postcode or location within the app.",
          "Further details about delivery timeframes and processes can be accessed on the Gonje App. While we strive to adhere to the estimated 60-minute delivery window initially provided upon order placement, please understand that these timeframes are approximate. Factors such as traffic or unexpected situations may cause delivery delays. Regrettably, Gonje will not offer refunds or discounts on orders or delivery fees for deliveries that are not punctual.",
          "By placing your order through the Gonje App, you commit to complying with specific delivery requirements mentioned in these terms and conditions, as well as any additional requirements communicated to you during the order process.",
          "We execute contactless delivery services for your orders. Upon delivery, unless you've opted for the “leave at door” choice, we will deliver the products to the front door of the specified delivery address. Our delivery personnel will take a photograph of the products to confirm delivery, knock on your door, or employ other means to alert you about the delivery. Should you request an internal delivery at the delivery address and we agree, you assume responsibility for any loss or damage stemming from the delivery of products beyond the front door.",
          "In cases where you've selected the “deliver to you” option for your order, but you are unavailable at the delivery address or communication cannot be established, we will leave your order at your nominated spot or another suitable location we determine at the time.",
          "Please acknowledge that we or our partners may document the details of any identification provided during product delivery.",
          "If you opt for the “leave at door” choice, we will endeavor to contact you once we've arrived at the delivery address or at your nominated phone number (unless you've requested otherwise). If we are unable to reach you, we will leave your order at your designated spot or an alternative suitable location.",
        ],
      },
      {
        heading: "3.4 Risk and Ownership",
        paragraphs: [
          "In situations where products are delivered by Gonje or our partners, ownership (title) of the products is transferred to you on the later of two occurrences: payment for the respective products, or delivery of the products to the delivery address, including unattended deliveries at the said address.",
          "The risk associated with the products transfers to you at the moment of delivery to the specified delivery address. This also includes instances of unattended deliveries at the delivery address.",
        ],
      },
      {
        heading: "3.5 Order Cancellation",
        paragraphs: [
          "A) We hold the right to cancel any order or part of an order (including those already accepted) without incurring any liability if: the requested products in the order are unavailable; there exists an error in the price or product description relating to the relevant product as displayed on the Gonje App; or the order is placed in violation of these terms and conditions.",
          "Should your order be cancelled due to product unavailability or a pricing/product description error, we will provide you with reasonable notice of the cancellation. You will not be charged for the cancelled order. If payment has already been processed for the cancelled order, including delivery fees or other associated charges, the entire payment amount will be refunded to your original payment method or through an alternative means.",
          "In circumstances where the order was placed in violation of these terms and conditions, or if you are otherwise in breach of them, we will notify you of the cancellation with reasonable notice.",
          "For all other situations, you reserve the right to cancel your order (in its entirety) by reaching out to our Customer Service Centre at 1800 749 277 during Contact Hours before your order has been dispatched for delivery by our delivery partner.",
        ],
      },
      {
        heading: "3.6 Substitution of Products",
        paragraphs: [
          "You recognize that a product you request may be unavailable or temporarily out of stock. In such cases, we might not be able to furnish you with the specified product.",
          "Should we encounter a situation where we are unable to provide the product you ordered, and unless you've chosen not to receive substitutions, we will strive to offer you an alternative product when the chosen product is unavailable or we cannot provide the specific product you've selected.",
          "Our intention is to select substitute products that are akin in value and quality. However, we maintain the right to withhold a substitute product, even if a suitable alternative exists. For certain products, such as baby formula, we might not provide a substitute option. If you've opted for substitute products and we need to explore alternatives, we may reach out to you via telephone, SMS, or email to discuss potential alternatives for your order.",
          "Our aim is to provide you with a substitute product that is of equal or higher value than the original product you selected. In such cases, you will be charged the price of the product you initially ordered, rather than the substitute's price. If a substitute product of lesser value is provided, the price difference between your chosen product and the substitute will be refunded to your original payment method or through an alternate means.",
          "It's important to note that when a substitute product is provided in place of your chosen product, we cannot guarantee that the substitute meets your specific dietary requirements or allergies. To make informed choices, please review the labels of each product, including any substitute products provided.",
          "If you wish to opt out of receiving substitutions for products that are unavailable or temporarily out of stock, we will notify you of these products in your order. Appropriate refunds will be arranged for all valid payments received for these items.",
        ],
      },
      {
        heading: "3.7 Returns Policy",
        paragraphs: [
          "If you change your mind: until further notice, Gonje will not facilitate refunds or exchanges for products if you've simply changed your mind after purchasing them on the app. If you've purchased additional items, we encourage you to consider sharing them with those in need, particularly the elderly and the most vulnerable.",
          "Faulty Products: if a product you acquire through the Gonje App is found to be faulty, kindly reach out to our Customer Service Centre at 1800 749 277 during Contact Hours or email help@gonje.com. We will be glad to refund the purchase price for the faulty product or discuss an appropriate alternative solution. To process this, our Customer Service team may require your identification, including your name, address, and signature, along with verification of the faulty product. These details will be documented for loss prevention purposes.",
          "For certain high-value items, we retain the right to assess the product's quality before offering a suitable remedy. In cases where we cannot assess the product ourselves, we will arrange for the product to be evaluated by the manufacturer. You also have the option of liaising directly with the manufacturer, which may prove to be a more efficient process — our Customer Service Team will be pleased to provide you with relevant contact information to assist you.",
          "Rainchecks: rainchecks for advertised stock purchases will not be available until further notice. The term 'advertised stock' encompasses products that are advertised for sale or are part of a promotion on the Gonje App.",
          "Additional Information: if returning a product is challenging due to factors such as the nature of the fault, the product's size, or its attachment to your premises, please connect with our Customer Service Team at 1800 749 277 during Contact Hours. We will facilitate an assessment of the product and provide an appropriate remedy. In instances where applicable, we kindly request that you return products along with their accessories and instruction manuals.",
          "For major failures with goods, you can choose between a refund or replacement. If the failure does not qualify as a major one, you are entitled to have the failure rectified in a reasonable time. If this doesn't occur, you have the right to a refund for the goods and can cancel the service contract for a refund of any unused portion. You are also eligible for compensation for other foreseeable loss or damage stemming from the goods or service failure.",
          "Gonje is not responsible for providing remedies under the Australian Consumer Law for both major and non-major failures in regard to products. Our returns policy complements any additional rights you may have under the consumer guarantees of the Australian Consumer Law. Our liability to you under this agreement is further outlined in clause 4.1.",
        ],
      },
      {
        heading: "3.8 Fresh or Free Guarantee",
        paragraphs: [
          "In addition to your legal rights and other remedies, Gonje extends a “Fresh or Free Guarantee” to specific packaged fresh food items in orders. If you are dissatisfied with any packaged item marked with the “Fresh or Free Guarantee” in your order, please inform our Customer Service Centre at 1800 749 277 during Contact Hours or email help@gonje.com. You will receive a refund for the affected products to your original payment method, along with a credit equivalent to the value of the affected product. This credit can be used to purchase a replacement product from the app as part of a future order.",
          "The aforementioned Fresh or Free Guarantee applies to all packaged items marked with the “Fresh or Free Guarantee” across the Gonje App. For any queries, please reach out to our Customer Service Centre at 1800 749 277 during Contact Hours.",
        ],
      },
    ],
  },
  {
    heading: "4. General",
    subsections: [
      {
        heading: "4.1 Liability",
        paragraphs: [
          "While not excluding, limiting, or altering your rights and remedies under the consumer guarantees provisions of the Australian Consumer Law or Gonje's liabilities under those provisions:",
          "You acknowledge that the Gonje App is provided “as is” and we do not make any warranties or representations regarding the App's suitability for any particular purpose.",
          "We exclude all other implied terms and warranties, whether statutory or otherwise, concerning the App or the subject matter of this agreement.",
          "We will not be held liable for indirect or consequential loss connected to this agreement, whether in contract, tort, under statute, or otherwise (including, but not limited to, loss of revenue, profits, anticipated profits, data corruption, and any other commercial or economic loss) unless such loss arises from our own negligence or deliberate misconduct.",
          "Our liability for loss or damage arising from this agreement or related to the established relationship is reduced to the extent that you contribute to the loss or damage. This reduction applies to liability under contract, tort (including negligence), under statute, or any other legal basis.",
        ],
      },
      {
        heading: "4.2 Intellectual Property Rights",
        paragraphs: [
          "A) You recognize that the copyright of the Gonje App, including the software, design, text, graphics, layout, content, and materials (collectively referred to as the “Materials”), is owned by us or licensed to us. You acknowledge that listing content and materials related to Products on the App are owned by our Vendors, Suppliers or Partners and licensed to us. You must not modify, copy, adapt, store in a retrieval system, reproduce, upload, post, transmit, sell, distribute, or communicate Materials without our prior written consent, and must not frame or embed App materials in another app without our prior written consent.",
          "B) You may print hard copies of content and materials for viewing and purchasing Products, not for any other use, including commercial use, and may store a copy of App content on your local computer or mobile device for viewing purposes only.",
          "C) This App contains registered trademarks and other trademarks protected by law. You may not use any marks or trademarks on the App, our name, or the names of our related entities without our prior written consent. You must not use any company, product, or service marks owned by other third parties (including our Vendors, Partners, and Suppliers) without obtaining the relevant third party owner's consent.",
        ],
      },
      {
        heading: "4.3 Changes to These Terms and Conditions",
        paragraphs: [
          "We retain the right to amend these terms and conditions at any time, and such changes will take effect upon posting. Subsequent orders may therefore be subject to different terms and conditions. We advise you to carefully review these terms and conditions each time you agree to them during the ordering process.",
          "For orders already accepted by us, the terms and conditions applicable to that order are those in effect at the time of order placement.",
        ],
      },
      {
        heading: "4.4 Severability",
        paragraphs: [
          "If any part of a provision of this agreement is void, unenforceable, or illegal in a jurisdiction, it will be severed in that jurisdiction. The rest of the agreement remains valid and enforceable, and the validity or enforceability of the provision in any other jurisdiction is unaffected. This provision does not apply if the severance alters the fundamental nature of the agreement or contravenes public policy.",
        ],
      },
      {
        heading: "4.5 Jurisdiction",
        paragraphs: [
          "This agreement is governed by the laws of New South Wales, Australia. Both parties submit to the non-exclusive jurisdiction of the courts in that jurisdiction. Your rights or remedies under the Australian Consumer Law are separate from these terms and conditions, and this clause does not apply to any claims you may have under the Australian Consumer Law.",
        ],
      },
      {
        heading: "4.6 Privacy and Commercial Electronic Messages",
        paragraphs: [
          "Our Privacy Policy constitutes part of these terms and conditions. You acknowledge having read our Privacy Policy and Collection Notice, and you understand that they govern your use of the Gonje App and its related services, including purchasing goods and services from us or our Partners through the App.",
          "By using this app, you consent to our collection and use of technical data and related information, including but not limited to information about your device, system, application software, and peripherals. This data is collected periodically to facilitate software updates, product support, and other services related to the relevant technology.",
          "You agree that we and our Partners (through us) may send you commercial electronic messages and tailored advertisements (including marketing communications advertising goods and services) through various channels and media (such as email, SMS, and phone) unless you have opted out. Your agreement to receive commercial electronic messages from us remains valid until you opt out.",
          "To opt out of receiving commercial electronic messages from us, utilize the unsubscribe feature in the footer of any such message. This will also opt you out of receiving customer surveys, feedback requests, and market research (Customer Feedback Messages). If you wish to opt out of Customer Feedback Messages only, use the unsubscribe option in the footer of those messages (this won't affect other commercial electronic messages from us). Opting out of commercial electronic messages from us will not impact your consent to receive messages from other brands or Partners, if you have independently signed up with them. To opt out of messages from other brands or Partners, follow their opt-out instructions provided in their communications or terms and conditions.",
        ],
      },
    ],
  },
  {
    heading: "6. Promotions and Account Credits",
    subsections: [
      {
        heading: "6.1 Recognised Credits Terms and Conditions",
        paragraphs: [
          "Gonje AU Pty Ltd Account Credits (hereafter referred to as Gonje Account Credits) were credits that could be applied to a customer's Instant Delivery Service order at the discretion of Gonje AU Pty Ltd. Gonje Pty Limited will honor any previously accrued Gonje Account Credits up to a maximum value of $50.00 per account (Recognised Credits).",
          "How to Apply for Recognised Credits: to seek recognition of your Gonje Account Credits as Recognised Credits, please get in touch with Gonje through help@gonje.com or via Live Chat. You will need to submit a form containing your name, email, phone number, the value of your Gonje Account Credits, and evidence of the Gonje Account Credits. Gonje Pty Limited retains the right, at its sole discretion, to accept (either wholly or partially) any application to acknowledge previously held Gonje Account Credits as Recognised Credits. All applications for Recognised Credits must be submitted by 11:59 pm, August 31, 2023. Requests for Recognised Credits beyond this date will not be entertained.",
          "How to Utilise the Recognised Gonje Account Credits: upon our acceptance, your Recognised Credits can solely be redeemed for the purchase of eligible goods on the App and will remain valid for 3 months from the date of issuance. The Recognised Credits are non-transferable, cannot be exchanged for cash or any alternative, and hold no monetary value. The Recognised Credits Terms and Conditions are to be adhered to in conjunction with the Gonje Pty Limited Terms and Conditions.",
        ],
      },
    ],
  },
];

export type TermsDefinition = {
  term: string;
  meaning: string;
};

export const definitions: readonly TermsDefinition[] = [
  { term: "App", meaning: "Refers to the Gonje application as defined in clause 1.1." },
  {
    term: "Contact Hours",
    meaning:
      "Represents the operating hours of the Customer Service Centre, which are from Monday to Sunday, 9:00 am to 9:00 pm Australian Eastern Standard Time.",
  },
  {
    term: "Delivery Address",
    meaning:
      "Signifies the address specified by you for the delivery of Products that we, or a delivery partner, will provide to you according to these terms and conditions.",
  },
  { term: "Delivery Fee", meaning: "Holds the meaning given in clause 2.2." },
  { term: "GST", meaning: "Carries the meaning as defined in the A New Tax System (Goods and Services Tax) Act 1999 (Cwlth)." },
  {
    term: "LoginID",
    meaning: "Represents the email address or phone number that you provided during the registration process to access the App.",
  },
  { term: "Materials", meaning: "Encompasses the content described in clause 4.2." },
  { term: "Order", meaning: "Refers to any order for a Product or Products submitted using the App." },
  {
    term: "Partner",
    meaning:
      "Designates any company that Gonje engages to aid in supplying goods and/or services to customers, including but not limited to supermarkets.",
  },
  { term: "Product", meaning: "Denotes each good or service that is advertised for purchase by you on the App." },
];

/**
 * Transcription notes — not for display, kept here so the gap is visible
 * next time this content is touched:
 *  - The source page has no clause 1.6 (goes 1.5 -> 1.7) and no section 5
 *    heading (goes "4. General" -> "6. Promotions and Account Credits") even
 *    though the definitions list is clearly meant to be its own section 5.
 *    That's reproduced here as found, not invented or renumbered.
 *  - "Onje Group Limited ()" and a couple of other spots on the source page
 *    read as unfilled template fields (a trailing "()", "purchase the
 *    specified product from .") — smoothed into readable prose here rather
 *    than reproducing the broken punctuation, without adding any fact that
 *    wasn't already stated elsewhere in the same document.
 *  - The Customer Service Centre number quoted throughout (1800 749 277) is
 *    what's on the source terms page — it doesn't match the phone number in
 *    lib/site.ts (03 9969 2891). Left as-is since it's quoted legal text,
 *    but worth reconciling with whoever owns the terms content.
 */
