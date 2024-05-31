export const formConfig = {
  blocks: [
    {
      token: "PERSON_NAME",
      type: "text",
      props: {
        title: "Enter your name",
        required: true,
        placeholder: "John",
      },
    },
    {
      token: "EMAIL",
      type: "text",
      props: {
        title: "Enter your email",
        required: true,
        placeholder: "john@example.com",
      },
    },
    {
      token: "Is person minor",
      type: "checkbox",
      props: {
        title: "Is the current person minor",
        required: true,
        placeholder: "john@example.com",
        default: false,
      },
    },
    {
      token: "PERSON_DOB",
      type: "date",
      props: {
        title: "Enter your DOB",
        required: true,
        placeholder: "01/01/1998",
        // default: false,
      },
    },
    {
      token: "Mobile",
      type: "number",
      props: {
        title: "Enter your mobile number",
        required: true,
        placeholder: "+919985116034",
      },
    },
  ],
};
