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
