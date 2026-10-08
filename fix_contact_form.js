const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

content = content.replace(/_gotcha: "",/, '_gotcha: "",\n    consent: false,');
content = content.replace(
  /const handleChange = \(e: React.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement>\) => {/,
  `const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
      return;
    }`
);

content = content.replace(
  /<button\s+type="submit"/,
  `<div className="flex items-start gap-4 mt-6">
                  <input required type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 accent-brand-red w-4 h-4 cursor-pointer" />
                  <label htmlFor="consent" className="text-sm text-white/70 leading-relaxed cursor-pointer">
                    I agree to CREATE collecting and using the information provided above to respond to my enquiry and communicate with me about its services. For details on how we handle your data, please see our <Link href="/privacy" className="text-brand-red hover:underline">Privacy Policy</Link>.
                  </label>
                </div>

                <button 
                  type="submit"`
);

if (!content.includes('import Link')) {
  content = content.replace(/import \{ motion \} from "framer-motion";/, 'import { motion } from "framer-motion";\nimport Link from "next/link";');
}

fs.writeFileSync('src/app/contact/page.tsx', content);
