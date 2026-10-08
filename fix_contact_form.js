const fs = require('fs');

let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

content = content.replace(
  'I agree to CREATE collecting and using the information provided above to respond to my enquiry and communicate with me about its services. For details on how we handle your data, please see our',
  'We collect your name, email address and message to respond to your enquiry. By submitting this form, you consent to this processing as described in our'
);

fs.writeFileSync('src/app/contact/page.tsx', content);
