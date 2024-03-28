import { JSONSchema } from "json-schema-to-ts";

const settingsSchema = {
  type: "object",
  additionalProperties: false,
  required: ["email", "agrees"],
  properties: {
    email: {
      type: "string",
      format: "email",
    },
    agrees: {
      type: "boolean",
      default: false,
    },
  },
} as const satisfies JSONSchema;

pplus.set_script_metadata({
  name: "Demo script",
  description:
    "This is a demo script. It does nothing, but showcases how to set up the scripting environment!",
  version: "0.0.1",
  settingsForm: [
    {
      $el: "h2",
      if: "true",
      children: "Welcome to scripts!",
    },
    {
      $formkit: "primeInputText",
      name: "email",
      label: "Email",
      help: "This isn't even used. Just for shows!",
      validation: "required|email",
    },
    {
      $formkit: "primeCheckbox",
      name: "agrees",
      label: "Are you agreeing?",
    },
  ],
  settingsSchema: settingsSchema,
});
