export type Testimonial = {
  name: string;
  place: string;
  service: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sajitha P.",
    place: "Vailathur",
    service: "Paediatrics",
    quote:
      "They message me three days before every vaccine is due. In four years I have not missed one, and I did not have to remember a single date myself.",
  },
  {
    name: "Abdul Latheef",
    place: "Tanur",
    service: "Diabetology",
    quote:
      "Same doctor every three months for six years. He opens the file and already knows what changed. That is the whole reason I stopped going to the big hospital.",
  },
  {
    name: "Reshma K.",
    place: "Kuttippuram",
    service: "Dermatology",
    quote:
      "The doctor told me straight what the treatment could and could not fix. Nobody had done that before. The results came slower than I wanted but exactly as she described.",
  },
  {
    name: "Muhammed Ashraf",
    place: "Valanchery",
    service: "Orthopaedics",
    quote:
      "Injured my knee in a club match on Sunday, had the scan report and the physio plan by Tuesday. Back on the field in five months.",
  },
  {
    name: "Geetha Nair",
    place: "Vailathur",
    service: "Home care",
    quote:
      "My father is 84 and cannot travel. The nurse comes on the first Saturday, the doctor reviews on video, and the medicines arrive with them. It gave our family back its weekends.",
  },
  {
    name: "Nasrin Beevi",
    place: "Ponnani",
    service: "Obstetrics",
    quote:
      "First pregnancy, and I was frightened. Dr. Fathima sat with me for forty minutes on the first visit. The scan calendar was printed and handed to me the same day.",
  },
];
